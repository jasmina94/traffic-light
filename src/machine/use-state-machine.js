import { useReducer } from "react";
import { ACTIONS, STATES } from "./constants";

const initialState = {
    state: STATES.BLINKING_YELLOW,
    nextAction: ACTIONS.TURN_GREEN,
    timeout: 10000
};

const buildMachineReducer = (definition) => (currentState, event) => {
    let newState = {};
    const stateTransitions = definition.states[currentState.state];

    if (stateTransitions === undefined) {
        throw new Error(`No transitions defined for ${currentState}`);
    }

    const state = stateTransitions.nextState;
    if (state === undefined) {
        throw new Error(`Unknown transition for event ${event} in state ${currentState}`);
    }
    const action = stateTransitions[event];

    if (action === undefined) {
        if (event === ACTIONS.TURN_BLINKING_YELLOW) {  //This means we are turning off traffic light
            newState = initialState;
        } else {
            throw new Error(`Unknown transition for event ${event} in state ${currentState}`);
        }
    } else {
        const { nextAction, timeout } = action();
        newState = {
            state,
            nextAction,
            timeout
        }
    }

    return newState;
}

const useTrafficLightMachine = (definition) => {
    return useReducer(buildMachineReducer(definition), initialState);
}


export default useTrafficLightMachine;