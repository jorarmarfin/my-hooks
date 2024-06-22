import {useState} from "react";

export const  useCounter = (initialState = 0) => {
    const [number, setNumber] = useState(  initialState )
    const decrement = () => {
        if(number === 0) return;
        setNumber( number - 1);
    }
    return {
        number,
        increment: (value) => setNumber( number + value),
        decrement,
        reset: () => setNumber( initialState )
    }

}