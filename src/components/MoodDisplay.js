import React from 'react'
import MoodResultDisplay from './MoodResultDisplay'
import Loading from './Loading'
import { useState, useEffect } from 'react';
import { getAverage, calculateMood } from '../utils/moodFinder'

const MoodDisplay = ({ songs, profile: { display_name, images } }) => {
    const [finishedShuffeling, setFinishedShuffeling] = useState(false)
    const [moodName, setMoodName] = useState("")
    const [mood, setMood] = useState(() => {
        const danceability = getAverage(songs.map(song => song.danceability))
        const acousticness = getAverage(songs.map(song => song.acousticness))
        const energy = getAverage(songs.map(song => song.energy))
        const instrumentalness = getAverage(songs.map(song => song.instrumentalness))
        const key = getAverage(songs.map(song => song.key))
        const liveness = getAverage(songs.map(song => song.liveness))
        const loudness = getAverage(songs.map(song => song.loudness))
        const mode = getAverage(songs.map(song => song.mode))
        const speechiness = getAverage(songs.map(song => song.speechiness))
        const tempo = getAverage(songs.map(song => song.tempo))
        const valence = getAverage(songs.map(song => song.valence))

        const averagesObject = {
            danceability,
            acousticness,
            energy,
            instrumentalness,
            key,
            liveness,
            loudness,
            mode,
            speechiness,
            tempo,
            valence
        };
        const yourMood = calculateMood(averagesObject)
        console.log(yourMood)
        return yourMood
    });

    useEffect(() => {
        setTimeout(() => {
            setFinishedShuffeling(true)
        }, 1200)
    })

    if(finishedShuffeling === false){
        return (
            <div>
                <Loading text={"Analyzing you mood"}/>
            </div>
        )
    }

    return (
        <div>
            <div className="tan d-flex justify-content-center align-items-center text-center content-body">
                <div>
                    <div className="circular--portrait mx-auto">
                        <img src={images[0].url} />
                    </div>
                    <MoodResultDisplay mood={mood} />
                </div>
            </div>
        </div>
    );
};

export default MoodDisplay;