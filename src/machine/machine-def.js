const { STATES, ACTIONS } = require("./constants");

const trafficLightDefintion = {
    initalState: STATES.BLINKING_YELLOW,
    transitions: {
        RED: {
            nextState: STATES.YELLOW,
            turnYellow: function () {
                console.log('\tEnough of waiting. Turning yellow...');
                return { nextAction: ACTIONS.TURN_GREEN, timeout: 700 };
            }
        },
        RED_AND_YELLOW: {
            nextState: STATES.GREEN,
            turnGreen: function () {
                console.log('\tGet ready. Turning green...');
                return { nextAction: ACTIONS.TURN_BLINKING_GREEN, timeout: 3000 };
            }
        },
        YELLOW: {
            nextState: STATES.RED,
            turnRed: function () {
                console.log('\tOuuups. Last chance! Turning red light');
                return { nextAction: ACTIONS.TURN_YELLOW, timeout: 2000 };
            }
        },
        GREEN: {
            nextState: STATES.BLINKING_GREEN,
            turnBlinkingGreen: function () {
                console.log('\tTurning blinking green...');
                return { nextAction: ACTIONS.TURN_YELLOW, timeout: 2000 };
            }
        },
        BLINKING_GREEN: {
            nextState: STATES.YELLOW,
            turnYellow: function () {
                console.log('\tTurning yellow. Must wait.');
                return { nextAction: ACTIONS.TURN_RED, timeout: 1000 };
            }
        },
        BLINKING_YELLOW: {
            nextState: STATES.GREEN,
            turnGreen: function () {
                console.log('\tTurning green light...');
                return { nextAction: ACTIONS.TURN_BLINKING_GREEN, timeout: 2000 };
            }
        }
    }
};

export default trafficLightDefintion;