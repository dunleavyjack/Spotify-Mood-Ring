import { useEffect, useState } from 'react';
import { Songs } from '../types';

export const useAnalyzingSongs = (songs: Songs[]) => {
    const [currentSong, setCurrentSong] = useState<Songs>(songs[0]);
    const [finishedAnalyzingSongs, setFinishedAnalyzingSongs] =
        useState<boolean>(false);

    useEffect(() => {
        // Show user each album for 1.5 seconds
        songs.forEach((song: Songs, index: number) => {
            setTimeout(() => {
                setCurrentSong(song);
            }, index * 150);
        });

        // Finish showing albums after 31.5s
        setTimeout(() => {
            setFinishedAnalyzingSongs(true);
        }, 3150);
    }, [songs]);

    return { currentSong, finishedAnalyzingSongs };
};
