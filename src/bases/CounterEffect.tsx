import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>( null );

    const handleClick = ( value: number ) => {
        // Forma larga de hacer la validacion
        // if ( (counter + value ) > MAXIMUN_COUNT ) return;
        // setCounter( prev => prev + value);

        // Forma corta de hacer la validacion
        // setCounter( prev => (prev + value) > MAXIMUN_COUNT ? prev : prev + value);

        // Forma mas corta de hacer la validacion
        setCounter( prev => Math.min(prev + value, MAXIMUN_COUNT));
    };

    useEffect(() => {
      if ( counter < 10 ) return;

      // el %c es para darle estilo al mensaje
      console.log('%cSe llego al valor maximo', 'color:rgb(24, 205, 230)');

      const tl = gsap.timeline();
      tl.to( counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
        .to( counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });
      
    }, [counter]);

  return (
    <>
        <h1>CounterEffect:</h1>
        <h2 ref={counterElement}>{ counter }</h2>

        <button onClick={ () => handleClick(1) }>+1</button>
    </>
  )
}
