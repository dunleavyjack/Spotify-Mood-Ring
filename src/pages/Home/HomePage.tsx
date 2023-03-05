import React from 'react';

export const HomePage = () => {
    const handleClick = (): void => {
        window.location.href = '/mood';
    };

    return (
        <main>
            <h1>This is the home screen</h1>
            <button onClick={handleClick}>Button!! :)</button>
        </main>
    );
};
