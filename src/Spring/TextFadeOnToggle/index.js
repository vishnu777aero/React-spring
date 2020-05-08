import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

export const TextFadeOnToggle = (text) => {
    const [ state, setState ] = useState(true);
/*  Method 1: overwrite
    const style = useSpring({
        opacity: state ? 1 : 0
    }) */

    //Method 2: set using function
    const [ style, set, stop ] = useSpring(() => ({ opacity: 1 }));

    set({ opacity: state ? 1 : 0 });
    stop();

    const onClick = () => setState( state => !state );

    return (
        <animated.h1
            onClick={onClick}
            style={style}
            >Click Me!!!
        </animated.h1>
    );
}