import React, { useEffect } from 'react';
import { useAnalyzingSongs } from '../../hooks/useAnalyzingSongs';
import { store } from '../../store';
import SongDisplay from '../SongDisplay/SongDisplay';
import { useNavigate } from 'react-router-dom';

const AnalyzingSongsAnimation: React.FC = () => {
    const navigate = useNavigate();
    const { recentSongs } = store.getState();
    const { currentSong, finishedAnalyzingSongs } =
        useAnalyzingSongs(recentSongs);

    useEffect(() => {
        if (finishedAnalyzingSongs) {
            navigate('/mood');
        }
    }, [finishedAnalyzingSongs]); // eslint-disable-line react-hooks/exhaustive-deps

    return <SongDisplay song={currentSong} />;
};

export default AnalyzingSongsAnimation;
