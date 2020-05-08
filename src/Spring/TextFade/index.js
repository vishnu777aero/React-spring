import React from 'react';
import { useSpring, animated } from 'react-spring';

export const TextFade = (props) => {
    const {
        text
    } = props;

    const style = useSpring({
        from:   { opacity: 1 },
        to:     { opacity: 0.5 },
        config: { friction: 0, tension: 40, mass: 10 }
    });

    return <animated.h1 style={style}>{text}</animated.h1>;
}