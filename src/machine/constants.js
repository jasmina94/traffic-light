const STATES = {
    RED: 'RED',
    YELLOW: 'YELLOW',
    RED_AND_YELLOW: 'RED_AND_YELLOW',
    GREEN: 'GREEN',
    BLINKING_GREEN: 'BLINKING_GREEN',
    BLINKING_YELLOW: 'BLINKING_YELLOW'
}

const ACTIONS = {
    TURN_RED: 'turnRed',
    TURN_YELLOW: 'turnYellow',
    TURN_GREEN: 'turnGreen',
    TURN_BLINKING_GREEN: 'turnBlinkingGreen',
    TURN_BLINKING_YELLOW: 'turnBlinkingYellow'
}

module.exports = {
    STATES,
    ACTIONS
}