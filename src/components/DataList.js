import React from 'react'
import DataDisplay from './DataDisplay'

const DataList = ({ songsData }) => {
    console.log(songsData)
    const displaySongs = songsData.map(song => {
        return <DataDisplay 
            name={song.name}
            album={song.album} 
            artist={song.artist} 
            imageURL={song.imageURL}   
            acousticness={song.acousticness}
            danceability={song.danceability} 
            duration_ms={song.duration_ms} 
            energy={song.energy}
            id={song.id}
            instrumentalness={song.instrumentalness}
            key={song.key}
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
    return (
        <div>
            {displaySongs}
        </div>
    )
};

export default DataList