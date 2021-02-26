import React from 'react'

const MoodResultText = ({ mood: {name, firstMood, secondMood, conjuction}}) => {
    return(
        <div className="tan mt-4">
            <h1 className="title-small">{name}</h1>
            <p className="bold mb-5 mt-4 fixed-container px-2">Your recent songs have<span className="pinkish large-text"> {firstMood.difference.toFixed(2)}%</span> {firstMood.mood.replace("-", " ")} {conjuction} <span className="pinkish large-text"> {secondMood.difference.toFixed(2)}%</span> {secondMood.mood.replace("-", " ")} than average.</p>
        </div>
    )
}

export default MoodResultText