import { useState } from "react"

interface CounterByProps {
    initialValue?: number;
}

interface CounterState {
    counter: number;
    clicks: number;
}

export const CounterBy = ({ initialValue = 5 }:CounterByProps ) => {

    // const [counterState, setCounterState] = useState<CounterState>({
    //     counter: initialValue,
    //     clicks: 0,
    // });

    // const { counter, clicks } = counterState;

    // forma simplificada con counterState ya desestructurado
    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0,
    });

    const handleClick = ( value: number ) => {
        if ( (counter + value ) < 0 ) return;
        // setCounterState( prev => {
        //     return {
        //         counter: prev.counter + value,
        //         clicks: prev.clicks + 1,
        //     }
        // });
        setCounterState( ({ counter, clicks }) => ({
            counter: counter + value,
            clicks: clicks + 1,
          })
        );
    }

  return (
    <>
        <h1>CounterBy: { counter }</h1>
        <h1>Clicks: { clicks }</h1>

        <button onClick={ () => handleClick(1) }>+1</button>
        <button onClick={ () => handleClick(5) }>+5</button>
    </>
  )
}
