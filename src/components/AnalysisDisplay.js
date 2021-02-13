import React from 'react'

const AnalysisDisplay = ({ song: {
    name,
    album,
    artist,
    imageURL,
    playedAt,
    acousticness,
    danceability, 
    duration_ms,
    energy,
    id,
    instrumentalness,
    songKey,
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
    countIndex
} }) => {
    
    
    
    
    return(
        <div className="container">
            <h2>Analyzing {countIndex}/20</h2>
            <img src={imageURL} />
            <h2 className="bold">{name}</h2>
            <h3>{artist}</h3>
            <h4>{album}</h4>
            <h4 className="pinkish">You listened at: {playedAt}</h4>
        </div>
    )
}
export default AnalysisDisplay