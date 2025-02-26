import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./reducer/counterReducer";
import * as actions from "./actions/actions";

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleClick = ( value: number ) => {
        dispatch( actions.doIncreaseBy(value) );
    }

    const handleReset = () => {
        dispatch( actions.doReset() );
    }

    const handleSetPrevious = () => {
        dispatch( actions.doSetPrevious() );
    }

  return (
    <>
        <h1>Counter Reducer</h1>
        <pre>
            { JSON.stringify( counterState, null, 2 ) }
        </pre>

        <button onClick={ () => handleClick(1) }>+1</button>
        <button onClick={ () => handleClick(5) }>+5</button>
        <button onClick={ () => handleClick(10) }>+10</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleSetPrevious }>Set Previous</button>
    </>
  )
}
