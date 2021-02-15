import React from 'react'
import { useState, useEffect } from 'react';
import { getAverage } from '../utils/moodFinder'

const MoodDisplay = ({ songs, profile: { display_name, images } }) => {
    const [averages, setAverages] = useState({})

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
            instrumentalness ,
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
        console.log(averages)
    }, [])

    return (
        <div className="container d-flex justify-content-center">
            <div className="circular--portrait">
                <img src={images[0].url}/>
            </div>
            <div>
                <h1>Hi, {display_name}</h1>
                <h2>Average danceability: {averages.danceability}</h2>
                <h2>Average acousticness: {averages.acousticness}</h2>
                <h2>Average energy: {averages.energy}</h2>
                <h2>Average instrumentalness: {averages.instrumentalness}</h2>
                <h2>Average key: {averages.key}</h2>
                <h2>Average liveness: {averages.liveness}</h2>
                <h2>Average loudness: {averages.loudness}</h2>
                <h2>Average mode: {averages.mode}</h2>
                <h2>Average speechiness: {averages.speechiness}</h2>
                <h2>Average tempo: {averages.tempo}</h2>
                <h2>Average valence: {averages.valence}</h2>
            </div>
        </div>
    )
}

export default MoodDisplay;