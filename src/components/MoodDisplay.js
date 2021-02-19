import React from 'react'
import MoodResultDisplay from './MoodResultDisplay'
import Loading from './Loading'
import { useState, useEffect } from 'react';
import { calculateMood } from '../utils/moodFinder'

const MoodDisplay = ({ songs, profile: { display_name, images } }) => {
    const [finishedShuffeling, setFinishedShuffeling] = useState(false)
    const [mood, setMood] = useState(() => {
        const yourMood = calculateMood(songs)
        console.log(yourMood)
        return yourMood
    });

    // Initiate loading page with 2-ish second delay
    useEffect(() => {
        setTimeout(() => {
            setFinishedShuffeling(true)
        }, 2400)
    })

    // Direct user to loading page
    if(finishedShuffeling === false){
        return (
            <div>
                <Loading text={"Analyzing you mood"}/>
            </div>
        )
    }

    // After loading page 'delay', display result page
    return (
        <div>
            <div className="tan d-flex justify-content-center align-items-center text-center content-body">
                <div>
                    <div className="circular--portrait mx-auto">
                        <img src={images[0].url} />
                    </div>
                    <MoodResultDisplay mood={mood} />
                    <div className="mt-4">
                        <button className="btn-grey">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoodDisplay;