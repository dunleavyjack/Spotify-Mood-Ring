import React from "react";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import { calculateMood } from "../utils/moodDetector";
import FullBreakdown from "./FullBreakdown";
import Footer from "./Footer";
import MoodResultHeader from "./MoodResultHeader";
import blank_avatar from "../assets/blank_avatar.png";

const MoodDisplay = ({ songs, profile }) => {
    const [finishedShuffeling, setFinishedShuffeling] = useState(false);
    const [mood, setMood] = useState(() => {
        const yourMood = calculateMood(songs);
        return yourMood;
    });

    // Initiate loading page with 2-ish second delay
    useEffect(() => {
        setTimeout(() => {
            setFinishedShuffeling(true);
        }, 2400);
    });

    const profileImage =
        profile.images.length > 0 ? profile.images[0].url : blank_avatar;

    // Direct user to loading page
    if (finishedShuffeling === false) {
        return (
            <div>
                <Loading text={"Detecting your mood"} />
            </div>
        );
    }

    // After loading page 'delay', display result page
    return (
        <React.Fragment>
            <MoodResultHeader mood={mood} imageURL={profileImage} />
            <FullBreakdown mood={mood} />
            <Footer />
        </React.Fragment>
    );
};

export default MoodDisplay;
