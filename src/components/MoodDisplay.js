import React from 'react'
import { useState, useEffect } from 'react';
import { getAverage, calculateMood } from '../utils/moodFinder'

const MoodDisplay = ({ songs, profile: { display_name, images } }) => {
    const [averages, setAverages] = useState({})
    const [mood, setMood] = useState("")

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
        setAverages(averagesObject)
        const yourMood = calculateMood(averagesObject)
        setMood(yourMood)
    }, [])

    return (
        <div>
            <div class="tan d-flex justify-content-center align-items-center text-center content-body">
                <div>
                    <div className="circular--portrait mx-auto">
                        <img src={images[0].url} />
                    </div>
                    <h1 className="title-small">{mood}</h1>
                    <p className="tan floating">&#128549;</p>
                </div>
            </div>
        </div>
    );
};

export default MoodDisplay;