import React from 'react'

const Loading = ({ text }) => {
    return (
        <div className="tan d-flex justify-content-center align-items-center text-center content-body">
            <div>
                <div className="spinner-border pinkish" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                {/* <h2 classname="bold">Hey, Spotify<span className="pinkish tan">...</span></h2> */}
                <h2 className="bold mt-3 tan about-header">{text}</h2>
            </div>
        </div>
    )
}

export default Loading;


