/* ROOM */
RoomParams = {
    roomName: "Private Room",
    maxPlayers: 40,
    public: false,
    noPlayer: true,
    token: "Aca iria el token de la sala",
    timeLimit: 3,
    scoreLimit: 3,
    teamsLock: false
}

var roomWebhook = ''; // this webhook is used to send the details of the room (chat, join, leave) ; it should be in a private discord channel
var gameWebhook = ''; // this webhook is used to send the summary of the games ; it should be in a public discord channel
var fetchRecordingVariable = true;

var gameConfig = {
    roomName: RoomParams.roomName,
    maxPlayers: RoomParams.maxPlayers,
    public: RoomParams.public,
    noPlayer: RoomParams.noPlayer,
}

if (typeof token == 'string' && token.length == 39) {
    gameConfig.token = token;
}

const room = HBInit(gameConfig);

module.exports = room;
