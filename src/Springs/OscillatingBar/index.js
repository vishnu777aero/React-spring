import React from 'react';
import { useSpring, animated } from 'react-spring';

export const OscillatingBar = () => {
    const radialSpring = {
        from: {
            transform: `rotate(-22.5deg)`
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

    const radialStyle = useSpring(radialSpring);

    return (
        <animated.span 
            className='oscillating-bar'
            style={radialStyle} />
    );
}