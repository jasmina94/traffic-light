import { useState } from "react";
import { STATES } from "./constants";

const useMyMachine = (command) => {

    //Initial state => BLINKING YELLOW
    const [state, setState] = useState(STATES.BLINKING_YELLOW);

    return { state };
}


export default useMyMachine;