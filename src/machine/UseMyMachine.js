import { useCallback, useEffect, useState } from "react";
import { STATES } from "./constants";


function createMachine(stateMachineDefinition) {
    const machine = {
      value: stateMachineDefinition.initialState,
      transition(currentState, event) {
        const currentStateDefinition = stateMachineDefinition[currentState];
        const destinationTransition = currentStateDefinition.transitions[event];
        if (!destinationTransition) {
          return;
        }
        const destinationState = destinationTransition.target;
        const destinationStateDefinition =
          stateMachineDefinition[destinationState];
  
        destinationTransition.action();
        currentStateDefinition.actions.onExit();
        destinationStateDefinition.actions.onEnter();
  
        machine.value = destinationState;
  
        console.log(machine.value);

        return machine.value;
      },
    }
    
    return machine;
}

const definition = {
    initialState: 'off',
    off: {
        actions: {
            onEnter() {
                console.log('off: onEnter')
            },
            onExit() {
                console.log('off: onExit')
            }
        },
        transitions: {
            switch: {
                target: 'on',
                action() {
                    console.log('transition action for "switch" in "off" state')
                }
            }
        },
    },
    on: {
        actions: {
            onEnter() {
                console.log('on: onEnter')
            },
            onExit() {
                console.log('on: onExit')
            }
        },
        transitions: {
            switch: {
                target: 'off',
                action() {
                    console.log('transition action for "switch" in "on" state')
                },
            }
        }
    }
};

const useMyMachine = (run = true) => {

    const [currentState, setCurrentState] = useState('off');
    const [error, setError] = useState('');

    const machine = createMachine(definition);

    return { machine };
}


export default useMyMachine;