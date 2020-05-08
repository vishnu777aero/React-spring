import React from 'react';
import { useSprings, animated } from 'react-spring';

export const OscillatingBar = () => {
    //useSprings is good for static lists of items,(with the help of .map() and interpolate())
    //and not for a single element with multiple springs.
    //This example works but is a bad one w.r.t syntax.

    const radialSpring = {
        from: {
            transform: `rotate(-22deg)`
        },
        to: {
            transform: `rotate(0deg)`
        },
        config: {
            tension  : 40,
            mass     : 1,
            friction : 0
        }
    };

    const horizontalSpring = {
        from: {
            width: `10vw`
        },
        to: {
            width: `20vw`
        },
        config: {
            tension  : 10,
            mass     : 1,
            friction : 0
        }
    };

    const springs = [
        radialSpring,
        horizontalSpring
    ];

    const style = useSprings(2, i => springs[i]);

    return (
        <animated.span 
            className='oscillating-bar'
            style={{ ...style[0][0], ...style[0][1]}}/>
    );
}