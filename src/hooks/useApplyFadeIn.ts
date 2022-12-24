import { useState, useEffect } from 'react';
import { routes } from '../constants/routes';

export const useApplyFadeIn = (): boolean => {
    const [applyFadeIn, setApplyFadeIn] = useState<boolean>(false);

    useEffect(() => {
        const { pathname } = window.location;
        setApplyFadeIn(pathname === routes.welcome);
    }, []);

    return applyFadeIn;
};
