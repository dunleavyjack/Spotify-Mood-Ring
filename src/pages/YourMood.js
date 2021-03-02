import { React, useState, useEffect } from 'react';
import { getRecentlyPlayedTracks, getSongAnalysisArray, getUserProfile } from '../utils/functions';
import Navbar from '../components/Navbar'
import AnalyzingContainer from '../components/AnalyzingContainer'
import Loading from '../components/Loading'
import { connect } from 'react-redux'
import { setTokens } from '../actions'

const YourMood = ({tokens: {access_token}}) => {
    const [playedSongsData, setPlayedSongsData] = useState([])
    const [userProfile, setUserProfile] = useState({})

    // Get users recently played songs
    useEffect(() => {
        const searchRecentlyPlayedSongs = async () => {
            const usersRecentlyPlayed = await getRecentlyPlayedTracks(access_token)
            const theSongData = await getSongAnalysisArray(usersRecentlyPlayed, access_token)
            setPlayedSongsData(theSongData)
            const currentUserProfile = await getUserProfile(access_token)
            setUserProfile(currentUserProfile)
        }
        searchRecentlyPlayedSongs();
    }, [])

    // Display loading screen while waiting for songs
    if (playedSongsData.length === 0) {
        return (
            <div>
                <Navbar />
                <Loading text={"Connecting with Spotify"} />
            </div>
        )
    }

    // Send songs and user profile to analysis page
    return (
        <div>
            <Navbar />
            <AnalyzingContainer songs={playedSongsData} profile={userProfile} />
        </div>
    )
};

const mapStateToProps = state => {
    return { tokens: state.tokens }
}


export default connect(mapStateToProps, {
    setTokens
})(YourMood);