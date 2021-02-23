import React from 'react'

const AdditionalDisplay = () => {
    return (
        <div className="container-fluid black-body max-w">
            <div className="black-body d-flex justify-content-center">
                <div className="whiteish">
                    <div className="black-body">
                        <div className="container-fluid black-body">
                            <h2 className="bold mt-5 mb-5 tan-font text-center">Your Full Breakdown</h2>
                            
                            <div className="black-body row">
                                <h4 className="col mt-auto bold text-center">Higher Danceability</h4>
                                <h4 className="col bold floating pinkish">24.54%</h4>
                            </div>

                            <div className="black-body row">
                                <h4 className="col mt-auto bold text-center">Higher Valence</h4>
                                <h4 className="col bold floating pinkish">6.56%</h4>
                            </div>

                            <div className="black-body row">
                                <h4 className="col mt-auto bold text-center">Lower Acousticness</h4>
                                <h4 className="col bold floating pinkish">15.06%</h4>
                            </div>

                            <div className="black-body row mb-5">
                                <h4 className="col mt-auto bold text-center">Higher Volume</h4>
                                <h4 className="col bold floating pinkish">15.06%</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AdditionalDisplay