import React from 'react';
import { animated, useSpring } from 'react-spring';

export const TextEffect = () => {
    const [ style, set ] = useSpring(
        () => ({ fontSize: '1rem', color: 'green'})
    );

    const onClick = () => {
        set({
            to: [
                { fontSize: '2rem', color: 'red' },
                { fontSize: '4rem', color: 'blue' }
            ]
        });
    }

    return (
        <animated.h1
            style={style}
            onClick={onClick}>
            Hi, How u doin'
        </animated.h1>
    )
}