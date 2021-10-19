import { useReducer } from "react";
import { ACTIONS, STATES } from "./constants";

const initialState = {
    state: STATES.BLINKING_YELLOW,
    nextAction: ACTIONS.TURN_GREEN,
    timeout: 10000,
    message: 'No traffic. GO! GO! GO!'
};

const buildMachineReducer = (definition) => (currentState, event) => {
    if (event === ACTIONS.TURN_OFF)
        return initialState;

    const stateTransitions = definition.states[currentState.state];
    if (stateTransitions === undefined) {
        throw new Error(`No transitions defined for ${currentState}`);
    }

    const state = stateTransitions.nextState;
    if (state === undefined)
        throw new Error(`Unknown transition for event ${event} in state ${currentState}`);

    const action = stateTransitions[event];
    if (action === undefined)
        throw new Error(`Unknown transition for event ${event} in state ${currentState}`);


    const { nextAction, timeout, message } = action();
    const newState = {
        state,
        nextAction,
        timeout,
        message
    }


    return newState;
}

const useTrafficLightMachine = (definition) => {
    return useReducer(buildMachineReducer(definition), initialState);
}


export default useTrafficLightMachine;