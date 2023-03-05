import React from 'react';

export const MoodPage = () => {
    const handleGoHome = (): void => {
        window.location.href = '/';
    };

    return (
        <main>
            <h1>u made it to the mood page</h1>
            <button onClick={handleGoHome}>Go home</button>
        </main>
    );
};
