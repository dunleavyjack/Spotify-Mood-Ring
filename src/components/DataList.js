import React from 'react'
import DataDisplay from './DataDisplay'
import Loading from './Loading'
import CircularProgress from '@material-ui/core/CircularProgress';
import AnalysisPage from './AnalysisPage';

const DataList = ({ songsData }) => {
    const displaySongs = songsData.map(song => {
        return <DataDisplay 
            name={song.name}
            album={song.album} 
            artist={song.artist} 
            imageURL={song.imageURL}   
            playedAt={song.playedAt}
            acousticness={song.acousticness}
            danceability={song.danceability} 
            duration_ms={song.duration_ms} 
            energy={song.energy}
            id={song.id}
            instrumentalness={song.instrumentalness}
            key={song.id}
            songKey={song.key}
            liveness={song.liveness}
            loudness={song.loudness}
            mode={song.mode} 
            speechiness={song.speechiness}
            tempo={song.tempo}
            time_signature={song.time_signature}
            track_href={song.track_href} 
            type={song.type}
            uri={song.uri}
            valence={song.valence}
        />
    });
    
    if(songsData.length === 0){
        return (
            <div>
                <CircularProgress color="secondary" />
                <Loading />
            </div>
        )
    }

    return (
        <div>
            <AnalysisPage songs={songsData}/>
            {/* {displaySongs} */}
        </div>
    )
};

export default DataList