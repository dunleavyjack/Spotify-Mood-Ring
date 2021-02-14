import React from 'react'
import { useState, useEffect } from 'react';
import {getAverage} from '../utils/moodFinder'

const MoodDisplay = ({ songs, profile: { display_name, images } }) => {
    const [averageDanceability, setAverageDanceability] = useState(0)

    useEffect(() => {
        console.log(songs)
        const averageDanceability = getAverage(songs)
        setAverageDanceability(averageDanceability)
    }, [])

    return (
        <div className="container d-flex justify-content-center">
            <div className="circular--portrait">
                <img src={images[0].url}/>
            </div>
            <div>
                <h1>Hi, {display_name}</h1>
                <h2>Average danceability: {averageDanceability}</h2>
            </div>
        </div>
    )
}

export default MoodDisplay;