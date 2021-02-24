import React from 'react'

const MoodResultDisplay = ({ mood: {name, firstMood, secondMood, conjuction}}) => {
    return(
        <div className="tan">
            {/* <p className="tan floating">&#128522;</p> */}
            <h1 className="title-small">{name}</h1>
            <p className="bold mb-5 fixed-container">Your recent songs have<span className="pinkish large-text"> {firstMood.difference.toFixed(2)}%</span> {firstMood.mood.replace("-", " ")} {conjuction} <span className="pinkish large-text"> {secondMood.difference.toFixed(2)}%</span> {secondMood.mood.replace("-", " ")} than average.</p>
        </div>
    )
}

export default MoodResultDisplay