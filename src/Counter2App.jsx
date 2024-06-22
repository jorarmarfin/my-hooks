import {useCounter} from "./hooks/useCounter.js";

export const Counter2App = () => {
    const {number,increment,decrement,reset}= useCounter();
    return (
        <>
            <h1>Counter2App: {number}</h1>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button onClick={decrement} type="button" className="btn btn-primary">-1</button>
                <button onClick={reset} type="button" className="btn btn-primary">Reset</button>
                <button onClick={()=>increment(2)} type="button" className="btn btn-primary">+1</button>
            </div>

        </>
    )
}