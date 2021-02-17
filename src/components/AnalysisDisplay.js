import React from 'react'
import { fixDate } from '../utils/functions'

const AnalysisDisplay = ({ song: {
    name,
    album,
    artist,
    imageURL,
    playedAt,
    countIndex
} }) => {


    return (
        <div className="tan d-flex mb-3 justify-content-center align-items-center text-center content-body">
            <div>
                <h2>Analyzing {countIndex}/20</h2>
                <div>
                    <img className="album-cover" src={imageURL} />
                </div>
                <h2 className="bold">{name}</h2>
                <h3>{artist}</h3>
                <h4>{album}</h4>
                <h4 className="pinkish">You listened on {fixDate(playedAt)}</h4>
            </div>
        </div>
    )
}
export default AnalysisDisplay