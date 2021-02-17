import React from 'react'

const MoodResultDisplay = ({mood}) => {
    return(
        <div className="tan">
            {/* <p className="tan floating">&#128522;</p> */}
            <h1 className="title-small">reflective</h1>
            {/* <h1 className="title-small">{mood.name}</h1> */}
            <p className="bold">Your recent songs have<span className="pinkish large-text"> {mood.firstMood.difference}%</span> {mood.firstMood.mood} and <span className="pinkish large-text"> {mood.secondMood.difference}%</span> {mood.secondMood.mood}</p>
            <p className="bold">than the average.</p>
            {/* <p>They are {mood.firstMood.difference} and {mood.secondMood.difference}</p> */}
        </div>
    )
}

export default MoodResultDisplay