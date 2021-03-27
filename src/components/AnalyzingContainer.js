import { React, useState, useEffect } from "react";
import AnalyzingDisplay from "./AnalyzingDisplay";
import Loading from "./Loading";
import MoodDisplay from "./MoodDisplay";

const AnalyzingContainer = ({ songs, profile }) => {
    const [analyizedSong, setAnalyizedSong] = useState("");
    const [finishedShuffeling, setFinishedShuffeling] = useState(false);

    useEffect(() => {
        songs.forEach((song, i) => {
            setTimeout(() => {
                setAnalyizedSong(song);
            }, i * 150);
        });
        setTimeout(() => {
            setFinishedShuffeling(true);
        }, 3150);
    }, []);

    // Return loading screen while waiting for async/await
    if (finishedShuffeling === false && songs.length === 0) {
        return (
            <div>
                <Loading text={"Connecting with Spotify."} />
            </div>
        );
    }

    // Return YourMood page when shuffeling is complete
    if (finishedShuffeling === false && songs.length > 0) {
        return <AnalyzingDisplay song={analyizedSong} />;
    }

    // Shuffle through songs being 'analyized'
    return (
        <div>
            <MoodDisplay songs={songs} profile={profile} />
        </div>
    );
};

export default AnalyzingContainer;
