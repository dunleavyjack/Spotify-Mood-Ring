import React, { useEffect } from 'react';
import { useAnalyzingSongs } from '../../hooks/useAnalyzingSongs';
import SongDisplay from '../SongDisplay/SongDisplay';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { songsState } from '../../features/songs/songsSlice';

const AnalyzingSongsAnimation: React.FC = () => {
    const navigate = useNavigate();
    const { recentSongs } = useSelector(songsState);
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
