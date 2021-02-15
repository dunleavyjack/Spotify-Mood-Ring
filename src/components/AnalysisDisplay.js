import React from 'react'
import { fixDate } from '../utils/functions'

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


    return (
        <div class="d-flex mb-3 justify-content-center align-items-center vh-100 text-center">
            <div>
                <h2>Analyzing {countIndex}/20</h2>
                <img className="album-cover" src={imageURL} />
                <h2 className="bold">{name}</h2>
                <h3>{artist}</h3>
                <h4>{album}</h4>
                <h4 className="pinkish">You listened on {fixDate(playedAt)}</h4>
            </div>
        </div>
    )
}
export default AnalysisDisplay