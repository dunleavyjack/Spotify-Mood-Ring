import { defaults } from 'lodash'
import React from 'react'

const MoodResultDisplay = ({mood, topMoods}) => {
    return(
        <div className="tan">
            <h1 className="title-small">{mood}</h1>
            <p className="tan floating">&#128549;</p>
            <p>Your songs are {topMoods[0]} and {topMoods[1]}</p>
        </div>
    )
}

export default MoodResultDisplay