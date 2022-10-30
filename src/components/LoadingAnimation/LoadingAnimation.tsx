import React from 'react';
import LoadingSpinner from '../../assets/pageAssets/loading/loadingSpinner.png';
import LoadingStar from '../../assets/pageAssets/loading/loadingStar.png';
import './LoadingAnimation.css';

const LoadingAnimation: React.FC = () => {
    return (
        <main className="page-content">
            <img
                alt="Loading"
                src={LoadingSpinner}
                className="loading-spinner"
            />
            <img alt="Loading" src={LoadingStar} className="loading-star" />
        </main>
    );
};

export default LoadingAnimation;
