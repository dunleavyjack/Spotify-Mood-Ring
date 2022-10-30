import React from 'react';
import { useFetchSpotify } from '../../hooks/useFetchSpotify';
import { useLoadingTimer } from '../../hooks/useLoadingTimer';
import AnalyzingSongsAnimation from '../../components/AnalyzingSongsAnimation/AnalyzingSongsAnimation';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';

const AnalyzingPage: React.FC = () => {
    const spotifyRequestsComplete = useFetchSpotify();
    const finishedLoading = useLoadingTimer();

    if (!spotifyRequestsComplete && !finishedLoading) {
        return <LoadingAnimation />;
    }

    return <AnalyzingSongsAnimation />;
};

export default AnalyzingPage;
