function getStartingLineups() {
    var compositions = [[], []];
    for (let player of global.teamRed) {
        compositions[0].push(
            new PlayerComposition(player, global.authArray[player.id][0], [0], [])
        );
    }
    for (let player of global.teamBlue) {
        compositions[1].push(
            new PlayerComposition(player, global.authArray[player.id][0], [0], [])
        );
    }
    return compositions;
}

class Goal {
    constructor(time, team, striker, assist) {
        this.time = time;
        this.team = team;
        this.striker = striker;
        this.assist = assist;
    }
}

class Game {
    constructor(room) {
        this.date = Date.now();
        this.scores = room.getScores();
        this.playerComp = getStartingLineups();
        this.goals = [];
        this.rec = room.startRecording();
        this.touchArray = [];
    }
}

class PlayerComposition {
    constructor(player, auth, timeEntry, timeExit) {
        this.player = player;
        this.auth = auth;
        this.timeEntry = timeEntry;
        this.timeExit = timeExit;
        this.inactivityTicks = 0;
        this.GKTicks = 0;
    }
}

class BallTouch {
    constructor(player, time, goal, position) {
        this.player = player;
        this.time = time;
        this.goal = goal;
        this.position = position;
    }
}

module.exports = {
    Goal,
    Game,
    PlayerComposition,
    BallTouch
};