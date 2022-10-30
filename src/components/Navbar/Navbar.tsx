import React from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

interface Props {
    isFullscreen?: boolean;
}

const handleHomeClick = () => {
    window.location.href = './';
};

const handleAboutClick = () => {
    window.location.href = './about';
};

const Navbar: React.FC<Props> = ({ isFullscreen = false }) => {
    const { pathname } = useLocation();
    const isFullPage = pathname === '/mood' || pathname === '/about';

    if (isFullPage && !isFullscreen) {
        return <></>;
    }

    return (
        <nav className={isFullPage ? 'fullscreen-header' : 'header'}>
            <h1 className={'home'}>
                <span className="pointer" onClick={handleHomeClick}>
                    Mood Ring
                </span>
            </h1>
            <h2 className={'about'}>
                <span className="pointer" onClick={handleAboutClick}>
                    About
                </span>
            </h2>
        </nav>
    );
};

export default Navbar;
