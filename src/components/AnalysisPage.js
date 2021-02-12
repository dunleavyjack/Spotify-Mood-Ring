import { React, useState, useEffect } from 'react'
import AnalysisDisplay from './AnalysisDisplay'

const AnalysisPage = ({ songs }) => {
    const [analyizedSongName, setAnalyizedSongName] = useState("")

    useEffect(() => {
        songs.forEach((song, i) => {
            setTimeout(() => {
                console.log(song.name)
                setAnalyizedSongName(song.name);
            }, i * 400);
        });
    }, [])

    return (
        <div>
            <AnalysisDisplay songName={analyizedSongName}/>
        </div>
    )
};

export default AnalysisPage;