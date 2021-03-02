import { React, useState, useEffect } from 'react';
import { getRecentlyPlayedTracks, getSongAnalysisArray, getUserProfile } from '../utils/functions';
import Navbar from '../components/Navbar'
import AnalyzingContainer from '../components/AnalyzingContainer'
import Loading from '../components/Loading'
import { connect } from 'react-redux'
import { setTokens } from '../actions'

const YourMood = ({ history, tokens }) => {
    const [playedSongsData, setPlayedSongsData] = useState([])
    const [userProfile, setUserProfile] = useState({})
    
    // Get users recently played songs
    useEffect(() => {
        const searchRecentlyPlayedSongs = async () => {
            // Check for access tokens. If none, send home.
            if (!tokens) {
                history.push('/')
            } else {
                try {
                    const usersRecentlyPlayed = await getRecentlyPlayedTracks(tokens.access_token)
                    const theSongData = await getSongAnalysisArray(usersRecentlyPlayed, tokens.access_token)
                    setPlayedSongsData(theSongData)
                    const currentUserProfile = await getUserProfile(tokens.access_token)
                    setUserProfile(currentUserProfile)
                } catch (err) {
                    history.push('/notfound')
                }
            }
        }
        searchRecentlyPlayedSongs();
    }, [])

    // Display loading screen while waiting for songs


    if (playedSongsData.length === 0) {
        return (
            <div>
                <Navbar />
                <Loading text={"Connecting to Spotify"} />
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