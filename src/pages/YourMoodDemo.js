import { React, useState, useEffect } from 'react';
import { getRecentlyPlayedTracks, getSongAnalysisArray, getUserProfile } from '../utils/functions';
import Navbar from '../components/Navbar'
import AnalyzingContainer from '../components/AnalyzingContainer'
import Loading from '../components/Loading'
import { demoSongData, demoUserProfile } from '../utils/demoSongData'

const YourMoodDemo = () => {
    const [finishedLoading, setFinishedLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setFinishedLoading(true)
        }, 3000)
    })


    if (finishedLoading === false) {
        return (
            <div>
                <Navbar />
                <Loading text={"Connecting To Spotify"} />
            </div>
        )
    }

    return (
        <div>
            <Navbar />
            <AnalyzingContainer songs={demoSongData} profile={demoUserProfile}/>
        </div>
    )
};

export default YourMoodDemo;