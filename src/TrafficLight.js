import './styles/TrafficLight.scss';
import MojaMasina from './machine/Machine';
import { useEffect, useState } from 'react';
import { STATES } from './machine/constants';

// const machine = Object.create(Machine, {
//   name: {
//     writable: false,
//     enumerable: true,
//     value: 'SuperCoolTraficLight'
//   }
// });

const styleMapper = {
  BLINKING_YELLOW: 'blinking-yellow',
  BLINKING_GREEN: 'blinking-green',
  GREEN: 'green',
  YELLOW: 'yellow',
  RED: 'red'
}

const TrafficLight = () => {
  const title = "State machine - Traffic light example";
  const [currentState, setCurrentState] = useState(STATES.BLINKING_GREEN);
  const [message, setMessage] = useState("Here will be displayed message from machine");

  const yellowLightClass = () => {
    if (currentState === STATES.YELLOW || currentState === STATES.RED_AND_YELLOW) {
      return "circle yellow";
    } else if (currentState === STATES.BLINKING_YELLOW) {
      return "circle blinking-yellow";
    } else {
      return "circle";
    }
  }

  const greenLightClass = () => {
    if (currentState === STATES.GREEN) {
      return "circle green";
    } else if (currentState === STATES.BLINKING_GREEN) {
      return "circle blinking-green";
    } else {
      return "circle";
    }
  }

  const turnOn = () => {
    console.log('on');
  }

  const turnOff = () => {
    console.log('off');
  }

  const buttonConfig = {
    handler: currentState === STATES.BLINKING_YELLOW ? turnOn : turnOff,
    text: currentState === STATES.BLINKING_YELLOW ? "Start" : "Stop",
    style: currentState === STATES.BLINKING_YELLOW ? "button turn-on" : "button -turn-off"
  }

  return (
    <div className="container">
      <div className="title">
        <p className="title-message">{title}</p>
        <p className="title-message">Crrent state - {currentState}</p>
        <p className="title-message">{message}</p>
        <button className={buttonConfig.style} onClick={buttonConfig.handler}>{buttonConfig.text}</button>
      </div>
      <div className="traffic-light">
        <div className={currentState === STATES.RED || currentState === STATES.RED_AND_YELLOW ? "circle red" : "circle"}></div>
        <div className={yellowLightClass()}></div>
        <div className={greenLightClass()}></div>
      </div>
    </div>
  );
}

export default TrafficLight;
