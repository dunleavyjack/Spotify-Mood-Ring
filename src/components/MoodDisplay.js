import React from 'react'
import MoodResultDisplay from './MoodResultDisplay'
import Loading from './Loading'
import { useState, useEffect } from 'react';
import { calculateMood } from '../utils/moodFinder'
import AdditionalDisplay from './AdditionalDisplay';
import Footer from './Footer'

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
        <React.Fragment>
            <div className="tan d-flex justify-content-center align-items-center text-center">
                <div className="mt-3">
                    <div className="circular--portrait mx-auto mt-5">
                        <img src={images[0].url} />
                    </div>
                    <MoodResultDisplay mood={mood} />
                </div>
            </div>
            <AdditionalDisplay mood={mood}/>
            <Footer />
        </React.Fragment>
    );
};

export default MoodDisplay;