import React from 'react'

const MoodResultDisplay = ({mood}) => {
    return(
        <div className="tan">
            {/* <p className="tan floating">&#128522;</p> */}
            <h1 className="title-small">{mood.name}</h1>
            {/* <h1 className="title-small">{mood.name}</h1> */}
            <p className="bold">Your recent songs have<span className="pinkish large-text"> {mood.firstMood.difference.toFixed(2)}%</span> {mood.firstMood.mood.replace("-", " ")} and <span className="pinkish large-text"> {mood.secondMood.difference.toFixed(2)}%</span> {mood.secondMood.mood.replace("-", " ")} than the average.</p>
            {/* <p>They are {mood.firstMood.difference} and {mood.secondMood.difference}</p> */}
        </div>
    )
}

export default MoodResultDisplay