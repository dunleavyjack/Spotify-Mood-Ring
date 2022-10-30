import { useState, useEffect } from 'react';

export const useLoadingTimer = (): boolean => {
    const [finishedLoading, setFinishedLoading] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setFinishedLoading(true);
        }, 3000);
    });

    return finishedLoading;
};
