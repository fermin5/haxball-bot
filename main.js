const { getGoalGame, checkGoalKickTouch } = require('./utils/main-functions.js');
const { Game, BallTouch } = require('./utils/classes.js');
const { commands, getCommand } = require('./utils/commands.js');
const { stadiumCommand } = require('./utils/commands/admin.js');
const {
    getPlayerComp,
    teamChat,
    playerChat
} = require('./utils/helpers/chat.js');

const {
    checkTime,
    endGame,
    handleLineupChangeLeave,
    handleLineupChangeTeamChange
} = require('./utils/helpers/game.js');

const {
    updateTeams,
    updateAdmins,
    getRole,
    ghostKickHandle,
    handleActivityPlayerTeamChange,
    handleActivityStop,
    handleActivity
} = require('./utils/helpers/players.js');

const {
    getGameStats,
    getGoalString,
    getBallSpeed,
    getLastTouchOfTheBall
} = require('./utils/helpers/statics.js');

let { Team, State, Role, HaxNotification, Situation } = require('./utils/variables/structures.js');

const colors = require('./resources/colors.js');

// Gets the room object
let { room, game } = require('./init.js');

var disableBans = true;
var debugMode = false;
var mentionPlayersUnpause = true;
var stopTimeout;
var startTimeout;
var unpauseTimeout;
var emptyPlayer = {
    id: 0,
};

stadiumCommand(emptyPlayer, "!big");


if (typeof String.prototype.replaceAll != 'function') {
    String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };
}

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
    global.authArray[player.id] = [player.auth, player.conn];
    room.sendAnnouncement(
        `👋 Welcome ${player.name} !\nEnter "t" before your message to use team chat and "@@" followed by a player name to PM him !`,
        player.id,
        colors.welcomeColor,
        'bold',
        HaxNotification.CHAT
    );
    updateTeams();
    updateAdmins();
    if (global.masterList.findIndex((auth) => auth == player.auth) != -1) {
        room.sendAnnouncement(
            `Master ${player.name} has connected to the room !`,
            null,
            colors.announcementColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(player.id, true);
    } else if (global.adminList.map((a) => a[0]).findIndex((auth) => auth == player.auth) != -1) {
        room.sendAnnouncement(
            `Admin ${player.name} has connected to the room !`,
            null,
            colors.announcementColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(player.id, true);
    }
    var sameAuthCheck = global.players.filter((p) => p.id != player.id && global.authArray[p.id][0] == player.auth);
    if (sameAuthCheck.length > 0 && !debugMode) {
        var oldPlayerArray = global.players.filter((p) => p.id != player.id && global.authArray[p.id][0] == player.auth);
        for (let oldPlayer of oldPlayerArray) {
            ghostKickHandle(oldPlayer, player);
        }
    }
};

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    handleLineupChangeTeamChange(changedPlayer);
    updateTeams();
    handleActivityPlayerTeamChange(changedPlayer);
};

room.onPlayerLeave = function (player) {
    handleLineupChangeLeave(player);
    updateTeams();
    updateAdmins();
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    kickFetchVariable = true;
    if ((ban && ((byPlayer != null &&
        (byPlayer.id == kickedPlayer.id || getRole(byPlayer) < Role.MASTER)) || getRole(kickedPlayer) == Role.MASTER)) || disableBans
    ) {
        room.clearBan(kickedPlayer.id);
        return;
    }
    if (byPlayer != null && getRole(byPlayer) < Role.ADMIN_PERM) {
        room.sendAnnouncement(
            'You are not allowed to kick/ban players !',
            byPlayer.id,
            colors.errorColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(byPlayer.id, false);
        return;
    }
    if (ban) global.banList.push([kickedPlayer.name, kickedPlayer.id]);
};

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    let msgArray = message.split(/ +/);
    if (msgArray[0][0] == '!') {
        let command = getCommand(msgArray[0].slice(1).toLowerCase());
        if (command != false && commands[command].roles <= getRole(player)) commands[command].function(player, message);
        else
            room.sendAnnouncement(
                `The command you tried to enter does not exist for you. Please enter '!help' to get the available commands to you.`,
                player.id,
                colors.errorColor,
                'bold',
                HaxNotification.CHAT
            );
        return false;
    }
    if (msgArray[0].toLowerCase() == 't') {
        teamChat(player, message);
        return false;
    }
    if (msgArray[0].substring(0, 2) === '@@') {
        playerChat(player, message);
        return false;
    }
};

room.onPlayerActivity = function (player) {
    if (global.gameState !== State.STOP) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
};

