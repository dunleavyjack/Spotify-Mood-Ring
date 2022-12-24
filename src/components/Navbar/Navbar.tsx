import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MOOD_RING, ABOUT_US } from '../../constants/text';
import './Navbar.css';

interface Props {
    isFullscreen?: boolean;
}

const Navbar: React.FC<Props> = ({ isFullscreen = false }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const isFullPage = pathname === '/mood' || pathname === '/about';

    if (isFullPage && !isFullscreen) {
        return <></>;
    }

    const handleHomeClick = () => {
        window.location.href = './home';
    };

    const handleAboutClick = () => {
        window.location.href = './about';
    };

    return (
        <nav className={isFullPage ? 'fullscreen-header' : 'header'}>
            <h1 className="home">
                <span className="pointer" onClick={handleHomeClick}>
                    {MOOD_RING}
                </span>
            </h1>
            <h2 className="about">
                <span className="pointer" onClick={handleAboutClick}>
                    {ABOUT_US}
                </span>
            </h2>
        </nav>
    );
};

export default Navbar;
