const { room } = require('../../init.js');
const colors = require('../../resources/colors.js');
const { getPlayerComp } = require('./chat.js');
let { Team, State, HaxNotification, Situation } = require('../variables/structures.js');
var maxInactivity = 5;

var maxAdmins = 4;

function updateTeams() {
    global.players = room.getPlayerList();
    global.teamRed = global.players.filter((p) => p.team == Team.RED);
    global.teamBlue = global.players.filter((p) => p.team == Team.BLUE);
    global.teamSpec = global.players.filter((p) => p.team == Team.SPECTATORS);
}

function updateAdmins(excludedPlayerID = 0) {
    if (global.players.length != 0 && global.players.filter((p) => p.admin).length < maxAdmins) {
        let playerArray = global.players.filter((p) => p.id != excludedPlayerID && !p.admin);
        let arrayID = playerArray.map((player) => player.id);
        room.setPlayerAdmin(Math.min(...arrayID), true);
    }
}

function getRole(player) {
    return (
        !!global.masterList.find((a) => a == global.authArray[player.id][0]) * 2 +
        !!global.adminList.find((a) => a[0] == global.authArray[player.id][0]) * 1 +
        player.admin * 1
    );
}

function ghostKickHandle(oldP, newP) {
    var teamArrayId = getTeamArray(oldP.team).map((p) => p.id);
    teamArrayId.splice(teamArrayId.findIndex((id) => id == oldP.id), 1, newP.id);

    room.kickPlayer(oldP.id, 'Ghost kick', false);
    room.setPlayerTeam(newP.id, oldP.team);
    room.setPlayerAdmin(newP.id, oldP.admin);
    room.reorderPlayers(teamArrayId, true);

    if (oldP.team != Team.SPECTATORS && global.playSituation != Situation.STOP) {
        var discProp = room.getPlayerDiscProperties(oldP.id);
        room.setPlayerDiscProperties(newP.id, discProp);
    }
}

function handleActivityPlayer(player) {
    let pComp = getPlayerComp(player);
    if (pComp != null) {
        pComp.inactivityTicks++;
        return pComp.inactivityTicks;
    }
    return 0;
}

function handleActivityPlayerTeamChange(changedPlayer) {
    if (changedPlayer.team == Team.SPECTATORS) {
        let pComp = getPlayerComp(changedPlayer);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
}

function handleActivityStop() {
    for (let player of global.players) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
}

function handleActivity() {
    if (global.gameState == State.PLAY && global.players.length > 1) {
        var playerMaxInactivity = 0;
        for (let player of global.teamRed) {
            var playerInactivity = handleActivityPlayer(player);
            playerMaxInactivity = Math.max(playerInactivity, playerMaxInactivity);
        }
        for (let player of global.teamBlue) {
            var playerInactivity = handleActivityPlayer(player);
            playerMaxInactivity = Math.max(playerInactivity, playerMaxInactivity);
        }
        if (playerMaxInactivity >= maxInactivity * 60 * 60) {
            cancelGameVariable = true;
            room.stopGame();
            room.sendAnnouncement(
                '⚠️ Game was stopped due to inactivity !',
                null,
                colors.announcementColor,
                'bold',
                HaxNotification.CHAT
            );
            handleActivityStop();
        }
    }
}

module.exports = {
    updateTeams,
    updateAdmins,
    getRole,
    ghostKickHandle,
    handleActivityPlayer,
    handleActivityPlayerTeamChange,
    handleActivityStop,
    handleActivity
};
