import {useFetch} from "./hooks/useFetch.js";
import {useCounter} from "./hooks/useCounter.js";
import imgLoading from './assets/loading.gif'

export const MultipleCustomHook = () => {
    const {number,decrement,reset,increment} = useCounter(1);
    const {data,loading,hasError,error} = useFetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    if(loading){
        return <img alt='loading' src={imgLoading} />
    }
    return(
        <>
            <h1>Pokemon - {number}: {data?.name}</h1>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button onClick={decrement} type="button" className="btn btn-primary">-1</button>
                <button onClick={reset} type="button" className="btn btn-primary">Reset</button>
                <button onClick={() => increment(1)} type="button" className="btn btn-primary">+1</button>
            </div>
        </>
    )
}