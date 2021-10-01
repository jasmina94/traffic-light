import { STATES, ACTIONS } from './constants';

// const MojaMasina = () => {
//     let state = STATES.BLINKING_YELLOW;

//     const transitions = {
//         RED: {
//             turnYellow: function () {
//                 console.log('\tEnough of waiting. Turning yellow...');
//                 changeState(STATES.YELLOW);
//                 setTimeout(() => {
//                     dispatchAction(ACTIONS.TURN_GREEN);
//                 }, 700);
//             }
//         },
//         RED_AND_YELLOW: {
//             turnGreen: function () {
//                 console.log('\tGet ready. Turning green...');
//                 changeState(STATES.GREEN);
//                 setTimeout(() => {
//                     dispatchAction(ACTIONS.TURN_BLINKING_GREEN);
//                 }, 3000);
//             }
//         },
//         YELLOW: {
//             turnRed: function () {
//                 console.log('\tOuuups. Last chance! Turning red light');
//                 changeState(STATES.RED);
//                 setTimeout(() => {
//                     dispatchAction(ACTIONS.TURN_YELLOW);
//                 }, 2000);
//             }
//         },
//         GREEN: {
//             turnBlinkingGreen: function () {
//                 console.log('\tTurning blinking green...');
//                 changeState(STATES.BLINKING_GREEN);
//                 setTimeout(() => {
//                     dispatchAction(ACTIONS.TURN_YELLOW);
//                 }, 2000);
//             }
//         },
//         BLINKING_GREEN: {
//             turnYellow: function () {
//                 console.log('\tTurning yellow. Must wait.');
//                 changeState(STATES.YELLOW);
//                 setTimeout(() => {
//                     dispatchAction(ACTIONS.TURN_RED);
//                 }, 1000);
//             }
//         },
//         BLINKING_YELLOW: {
//             turnGreen: function () {
//                 console.log('\tTurning green light...');
//                 changeState(STATES.GREEN);
//                 setTimeout(() => {
//                     dispatchAction(ACTIONS.TURN_BLINKING_GREEN);
//                 }, 2000)
//             }
//         }
//     };


//     const dispatchAction = (actionName, callback) => {
//         const actions = transitions[state];
//         const action = actions[actionName];

//         if (action) {
//             action();
//             callback();
//         } else {
//             console.log('\tERROR: Traffic light broken! Requested action not available from current state.');
//             changeState(STATES.BLINKING_YELLOW);
//         }

//     }

//     const changeState = (newState) => {
//         state = newState;
//         console.log('***' + newState + '***');
//     }

//     const displayIntro = () => {
//         console.log('**** SuperCool Traffic Light ****');
//         console.log('Current state: ' + state);
//     }

//     const run = (turnOn, callback) => {
//         if (turnOn) {
//             displayIntro();
//             if (state === STATES.BLINKING_YELLOW) {
//                 console.log('Traffic light starts.');
//                 dispatchAction(ACTIONS.TURN_GREEN, callback);
//             } else {
//                 console.log('Traffic light already running.');
//             }
//         } else {
//             console.log('Traffic light is turning off.');
//             changeState(STATES.BLINKING_YELLOW);
//         }
//     }

//     return {
//         state,
//         run
//     }
// }

// export default MojaMasina;

// // const trafficLightMachine = {
// //     state: STATES.BLINKING_YELLOW,
// //     transitions: {
// //         RED: {
// //             turnYellow: function () {
// //                 console.log('\tEnough of waiting. Turning yellow...');
// //                 changeState(STATES.YELLOW);
// //                 setTimeout(() => {
// //                     dispatchAction(ACTIONS.TURN_GREEN);
// //                 }, 700);
// //             }
// //         },
// //         RED_AND_YELLOW: {
// //             turnGreen: function () {
// //                 console.log('\tGet ready. Turning green...');
// //                 changeState(STATES.GREEN);
// //                 setTimeout(() => {
// //                     dispatchAction(ACTIONS.TURN_BLINKING_GREEN);
// //                 }, 3000);
// //             }
// //         },
// //         YELLOW: {
// //             turnRed: function () {
// //                 console.log('\tOuuups. Last chance! Turning red light');
// //                 changeState(STATES.RED);
// //                 setTimeout(() => {
// //                     dispatchAction(ACTIONS.TURN_YELLOW);
// //                 }, 2000);
// //             }
// //         },
// //         GREEN: {
// //             turnBlinkingGreen: function () {
// //                 console.log('\tTurning blinking green...');
// //                 changeState(STATES.BLINKING_GREEN);
// //                 setTimeout(() => {
// //                     dispatchAction(ACTIONS.TURN_YELLOW);
// //                 }, 2000);
// //             }
// //         },
// //         BLINKING_GREEN: {
// //             turnYellow: function () {
// //                 console.log('\tTurning yellow. Must wait.');
// //                 changeState(STATES.YELLOW);
// //                 setTimeout(() => {
// //                     dispatchAction(ACTIONS.TURN_RED);
// //                 }, 1000);
// //             }
// //         },
// //         BLINKING_YELLOW: {
// //             turnGreen: function () {
// //                 console.log('\tTurning green light...');
// //                 changeState(STATES.GREEN);
// //                 setTimeout(() => {
// //                     dispatchAction(ACTIONS.TURN_BLINKING_GREEN);
// //                 }, 2000)
// //             }
// //         }
// //     },
// //     dispatchAction(actionName) {
// //         const actions = transitions[state];
// //         const action = actions[actionName];

// //         if (action) {
// //             action.apply(this);
// //         } else {
// //             console.log('\tERROR: Traffic light broken! Requested action not available from current state.');
// //             changeState(STATES.BLINKING_YELLOW);
// //         }

// //     },
// //     changeState(newState) {
// //         state = newState;
// //         console.log('***' + newState + '***');
// //     },
// //     displayIntro() {
// //         console.log('**** SuperCool Traffic Light ****');
// //         console.log('Current state: ' + state);
// //     },
// //     run(turnOn) {
// //         if (turnOn) {
// //             displayIntro();
// //             if (state === STATES.BLINKING_YELLOW) {
// //                 console.log('Traffic light starts.');
// //                 dispatchAction(ACTIONS.TURN_GREEN);
// //             } else {
// //                 console.log('Traffic light already running.');
// //             }
// //         } else {
// //             console.log('Traffic light is turning off.');
// //             changeState(STATES.BLINKING_YELLOW);
// //         }
// //     }
// // };


// // module.exports = {
// //     Machine: trafficLightMachine
// // }