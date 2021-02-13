import { React, useState, useEffect } from 'react'
import AnalysisDisplay from './AnalysisDisplay'
import Loading from './Loading'
import CircularProgress from '@material-ui/core/CircularProgress';

const AnalysisPage = ({ songs }) => {
    const [analyizedSong, setAnalyizedSong] = useState("")

    useEffect(() => {
        songs.forEach((song, i) => {
            setTimeout(() => {
                console.log(song)
                setAnalyizedSong(song);
            }, i * 300);
        });
    }, [])

    if(songs.length === 0){
        return (
            <div>
                <CircularProgress color="secondary" />
                <Loading />
            </div>
        )
    }

    return (
        <div>
            <AnalysisDisplay song={analyizedSong}/>
        </div>
    )
};


export default AnalysisPage;