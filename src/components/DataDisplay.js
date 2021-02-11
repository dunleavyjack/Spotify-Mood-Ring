import React from 'react'

const DataDisplay = ({ 
    name,
    album,
    artist,
    imageURL,
    acousticness,
    danceability, 
    duration_ms,
    energy,
    id,
    instrumentalness,
    key,
    liveness,
    loudness,
    mode,
    speechiness,
    tempo,
    time_signature,
    track_href,
    type,
    uri,
    valence,
}) => {
    return (
        <div>
            <img src={imageURL} />
            <h2>{name}</h2>
            <h3>{artist}</h3>
            <h4>{album}</h4>
            <p>Accousticness:  {acousticness}</p>
            <p>Danceability: {danceability}</p>
            <p>Duration (in ms): {duration_ms}</p>
            <p>Energy: {energy}</p>
            <p>Id: {id}</p>
            <p>Instrumentalness: {instrumentalness}</p>
            <p>Key: {key}</p>
            <p>Liveness: {liveness}</p>
            <p>Loudness: {loudness}</p>
            <p>Mode: {mode}</p>
            <p>Speechiness: {speechiness}</p>
            <p>Tempo: {tempo}</p>
            <p>Time Signature: {time_signature} </p>
            <p>Track href: {track_href} </p>
            <p>Type: {type}</p>
            <p>Uri: {uri}</p>
            <p>Valence: {valence}</p>
        </div>
    )
} 

export default DataDisplay