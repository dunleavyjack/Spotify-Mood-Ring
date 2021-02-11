import React from 'react';
import { getRecentlyPlayedTracks, getSongAnalysisArray } from '../utils/functions';
import DataList from './DataList'
import { useState, useEffect } from 'react';

const Dashboard = () =>  {    
    const [playedSongs, setPlayedSongs] = useState([])
    const [playedSongsData, setPlayedSongsData] = useState([])
    
    const handleClick = async () => {
        const theSongData = await getSongAnalysisArray(playedSongs)
        console.log(theSongData)
        setPlayedSongsData(theSongData)
    }

    useEffect(() => {
        const searchRecentlyPlayedSongs = async () => {
            const usersRecentlyPlayed = await getRecentlyPlayedTracks()
            setPlayedSongs(usersRecentlyPlayed) 
        }
        searchRecentlyPlayedSongs();
    }, [])

    return(
        <div>
            <h1>Main Page</h1>
            <button onClick={() => handleClick()}>Get The Data</button>
            <DataList songsData={playedSongsData} recentlyPlayed={playedSongsData} />
        </div>
    )
};

export default Dashboard;