import React from 'react'
import AddDisplayWhite from './AddDisplayWhite'
import AddDisplayPink from './AddDisplayPink'

const AdditionalDisplay = ({mood}) => {
    return (
        <div className="whiteish d-flex justify-content-center align-items-center text-center black-body">
            <div className="black-body">
                <h2 className="bold mt-5 tan-font">Your Full Breakdown</h2>
                <h4 className="mb-5 tan-font">(Compared to average)</h4>
                <AddDisplayWhite label={'Less Happiness'} percent={'64.5%'} />
                <AddDisplayPink label={'Higher Danceability'} percent ={'54.76%'} />
                <AddDisplayWhite label={'Lower Acousticness'} percent={'74.54%'} />
                <AddDisplayPink label={'Average Tempo'} percent ={mood.tempo} />
            </div>
        </div>
    )
}

// Actually working double columns
{/* <React.Fragment>
<div class="d-flex justify-content-center black-body">
    <h4 className="bold whiteish mt-5">Higher Danceability</h4>
    <h4 className="bold floating pinkish">4.54%</h4>
</div>
<div class="d-flex justify-content-center black-body">
    <h4 className="bold whiteish">Higher Danceability</h4>
    <h4 className="bold floating pinkish">4.54%</h4>
</div>
</React.Fragment> */}





{/* <div className="container-fluid black-body">
<div className="black-body whiteish">
    <div className="black-body align-items-center">
        <h2 className="bold mt-5 mb-5 tan-font">Your Full Breakdown</h2>

        <div className="container">
            <div className="black-body row align-items-center text-center">
                <h4 className="col bold">Higher Danceability</h4>
                <h4 className="col bold floating pinkish">4.54</h4>
            </div>

            <div className="black-body row mt-3 text-center">
                <h4 className="col mt-auto bold text-center">Higher Valence</h4>
                <h4 className="col bold floating pinkish text-center">96.56%</h4>
            </div>

            <div className="black-body row">
                <h4 className="col mt-auto bold text-center">Acousticness</h4>
                <h4 className="col bold floating pinkish">15.06%</h4>
            </div>

            <div className="black-body row mb-5">
                <h4 className="col mt-auto bold text-center">Loudness</h4>
                <h4 className="col bold floating pinkish">15.06%</h4>
            </div>
        </div>
    </div>
</div>
</div > */}



export default AdditionalDisplay