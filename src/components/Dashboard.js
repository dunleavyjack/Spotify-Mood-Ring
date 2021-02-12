import { React, useState, useEffect } from 'react';
import { getRecentlyPlayedTracks, getSongAnalysisArray } from '../utils/functions';
import DataList from './DataList'
import Header from './Header'
import AnalysisPage from './AnalysisPage'

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
            <AnalysisPage songs={playedSongsData} />
            <DataList songsData={playedSongsData} />
        </div>
    )
};

export default Dashboard;