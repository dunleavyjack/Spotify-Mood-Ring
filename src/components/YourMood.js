import { React, useState, useEffect } from 'react';
import { getRecentlyPlayedTracks, getSongAnalysisArray, getUserProfile } from '../utils/functions';
import Navbar from './Navbar'
import AnalysisPage from './AnalysisPage'
import Loading from './Loading'
import Footer from './Footer'

const YourMood = () => {
    const [playedSongsData, setPlayedSongsData] = useState([])
    const [userProfile, setUserProfile] = useState({})

    // Get users recently played songs
    useEffect(() => {
        const searchRecentlyPlayedSongs = async () => {
            const usersRecentlyPlayed = await getRecentlyPlayedTracks()
            const theSongData = await getSongAnalysisArray(usersRecentlyPlayed)
            setPlayedSongsData(theSongData)
            const currentUserProfile = await getUserProfile()
            setUserProfile(currentUserProfile)
        }
        searchRecentlyPlayedSongs();
    }, [])

    // Display loading screen while waiting for songs
    if(playedSongsData.length === 0){
        return (
            <div>
                <Navbar />
                <Loading text={"Connecting just takes a sec"}/>
                <Footer />
            </div>
        )
    }

    // Send songs to analysis page
    return (
        <div>
            <Navbar />
            <AnalysisPage songs={playedSongsData} profile={userProfile}/>
            <Footer />
        </div>
    )
};

export default YourMood;