const { room } = require('../../init.js');
let { HaxNotification } = require('../variables/structures.js');

const colors = require('../../resources/colors.js');
var masterPassword = 'voxednet';

function masterCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray[0] == masterPassword) {
        if (!global.masterList.includes(global.authArray[player.id][0])) {
            room.setPlayerAdmin(player.id, true);
            global.adminList = global.adminList.filter((a) => a[0] != global.authArray[player.id][0]);
            global.masterList.push(global.authArray[player.id][0]);
            room.sendAnnouncement(
                `${player.name} is now a room master !`,
                null,
                colors.announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `You are a master already !`,
                player.id,
                colors.errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
}

module.exports = {
    masterCommand
};