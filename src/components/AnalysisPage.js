import { React, useState, useEffect } from 'react'
import AnalysisDisplay from './AnalysisDisplay'
import Loading from './Loading'
import MoodDisplay from './MoodDisplay'

const AnalysisPage = ({ songs }) => {
    const [analyizedSong, setAnalyizedSong] = useState("")
    const [finishedShuffeling, setFinishedShuffeling] = useState(false)

    useEffect(() => {
        songs.forEach((song, i) => {
            setTimeout(() => {
                setAnalyizedSong(song);
            }, i * 200);
        });
        setTimeout(() => {
            setFinishedShuffeling(true)
        }, 5000)
    }, [])

    // Return loading screen while waiting for async/await
    if(finishedShuffeling === false && songs.length === 0){
        return (
            <div>
                <Loading />
            </div>
        )
    }

    // Return YourMood page when shuffeling is complete
    if(finishedShuffeling === false && songs.length > 0){
        return <AnalysisDisplay song={analyizedSong}/>
    }

    // Shuffle through songs being 'analyized'
    return (
        <div>
            <MoodDisplay songs={songs}/>
        </div>
    )
};

export default AnalysisPage;