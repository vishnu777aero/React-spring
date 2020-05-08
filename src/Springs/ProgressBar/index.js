import React from 'react';
import { useSpring, animated } from 'react-spring';
import { simpleInfinite } from '../_util/config';

//Integrated progress bar for testing
export const ProgressBar = () => {
    const barStyle = useSpring({
        from: {
            color: 'black',
            width: '0%',
            backgroundColor: 'red'
        },
        to: {
            color: 'green',
            width: '50%',
            backgroundColor: 'blue'
        },
        config: { ...simpleInfinite, tension: 3}
    });

    const widthInterpolator = (width) => {
        const widthInNumber = `${parseFloat(width).toFixed()}%`;
        return widthInNumber;
    };

    return (
        <div id='progress-bar'>
            <animated.div id='container'></animated.div>
            <animated.div id='bar' style={barStyle}></animated.div>
            <animated.span 
                id='progress'
                style={{ color: barStyle.color}}>
                {barStyle.width.interpolate(widthInterpolator)}
            </animated.span>
        </div>
    );
};