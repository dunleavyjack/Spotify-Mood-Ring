import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/animations/tree.json';

const Welcome: React.FC = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <main className="page-content">
            <Lottie options={defaultOptions} height={200} width={200} />
        </main>
    );
};

export default Welcome;
