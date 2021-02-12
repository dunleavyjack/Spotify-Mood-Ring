import React from 'react';
import { getRecentlyPlayedTracks, getSongAnalysisArray } from '../utils/functions';
import DataList from './DataList'
import { useState, useEffect } from 'react';
import Header from './Header'

const Dashboard = () =>  {    
    const [playedSongsData, setPlayedSongsData] = useState([])

    useEffect(() => {
        const searchRecentlyPlayedSongs = async () => {            
            const usersRecentlyPlayed = await getRecentlyPlayedTracks()
            const theSongData = await getSongAnalysisArray(usersRecentlyPlayed)
            setPlayedSongsData(theSongData)
        }
        searchRecentlyPlayedSongs();
    }, [])

    return(
        <div>
            <Header />
            <DataList songsData={playedSongsData} />
        </div>
    )
};

export default Dashboard;