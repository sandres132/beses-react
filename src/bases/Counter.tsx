import { useState } from "react"

interface CounterProps {
    initialValue?: number;
}

export const Counter = ({ initialValue = 0 }:CounterProps ) => {

    const [counter, setCounter] = useState(initialValue);

    const handleClick = ( value: number ) => {
        if ( (counter + value ) < 0 ) return;
        setCounter( prev => prev + value);
    }

  return (
    <>
        <h1>Counter: { counter }</h1>

        <button onClick={ () => handleClick(1) }>+1</button>
    </>
  )
}
