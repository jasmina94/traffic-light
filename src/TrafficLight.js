import './styles/TrafficLight.scss';
import { useState } from 'react';
import { STATES } from './machine/constants';
import useMyMachine from './machine/UseMyMachine';

const TrafficLight = () => {
  const title = "State machine - Traffic light example";
  const { light } = useMyMachine(() => console.log('func'));
  const [message, setMessage] = useState("Here will be displayed message from machine");

  const yellowLightClass = () => {
    if (light === STATES.YELLOW || light === STATES.RED_AND_YELLOW) {
      return "circle yellow";
    } else if (light === STATES.BLINKING_YELLOW) {
      return "circle blinking-yellow";
    } else {
      return "circle";
    }
  }

  const greenLightClass = () => {
    if (light === STATES.GREEN) {
      return "circle green";
    } else if (light === STATES.BLINKING_GREEN) {
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
    handler: light === STATES.BLINKING_YELLOW ? turnOn : turnOff,
    text: light === STATES.BLINKING_YELLOW ? "Start" : "Stop",
    style: light === STATES.BLINKING_YELLOW ? "button turn-on" : "button -turn-off"
  }

  return (
    <div className="container">
      <div className="title">
        <p className="title-message">{title}</p>
        <p className="title-message">Crrent state - {light}</p>
        <p className="title-message">{message}</p>
        <button className={buttonConfig.style} onClick={buttonConfig.handler}>{buttonConfig.text}</button>
      </div>
      <div className="traffic-light">
        <div className={light === STATES.RED || light === STATES.RED_AND_YELLOW ? "circle red" : "circle"}></div>
        <div className={yellowLightClass()}></div>
        <div className={greenLightClass()}></div>
      </div>
    </div>
  );
}

export default TrafficLight;
