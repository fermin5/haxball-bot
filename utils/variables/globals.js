const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
const State = { PLAY: 0, PAUSE: 1, STOP: 2 };
const Role = { PLAYER: 0, ADMIN_TEMP: 1, ADMIN_PERM: 2, MASTER: 3 };
const HaxNotification = { NONE: 0, CHAT: 1, MENTION: 2 };
const Situation = { STOP: 0, KICKOFF: 1, PLAY: 2, GOAL: 3 };

// The password of the room
let roomPassword = '';

// Users in the room
let players = [];
let teamRed = [];
let teamBlue = [];
let teamSpec = [];

// Game state
let gameState = State.STOP;
let playSituation = Situation.STOP;
let goldenGoal = false;

let possession = [0, 0];
let actionZoneHalf = [0, 0];
let lastTouches = Array(2).fill(null);
let lastTeamTouched;

// Users management
let banList = [];

let authArray = [];
let adminList = [
    // ['INSERT_AUTH_HERE_1', 'NICK_OF_ADMIN_1'],
    // ['INSERT_AUTH_HERE_2', 'NICK_OF_ADMIN_2'],
];
let masterList = [
    // 'INSERT_MASTER_AUTH_HERE',
    // 'INSERT_MASTER_AUTH_HERE_2'
];

module.exports = {
    roomPassword,
    players,
    teamRed,
    teamBlue,
    teamSpec,
    gameState,
    playSituation,
    goldenGoal,
    banList,
    possession,
    actionZoneHalf,
    lastTouches,
    lastTeamTouched,
    authArray,
    adminList,
    masterList,
    Team,
    State,
    Role,
    HaxNotification,
    Situation
};