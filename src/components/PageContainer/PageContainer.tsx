import React, { useEffect, useState } from 'react';
import { useMinimumLoadingTime } from '../../hooks/useMinimumLoadingTime';
import { useNavigate } from 'react-router-dom';
import purpleTexture from '../../assets/textures/purple.svg';
import { useApplyFadeIn } from '../../hooks/useApplyFadeIn';
import { routes } from '../../constants/routes';
import './PageContainer.css';
interface Props {
    children: React.ReactNode;
}

const PageContainer: React.FC<Props> = ({ children }) => {
    const [backgroundLoaded, setBackgroundLoaded] = useState<boolean>(false);
    const minimumLoadingTimeComplete = useMinimumLoadingTime();
    const applyFadeIn = useApplyFadeIn();
    const navigate = useNavigate();

    const handleBackgroundLoaded = () => {
        setBackgroundLoaded(true);
    };

    useEffect(() => {
        if (
            window.location.pathname === routes.welcome &&
            minimumLoadingTimeComplete &&
            backgroundLoaded
        ) {
            navigate('/home');
        }
    }, [minimumLoadingTimeComplete, backgroundLoaded, navigate]);

    return (
        <div className="page-container">
            {children}
            <img
                onLoad={handleBackgroundLoaded}
                src={purpleTexture}
                className={`background-texture ${applyFadeIn ? 'fade-in' : ''}`}
                alt="Mood Ring"
            />
        </div>
    );
};

export default PageContainer;
