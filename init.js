const { Game } = require('./utils/classes.js');
const { State, Situation } = require('./utils/variables/structures.js');
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

global.lastTouches = Array(2).fill(null);

// The password of the room
global.roomPassword = '';

// Users in the room
global.players = [];
global.teamRed = [];
global.teamBlue = [];
global.teamSpec = [];

// Game state
global.gameState = State.STOP;
global.playSituation = Situation.STOP;
global.goldenGoal = false;

global.possession = [0, 0];
global.actionZoneHalf = [0, 0];
global.lastTeamTouched;

// Users management
global.banList = [];

global.authArray = [];
global.adminList = [
    // ['INSERT_AUTH_HERE_1', 'NICK_OF_ADMIN_1'],
    // ['INSERT_AUTH_HERE_2', 'NICK_OF_ADMIN_2'],
];
global.masterList = [
    // 'INSERT_MASTER_AUTH_HERE',
    // 'INSERT_MASTER_AUTH_HERE_2'
];
room.setScoreLimit(RoomParams.scoreLimit);
room.setTimeLimit(RoomParams.timeLimit);
room.setTeamsLock(RoomParams.teamsLock);
room.setKickRateLimit(6, 0, 0);
let game = new Game(room);

module.exports = {
    room,
    game
};
