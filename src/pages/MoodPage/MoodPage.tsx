import React, { useEffect, useState } from 'react';
import CircularProfilePic from '../../components/CircularProfilePic/CircularProfilePic';
import MoodFeature from '../../components/MoodFeature/MoodFeature';
import Navbar from '../../components/Navbar/Navbar';
import Synth from '../../components/Synth/Synth';
import './MoodPage.css';
import { useNavigate } from 'react-router-dom';
import { calculateMood } from '../../utils/moodUtil';
import profileImageLine from '../../assets/pageAssets/profileImageLine.png';
import fullBreakdown from '../../assets/pageAssets/fullBreakdown.png';
import { store } from '../../store';
import {
    AudioFeatures,
    User,
    Songs,
    Mood,
    EmotionalFeatures,
    StandardFeatures,
} from '../../types';
import { EmptyMood } from '../../constants';
import { TRY_AGAIN } from '../../text';

interface ReduxState {
    user: User;
    recentSongs: Songs[];
    audioFeatures: AudioFeatures[];
}

const MoodPage: React.FC = () => {
    const { user, audioFeatures }: ReduxState = store.getState();
    const [mood, setMood] = useState<Mood>(EmptyMood);
    const navigate = useNavigate();

    const handleTryAgain = (): void => {
        navigate('/');
    };

    useEffect(() => {
        if (!user || !audioFeatures.length) {
            navigate('/');
        }
        const mood: Mood = calculateMood(audioFeatures);
        setMood(mood);
    }, [user, audioFeatures]); // eslint-disable-line react-hooks/exhaustive-deps

    const emotionalFeaturesList = (): JSX.Element[] => {
        return mood.emotionalFeatures.map(
            (emotionalFeature: EmotionalFeatures, index: number) => {
                return (
                    <MoodFeature
                        feature={emotionalFeature.percentDifferenceString}
                        percent={`${emotionalFeature.percentDifference.toFixed(
                            2
                        )}%`}
                        key={index}
                    />
                );
            }
        );
    };

    const averageTempo: string =
        mood.standardFeatures
            .find(
                (feature: StandardFeatures) => feature.featureName === 'tempo'
            )
            ?.averageValue.toFixed(2) || '0';

    const averageNotatedKey: string =
        mood.standardFeatures.find(
            (feature: StandardFeatures) => feature.featureName === 'key'
        )?.averageNotatedKey || 'A#4';

    if (mood.mood) {
        return (
            <>
                <main className="page-content scrollable">
                    <Navbar isFullscreen={true} />
                    <section className="profile-display-container">
                        <CircularProfilePic imageURL={user.imageURL} />
                        <img
                            alt="Profile Decoration"
                            src={profileImageLine}
                            className="profile-decoration"
                        />
                    </section>
                    <section className="mood-display-container">
                        <img
                            alt="Your Mood"
                            src={mood.moodImageURL}
                            className="your-mood"
                        />
                    </section>
                    <section>
                        <h2 className="mood-description">
                            Your recent songs have{' '}
                            {mood.emotionalFeatures[0].percentDifference.toFixed(
                                2
                            )}
                            %{' '}
                            {mood?.emotionalFeatures[0].percentDifferenceString}{' '}
                            {'and'}{' '}
                            {mood.emotionalFeatures[1].percentDifference.toFixed(
                                2
                            )}
                            %{' '}
                            {mood.emotionalFeatures[1].percentDifferenceString}{' '}
                            than the average listener.
                        </h2>
                    </section>
                    <section className="breakdown-container">
                        <img
                            alt="Full Breakdown"
                            src={fullBreakdown}
                            className="full-breakdown"
                        />
                        <div className="mood-display-grid">
                            <div className="left">
                                {emotionalFeaturesList()}
                            </div>
                            <div className="right">
                                <Synth note={averageNotatedKey} />
                                <MoodFeature
                                    feature={'bpm'}
                                    percent={averageTempo}
                                />
                                <MoodFeature feature="You 😇" percent="100%" />
                            </div>
                        </div>
                    </section>
                    <button
                        className="try-again-button"
                        onClick={handleTryAgain}
                    >
                        {TRY_AGAIN}
                    </button>
                </main>
            </>
        );
    }

    return <></>;
};

export default MoodPage;
