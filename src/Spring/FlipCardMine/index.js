import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

export const FlipCardMine = () => {
    const [ isFrontSide, setIsFrontSide ] = useState(true);

    const frontSide = {
        color: 'black',
        //backgroundImage: `url(https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop)`,
        transform: 'rotateX(0deg)'
    };

    const backSide = {
        color: 'white',
        //backgroundImage: `url(https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop)`,
        transform: 'rotateX(180deg)'
    };

    const [ style, set ] = useSpring( () => (frontSide));

    set({ to: isFrontSide ? frontSide : backSide, config: { friction: 18 }});

    const onClick = () => {
        setIsFrontSide( prevState => !prevState );
    }

    return (
        <animated.div
            className='flip-card'
            style={style}
            onClick={onClick}>
                <h1>
                    {isFrontSide ? 'FRONT' : 'BACKSIDE'}
                </h1>
        </animated.div>
    )
}