const { room } = require('../../init.js');
let { HaxNotification } = require('../variables/structures.js');

const colors = require('../../resources/colors.js');

function clearbansCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length == 0) {
        room.clearBans();
        room.sendAnnouncement(
            '✔️ Bans cleared !',
            null,
            colors.announcementColor,
            'bold',
            null
        );
        global.banList = [];
    } else if (msgArray.length == 1) {
        if (parseInt(msgArray[0]) > 0) {
            var ID = parseInt(msgArray[0]);
            room.clearBan(ID);
            if (global.banList.length != global.banList.filter((p) => p[1] != ID).length) {
                room.sendAnnouncement(
                    `✔️ ${global.banList.filter((p) => p[1] == ID)[0][0]} has been unbanned from the room !`,
                    null,
                    colors.announcementColor,
                    'bold',
                    null
                );
            } else {
                room.sendAnnouncement(
                    `The ID you entered doesn't have a ban associated to. Enter "!help clearbans" for more information.`,
                    player.id,
                    colors.errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
            global.banList = global.banList.filter((p) => p[1] != ID);
        } else {
            room.sendAnnouncement(
                `Invalid ID entered. Enter "!help clearbans" for more information.`,
                player.id,
                colors.errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help clearbans" for more information.`,
            player.id,
            colors.errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function banListCommand(player, message) {
    if (global.banList.length == 0) {
        room.sendAnnouncement(
            "📢 There's nobody in the ban list.",
            player.id,
            colors.announcementColor,
            'bold',
            null
        );
        return false;
    }
    var cstm = '📢 Ban list : ';
    for (let ban of global.banList) {
        cstm += ban[0] + `[${ban[1]}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        colors.announcementColor,
        'bold',
        null
    );
}

function adminListCommand(player, message) {
    if (global.adminList.length == 0) {
        room.sendAnnouncement(
            "📢 There's nobody in the admin list.",
            player.id,
            colors.announcementColor,
            'bold',
            null
        );
        return false;
    }
    var cstm = '📢 Admin list : ';
    for (let i = 0; i < global.adminList.length; i++) {
        cstm += global.adminList[i][1] + `[${i}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        colors.announcementColor,
        'bold',
        null
    );
}

function setAdminCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerAdmin = room.getPlayer(parseInt(msgArray[0]));

                if (!global.adminList.map((a) => a[0]).includes(global.authArray[playerAdmin.id][0])) {
                    if (!global.masterList.includes(global.authArray[playerAdmin.id][0])) {
                        room.setPlayerAdmin(playerAdmin.id, true);
                        global.adminList.push([global.authArray[playerAdmin.id][0], playerAdmin.name]);
                        room.sendAnnouncement(
                            `${playerAdmin.name} is now a room admin !`,
                            null,
                            colors.announcementColor,
                            'bold',
                            HaxNotification.CHAT
                        );
                    } else {
                        room.sendAnnouncement(
                            `This player is a master already !`,
                            player.id,
                            colors.errorColor,
                            'bold',
                            HaxNotification.CHAT
                        );
                    }
                } else {
                    room.sendAnnouncement(
                        `This player is a permanent admin already !`,
                        player.id,
                        colors.errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `There is no player with such ID in the room. Enter "!help setadmin" for more information.`,
                    player.id,
                    colors.errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else {
            room.sendAnnouncement(
                `Incorrect format for your argument. Enter "!help setadmin" for more information.`,
                player.id,
                colors.errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help setadmin" for more information.`,
            player.id,
            colors.errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function removeAdminCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerAdmin = room.getPlayer(parseInt(msgArray[0]));

                if (global.adminList.map((a) => a[0]).includes(global.authArray[playerAdmin.id][0])) {
                    room.setPlayerAdmin(playerAdmin.id, false);
                    global.adminList = global.adminList.filter((a) => a[0] != global.authArray[playerAdmin.id][0]);
                    room.sendAnnouncement(
                        `${playerAdmin.name} is not a room admin anymore !`,
                        null,
                        colors.announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.sendAnnouncement(
                        `This player isn't a permanent admin !`,
                        player.id,
                        colors.errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `There is no player with such ID in the room. Enter "!help removeadmin" for more information.`,
                    player.id,
                    colors.errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else if (msgArray[0].length > 0 && parseInt(msgArray[0]) < global.adminList.length) {
            var index = parseInt(msgArray[0]);
            var playerAdmin = global.adminList[index];
            if (players.findIndex((p) => global.authArray[p.id][0] == playerAdmin[0]) != -1) {
                // check if there is the removed admin in the room
                var indexRem = players.findIndex((p) => global.authArray[p.id][0] == playerAdmin[0]);
                room.setPlayerAdmin(players[indexRem].id, false);
            }
            global.adminList.splice(index);
            room.sendAnnouncement(
                `${playerAdmin[1]} is not a room admin anymore !`,
                null,
                colors.announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `Incorrect format for your argument. Enter "!help removeadmin" for more information.`,
                player.id,
                colors.errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help removeadmin" for more information.`,
            player.id,
            colors.errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function passwordCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray.length == 1 && msgArray[0] == '') {
            roomPassword = '';
            room.setPassword(null);
            room.sendAnnouncement(
                `The room password has been removed.`,
                player.id,
                colors.announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        }
        roomPassword = msgArray.join(' ');
        room.setPassword(roomPassword);
        room.sendAnnouncement(
            `The room password has been set to ${roomPassword}`,
            player.id,
            colors.announcementColor,
            'bold',
            HaxNotification.CHAT
        );
    } else {
        if (roomPassword != '') {
            roomPassword = '';
            room.setPassword(null);
            room.sendAnnouncement(
                `The room password has been removed.`,
                player.id,
                colors.announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `The room currently does not have a password. Enter "!help password" for more information.`,
                player.id,
                colors.errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
}

module.exports = {
    clearbansCommand,
    banListCommand,
    adminListCommand,
    setAdminCommand,
    removeAdminCommand,
    passwordCommand
};