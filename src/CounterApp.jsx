import {useState} from "react";

const initialState = {
    contador1: 10,
    contador2: 20,
    contador3: 30,
}
export const CounterApp = () => {
    const [state, setState] = useState(initialState);
    const onClick = () => {
        setState({
            ...state,
            contador1: contador1 + 1,
        })
    }
    const {contador1, contador2, contador3} = state;

    return (
        <>
            <h1>Contador1 : {contador1} </h1>
            <h1>Contador2 : {contador2}</h1>
            <h1>Contador3 : {contador3}</h1>
            <button onClick={onClick}
                className='btn btn-primary' >+1</button>
        </>
    )
}