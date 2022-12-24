import { useState, useEffect } from 'react';
import { MIN_LOADING_TIME } from '../constants/time';

/**
 *
 * Background SVGs are preloaded on the app's initial render, and a
 * spinner is shown while they complete loading.
 *
 * In the case that the SVGs load too quickly, this hook adds a set minium
 * loading time, so the spinner will not appear/disappear too quickly.
 *
 */

export const useMinimumLoadingTime = (): boolean => {
    const [minimumLoadingTimeComplete, setMinimumLoadingTimeComplete] =
        useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setMinimumLoadingTimeComplete(true);
        }, MIN_LOADING_TIME);
    }, []);

    return minimumLoadingTimeComplete;
};
