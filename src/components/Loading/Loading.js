import React from 'react';
import { BallTriangle } from 'react-loading-icons';

const Loading = () => {

    // rendering loading component here with react loading icons
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <BallTriangle stroke='#000000' fill='#000000' />
        </div>
    );
};

export default Loading;