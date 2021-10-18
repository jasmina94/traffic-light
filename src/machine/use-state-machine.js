import { useReducer } from "react";

const buildMachineReducer = (definition) => (currentState, event) => {
    const stateTransitions = definition.transitions[currentState];

    if (stateTransitions === undefined) {
        throw new Error(`No transitions defined for ${currentState}`);
    }

    const action = stateTransitions[event];
    const state = stateTransitions.nextState;
    const { nextAction, timeout } = action();   

    if (state === undefined) {
        throw new Error(`Unknown transition for event ${event} in state ${currentState}`);
    }

    return { state, nextAction, timeout};
}

const useTrafficLightMachine = (definition) => {
    return useReducer(buildMachineReducer(definition), definition.initalState);
}


export default useTrafficLightMachine;