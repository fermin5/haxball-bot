let { room, game } = require('../../init.js');
const { pointDistance, getTimeGame, getGoalGame, checkGoalKickTouch } = require('../main-functions.js');
const { updateTeams } = require('./players.js');
const { Goal, BallTouch } = require('../classes.js');
let { Team, State, Situation } = require('../variables/structures.js');

var speedCoefficient = 100 / (5 * (0.99 ** 60 + 1));
var ballSpeed = 0;
var playerRadius = 15;
var ballRadius = 10;
var triggerDistance = playerRadius + ballRadius + 0.01;

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    let playerArray = [];
    for (let player of global.players) {
        if (player.position != null) {
            var distanceToBall = pointDistance(player.position, ballPosition);
            if (distanceToBall < triggerDistance) {
                if (global.playSituation == Situation.KICKOFF) global.playSituation = Situation.PLAY;
                playerArray.push([player, distanceToBall]);
            }
        }
    }
    if (playerArray.length != 0) {
        let playerTouch = playerArray.sort((a, b) => a[1] - b[1])[0][0];
        if (global.lastTeamTouched == playerTouch.team || global.lastTeamTouched == Team.SPECTATORS) {
            if (global.lastTouches[0] == null || (global.lastTouches[0] != null && global.lastTouches[0].player.id != playerTouch.id)) {
                game.touchArray.push(
                    new BallTouch(
                        playerTouch,
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
        }
        global.lastTeamTouched = playerTouch.team;
    }
}

function getBallSpeed() {
    var ballProp = room.getDiscProperties(0);
    return Math.sqrt(ballProp.xspeed ** 2 + ballProp.yspeed ** 2) * speedCoefficient;
}

function getGameStats() {
    if (global.playSituation == Situation.PLAY && global.gameState == State.PLAY) {
        global.lastTeamTouched == Team.RED ? global.possession[0]++ : global.possession[1]++;
        var ballPosition = room.getBallPosition();
        ballPosition.x < 0 ? global.actionZoneHalf[0]++ : global.actionZoneHalf[1]++;
    }
}


function getGoalAttribution(team) {
    var goalAttribution = Array(2).fill(null);
    if (global.lastTouches[0] != null) {
        if (global.lastTouches[0].player.team == team) {
            // Direct goal scored by player
            if (global.lastTouches[1] != null && global.lastTouches[1].player.team == team) {
                goalAttribution = [global.lastTouches[0].player, global.lastTouches[1].player];
            } else {
                goalAttribution = [global.lastTouches[0].player, null];
            }
        } else {
            // Own goal
            goalAttribution = [global.lastTouches[0].player, null];
        }
    }
    return goalAttribution;
}

function getGoalString(team) {
    var goalString;
    var scores = game.scores;
    var goalAttribution = getGoalAttribution(team);
    if (goalAttribution[0] != null) {
        if (goalAttribution[0].team == team) {
            if (goalAttribution[1] != null && goalAttribution[1].team == team) {
                goalString = `⚽ ${getTimeGame(scores.time)} Goal by ${goalAttribution[0].name} ! Assist by ${goalAttribution[1].name}. Goal speed : ${ballSpeed.toFixed(2)}km/h.`;
                game.goals.push(
                    new Goal(
                        scores.time,
                        team,
                        goalAttribution[0],
                        goalAttribution[1]
                    )
                );
            } else {
                goalString = `⚽ ${getTimeGame(scores.time)} Goal by ${goalAttribution[0].name} ! Goal speed : ${ballSpeed.toFixed(2)}km/h.`;
                game.goals.push(
                    new Goal(scores.time, team, goalAttribution[0], null)
                );
            }
        } else {
            goalString = `😂 ${getTimeGame(scores.time)} Own goal by ${goalAttribution[0].name} ! Goal speed : ${ballSpeed.toFixed(2)}km/h.`;
            game.goals.push(
                new Goal(scores.time, team, goalAttribution[0], null)
            );
        }
    } else {
        goalString = `⚽ ${getTimeGame(scores.time)} Goal for ${team == Team.RED ? 'red' : 'blue'} team ! Goal speed : ${ballSpeed.toFixed(2)}km/h.`;
        game.goals.push(
            new Goal(scores.time, team, null, null)
        );
    }

    return goalString;
}

module.exports = {
    getGameStats,
    getGoalString,
    getBallSpeed,
    getLastTouchOfTheBall
};
