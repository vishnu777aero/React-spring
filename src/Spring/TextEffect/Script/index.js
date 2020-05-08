import React from 'react';
import { animated, useSpring } from 'react-spring';

export const TextEffect = () => {
    const style = useSpring({
        to: async ( next, cancel ) => {
            await next({ fontSize: '2rem', color: 'red' })
            await next({ fontSize: '4rem', color: 'blue' })
        },
        from: { fontSize: '1rem', color: 'green'},
        //config: simpleInfinite
    })

    return (
        <animated.h1
            style={style}>
            Hi, How u doin'
        </animated.h1>
    )
}