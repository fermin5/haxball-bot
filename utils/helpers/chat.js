let { room, game } = require('../../init.js');
const colors = require('../../resources/colors.js');
const { commands } = require('../commands.js');

let { Team, HaxNotification } = require('../variables/structures.js');

function getPlayerComp(player) {
    if (player == null || player.id == 0) return null;
    var comp = game.playerComp;
    var index = comp[0].findIndex((c) => c.auth == global.authArray[player.id][0]);
    if (index != -1) return comp[0][index];
    index = comp[1].findIndex((c) => c.auth == global.authArray[player.id][0]);
    if (index != -1) return comp[1][index];
    return null;
}

function getTeamArray(team) {
    return team == Team.RED ? global.teamRed : team == Team.BLUE ? global.teamBlue : global.teamSpec;
}

function sendAnnouncementTeam(message, team, color, style, mention) {
    for (let player of team) {
        room.sendAnnouncement(message, player.id, color, style, mention);
    }
}

function teamChat(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    var emoji = player.team == Team.RED ? '🔴' : player.team == Team.BLUE ? '🔵' : '⚪';
    var message = `${emoji} [TEAM] ${player.name}: ${msgArray.join(' ')}`;
    var team = getTeamArray(player.team);
    var color = player.team == Team.RED ? colors.redColor : player.team == Team.BLUE ? colors.blueColor : null;
    var style = 'bold';
    var mention = HaxNotification.CHAT;
    sendAnnouncementTeam(message, team, color, style, mention);
}

function playerChat(player, message) {
    var msgArray = message.split(/ +/);
    var playerTargetIndex = global.players.findIndex(
        (p) => p.name.replaceAll(' ', '_') == msgArray[0].substring(2)
    );
    if (playerTargetIndex == -1) {
        room.sendAnnouncement(
            `Invalid player, make sure the name you entered is correct.`,
            player.id,
            colors.errorColor,
            'bold',
            null
        );
        return false;
    }
    var playerTarget = global.players[playerTargetIndex];
    if (player.id == playerTarget.id) {
        room.sendAnnouncement(
            `You can't send a PM to yourself!`,
            player.id,
            colors.errorColor,
            'bold',
            null
        );
        return false;
    }
    var messageFrom = `📝 [PM with ${playerTarget.name}] ${player.name}: ${msgArray.slice(1).join(' ')}`

    var messageTo = `📝 [PM with ${player.name}] ${player.name}: ${msgArray.slice(1).join(' ')}`

    room.sendAnnouncement(
        messageFrom,
        player.id,
        colors.privateMessageColor,
        'bold',
        HaxNotification.CHAT
    );
    room.sendAnnouncement(
        messageTo,
        playerTarget.id,
        colors.privateMessageColor,
        'bold',
        HaxNotification.CHAT
    );
}

module.exports = {
    getPlayerComp,
    teamChat,
    playerChat
};
