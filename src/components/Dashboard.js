import React from 'react';
import { getUsersSavedTracks, getSongAnalysis, getRecentlyPlayedTracks, getSongAnalysisArray } from '../utils/functions';
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


        // const songsData = await Promise.all(playedSongs.map( async (song) => {
        //     getSongAnalysis(song.track.id)
        // }))
        // setPlayedSongsData(songsData)

    return(
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => handleClick()}>Get Recently Played Tracks Data</button>
            <DataList songsData={playedSongsData} recentlyPlayed={playedSongsData} />
        </div>
    )
};

export default Dashboard;