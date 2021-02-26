import React from 'react'
import MoodResultText from './MoodResultText'
import CircularProfilePic from './CircularProfilePic';

const MoodResultHeader = ({mood, imageURL}) => {
    return (
        <div className="tan d-flex justify-content-center align-items-center text-center">
            <div className="mt-3">
                <CircularProfilePic imageURL={imageURL} />
                <MoodResultText mood={mood} />
            </div>
        </div>
    )
}

export default MoodResultHeader;