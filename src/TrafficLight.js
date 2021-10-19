import './styles/TrafficLight.scss';
import { useEffect, useState } from 'react';
import { ACTIONS, STATES } from './machine/constants';
import useTrafficLightMachine from './machine/use-state-machine';
import trafficLightDefintion from './machine/machine-def';

const TrafficLight = () => {
  const title = "State machine - Traffic light example";
  const [info, sendEvent] = useTrafficLightMachine(trafficLightDefintion);
  const [message, setMessage] = useState("Here will be displayed message from machine");

  useEffect(() => {
    console.log('info changed');
    console.log(info);

    if (info.timeout < 10000) {
      setTimeout(() => {
        sendEvent(info.nextAction);
      }, info.timeout)
    }

  }, [info, sendEvent]);

  const yellowLightClass = () => {
    if (info.state === STATES.YELLOW || info.state === STATES.RED_AND_YELLOW) {
      return "circle yellow";
    } else if (info.state === STATES.BLINKING_YELLOW) {
      return "circle blinking-yellow";
    } else {
      return "circle";
    }
  }

  const greenLightClass = () => {
    if (info.state === STATES.GREEN) {
      return "circle green";
    } else if (info.state === STATES.BLINKING_GREEN) {
      return "circle blinking-green";
    } else {
      return "circle";
    }
  }

  const turnOn = () => {
    let ret = sendEvent(ACTIONS.TURN_GREEN);
    console.log(info);
  }

  const turnOff = () => {
    let ret = sendEvent(ACTIONS.TURN_BLINKING_YELLOW);
    console.log(ret);
  }

  const buttonConfig = {
    handler: info.state === STATES.BLINKING_YELLOW ? turnOn : turnOff,
    text: info.state === STATES.BLINKING_YELLOW ? "Start" : "Stop",
    style: info.state === STATES.BLINKING_YELLOW ? "button turn-on" : "button -turn-off"
  }

  return (
    <div className="container">
      <div className="title">
        <p className="title-message">{title}</p>
        <p className="title-message">Crrent state - {info.state}</p>
        <p className="title-message">{message}</p>
        <button className={buttonConfig.style} onClick={buttonConfig.handler}>{buttonConfig.text}</button>
      </div>
      <div className="traffic-light">
        <div className={info.state === STATES.RED || info.state === STATES.RED_AND_YELLOW ? "circle red" : "circle"}></div>
        <div className={yellowLightClass()}></div>
        <div className={greenLightClass()}></div>
      </div>

    </div>
  );
}

export default TrafficLight;
