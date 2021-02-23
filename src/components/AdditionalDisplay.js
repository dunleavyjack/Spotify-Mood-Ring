import React from 'react'

const AdditionalDisplay = () => {
    return (
        <div className="whiteish d-flex justify-content-center align-items-center text-center black-body">
            <div className="black-body">
                <h2 className="bold mt-5 mb-5 tan-font">Your Full Breakdown</h2>
                <h4 className="bold floating whiteish">4.54%</h4>
                <h4 className="bold whiteish mt-3 mb-5">Higher Danceability</h4>
                <h4 className="bold floating pinkish">54.54%</h4>
                <h4 className="bold pinkish mt-3 mb-5">Lower Acousticness</h4>
                <h4 className="bold floating whiteish">4.54%</h4>
                <h4 className="bold whiteish mt-3 mb-5">Higher Danceability</h4>
                <h4 className="bold floating pinkish">74.54%</h4>
                <h4 className="bold pinkish mt-3 mb-5">More Volume</h4>
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