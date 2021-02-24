import React from 'react'
import AddDisplayWhite from './AddDisplayWhite'
import AddDisplayPink from './AddDisplayPink'
import {fixCapitalization} from '../utils/functions'

const AdditionalDisplay = ({mood}) => {
    return (
        <div className="whiteish d-flex justify-content-center align-items-center text-center black-body">
            <div className="black-body">
                <h2 className="bold mt-5 mb-5 tan-font">Your Full Breakdown</h2>
                <AddDisplayWhite label={fixCapitalization(mood.firstMood.mood)} percent={mood.firstMood.difference.toFixed(2) + '%'} />
                <AddDisplayPink label={fixCapitalization(mood.secondMood.mood)} percent ={mood.secondMood.difference.toFixed(2) + '%'} />
                <AddDisplayWhite label={fixCapitalization(mood.thirdMood.mood)} percent={mood.thirdMood.difference.toFixed(2) + '%'} />
                <AddDisplayPink label={fixCapitalization(mood.fourthMood.mood)} percent ={mood.fourthMood.difference.toFixed(2) + '%'} />
                <AddDisplayWhite label={"Average Tempo"} percent={mood.tempo} />
            </div>
        </div>
    )
}

export default AdditionalDisplay