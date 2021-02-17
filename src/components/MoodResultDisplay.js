import React from 'react'

const MoodResultDisplay = ({mood, topMoods}) => {
    console.log(topMoods)
    return(
        <div className="tan">
            <p className="tan floating">&#128522;</p>
            <h1 className="title-small">{mood}</h1>
            <p>Your songs are {topMoods.moodOneName} and {topMoods.moodTwoName}.</p>
            <p>They are {topMoods.moodOneValue} and {topMoods.moodTwoValue}</p>
        </div>
    )
}

export default MoodResultDisplay