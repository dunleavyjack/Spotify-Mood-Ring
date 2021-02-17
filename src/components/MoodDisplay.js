import React from 'react'
import MoodResultDisplay from './MoodResultDisplay'
import { useState, useEffect } from 'react';
import { getAverage, calculateMood, evaluateMood } from '../utils/moodFinder'

const MoodDisplay = ({ songs, profile: { display_name, images } }) => {
    const [mood, setMood] = useState("")
    const [topMoods, setTopMoods] = useState([])

    useEffect(() => {
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
        console.log(averagesObject)
        const topMoods = calculateMood(averagesObject)
        console.log('top moods below')
        console.log(topMoods)
        setTopMoods(topMoods)
        const yourMood = evaluateMood(topMoods)
        setMood(yourMood)
    }, [])

    return (
        <div>
            <div className="tan d-flex justify-content-center align-items-center text-center content-body">
                <div>
                    <div className="circular--portrait mx-auto">
                        <img src={images[0].url} />
                    </div>
                    {/* <MoodResultDisplay mood={mood} topMoods={topMoods}/> */}
                </div>
            </div>
        </div>
    );
};

export default MoodDisplay;