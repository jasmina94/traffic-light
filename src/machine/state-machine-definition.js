const { STATES, ACTIONS } = require("./constants");

const trafficLightDefintion = {
    initalState: STATES.BLINKING_YELLOW,
    states: {
        RED: {
            nextState: STATES.RED_AND_YELLOW,
            turnYellow: function () {
                return { nextAction: ACTIONS.TURN_GREEN, timeout: 3000, message: 'Enough of waiting. Turning yellow and leaving red...' };
            }
        },
        RED_AND_YELLOW: {
            nextState: STATES.GREEN,
            turnGreen: function () {
                return { nextAction: ACTIONS.TURN_BLINKING_GREEN, timeout: 4000, message: 'Get ready. Turning green...' };
            }
        },
        YELLOW: {
            nextState: STATES.RED,
            turnRed: function () {
                return { nextAction: ACTIONS.TURN_YELLOW, timeout: 3000, message: 'Ouuups. Last chance! Turning red light' };
            }
        },
        GREEN: {
            nextState: STATES.BLINKING_GREEN,
            turnBlinkingGreen: function () {
                return { nextAction: ACTIONS.TURN_YELLOW, timeout: 3000, message: 'Turning blinking green...' };
            }
        },
        BLINKING_GREEN: {
            nextState: STATES.YELLOW,
            turnYellow: function () {
                return { nextAction: ACTIONS.TURN_RED, timeout: 4000, message: 'Turning yellow. Must wait.' };
            }
        },
        BLINKING_YELLOW: {
            nextState: STATES.GREEN,
            turnGreen: function () {
                return { nextAction: ACTIONS.TURN_BLINKING_GREEN, timeout: 4000, message: 'Turning green light...' };
            }
        }
    }
};

export default trafficLightDefintion;