room.onPlayerBallKick = function (player) {
    if (global.playSituation != Situation.GOAL) {
        var ballPosition = room.getBallPosition();
        if (game.touchArray.length == 0 || player.id != game.touchArray[game.touchArray.length - 1].player.id) {
            if (global.playSituation == Situation.KICKOFF) global.playSituation = Situation.PLAY;
            lastTeamTouched = player.team;
            game.touchArray.push(
                new BallTouch(
                    player,
                    game.scores.time,
                    getGoalGame(game),
                    ballPosition
                )
            );
            global.lastTouches[0] = checkGoalKickTouch(
                game.touchArray,
                game.touchArray.length - 1,
                getGoalGame(game)
            );
            global.lastTouches[1] = checkGoalKickTouch(
                game.touchArray,
                game.touchArray.length - 2,
                getGoalGame(game)
            );
        }
        console.log(global.lastTouches);
    }
};

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    clearTimeout(startTimeout);
    if (byPlayer != null) {
        clearTimeout(startTimeout);
    }
    game = new Game(room);
    possession = [0, 0];
    actionZoneHalf = [0, 0];
    global.gameState = State.PLAY;
    endGameVariable = false;
    global.goldenGoal = false;
    global.playSituation = Situation.KICKOFF;
    global.lastTouches = Array(2).fill(null);
    lastTeamTouched = Team.SPECTATORS;
};

room.onGameStop = function (byPlayer) {
    clearTimeout(stopTimeout);
    clearTimeout(unpauseTimeout);
    if (byPlayer != null) {
        clearTimeout(startTimeout);
    }
    cancelGameVariable = false;
    global.gameState = State.STOP;
    global.playSituation = Situation.STOP;
    updateTeams();
    handleActivityStop();
};

room.onGamePause = function (byPlayer) {
    if (mentionPlayersUnpause && global.gameState == State.PAUSE) {
        if (byPlayer != null) {
            room.sendAnnouncement(
                `Game paused by ${byPlayer.name} !`,
                null,
                colors.defaultColor,
                'bold',
                HaxNotification.NONE
            );
        } else {
            room.sendAnnouncement(
                `Game paused !`,
                null,
                colors.defaultColor,
                'bold',
                HaxNotification.NONE
            );
        }
    }
    clearTimeout(unpauseTimeout);
    global.gameState = State.PAUSE;
};

room.onGameUnpause = function (byPlayer) {
    unpauseTimeout = setTimeout(() => {
        global.gameState = State.PLAY;
    }, 2000);
    if (mentionPlayersUnpause) {
        if (byPlayer != null) {
            room.sendAnnouncement(
                `Game unpaused by ${byPlayer.name} !`,
                null,
                colors.defaultColor,
                'bold',
                HaxNotification.NONE
            );
        } else {
            room.sendAnnouncement(
                `Game unpaused !`,
                null,
                colors.defaultColor,
                'bold',
                HaxNotification.NONE
            );
        }
    }
};

room.onTeamGoal = function (team) {
    const scores = room.getScores();
    game.scores = scores;
    global.playSituation = Situation.GOAL;
    ballSpeed = getBallSpeed();
    var goalString = getGoalString(team);
    room.sendAnnouncement(
        goalString,
        null,
        team == Team.RED ? colors.redColor : colors.blueColor,
        null,
        HaxNotification.CHAT
    );
    if ((scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit)) || global.goldenGoal) {
        endGame(team);
        global.goldenGoal = false;
        stopTimeout = setTimeout(() => {
            room.stopGame();
        }, 1000);
    }
};

room.onPositionsReset = function () {
    global.lastTouches = Array(2).fill(null);
    lastTeamTouched = Team.SPECTATORS;
    global.playSituation = Situation.KICKOFF;
};

/* MISCELLANEOUS */

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    updateTeams();
    if (!changedPlayer.admin && getRole(changedPlayer) >= Role.ADMIN_TEMP) {
        room.setPlayerAdmin(changedPlayer.id, true);
        return;
    }
    updateAdmins(byPlayer != null && !changedPlayer.admin && changedPlayer.id == byPlayer.id ? changedPlayer.id : 0);
};

room.onKickRateLimitSet = function (min, rate, burst, byPlayer) {
    if (byPlayer != null) {
        room.sendAnnouncement(
            `It is not allowed to change the kickrate limit. It must stay at "6-0-0".`,
            player.id,
            colors.errorColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setKickRateLimit(6, 0, 0);
    }
};

room.onStadiumChange = function (newStadiumName, byPlayer) {
};

room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    getGameStats();
    handleActivity();
};