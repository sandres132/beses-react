import { useReducer } from "react";

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

type CounterAction = 
  { type: 'increaseBy', payload: { value: number } }
  | { type: 'reset' }
  | { type: 'setPrevious' };

const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {
    switch (action.type) {
        case 'increaseBy':
            return {
                ...state,
                counter: state.counter + action.payload.value,
                previous: state.counter,
                changes: state.changes + 1
            }
        case 'setPrevious':
            return {
              ...state,
              counter: state.previous,
              previous: state.counter,
              changes: state.changes + 1
            }
        case 'reset':
            return INITIAL_STATE;
        default:
            return state;
    }
}

export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleClick = ( value: number ) => {
        dispatch({ type: 'increaseBy', payload: { value } });
    }

    const handleReset = () => {
        dispatch({ type: 'reset' });
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
    </>
  )
}
