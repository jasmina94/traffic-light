import '../styles/traffic-light.scss';
import { useEffect, useRef } from 'react';
import { ACTIONS, STATES } from '../machine/constants';
import useTrafficLightMachine from '../machine/use-state-machine';
import trafficLightDefintion from '../machine/state-machine-definition';

const TrafficLight = () => {
  const title = "State machine - Traffic light example";
  const [info, sendEvent] = useTrafficLightMachine(trafficLightDefintion);
  const currentExecutonRef = useRef(0);

  useEffect(() => {
    if (info.timeout < 10000) {
      currentExecutonRef.current = setTimeout(() => {
        sendEvent(info.nextAction);
      }, info.timeout);
    }
  }, [info, sendEvent]);

  const turnOn = () => {
    sendEvent(ACTIONS.TURN_GREEN);
  }

  const turnOff = () => {
    sendEvent(ACTIONS.TURN_OFF);
    clearTimeout(currentExecutonRef.current);
  }

  const buttonConfig = {
    handler: info.state === STATES.BLINKING_YELLOW ? turnOn : turnOff,
    text: info.state === STATES.BLINKING_YELLOW ? "Start" : "Stop",
    style: info.state === STATES.BLINKING_YELLOW ? "button turn-on" : "button -turn-off"
  }

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

  return (
    <div className="container">
      <div className="title">
        <p className="title-message">{title}</p>
        <p className="title-message">Crrent state - {info.state}</p>
        <p className="title-message">{info.message}</p>
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
