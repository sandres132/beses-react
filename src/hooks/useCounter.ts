import gsap from "gsap";
import { useState, useRef, useEffect, useLayoutEffect } from "react";

interface CounterProps {
    maxCount?: number;
}

export const useCounter = ({ maxCount = 1 }:CounterProps) => {

    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<any>( null );
    const tl = useRef( gsap.timeline() );

    const handleClick = ( value: number ) => {
        setCounter( prev => Math.min(prev + value, maxCount ));
    };

    useLayoutEffect(() => {
        if ( !elementToAnimate.current ) return;
        tl.current.to( elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
            .to( elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
            .pause();
    
    }, [])

    useEffect(() => {
        tl.current.play(0);
    }, [counter]);


    return {
        counter,
        elementToAnimate,
        handleClick,
    }
}