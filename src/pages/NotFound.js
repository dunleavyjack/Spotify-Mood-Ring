import React from "react";
import Navbar from "../components/Navbar";

const NotFound = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="tan d-flex justify-content-center align-items-center text-center content-body">
                <div className="container">
                    <h3 className="mt-3">
                        Sorry, it looks like something went wrong.
                    </h3>
                    <h4>
                        <span className="pinkish tan">:(</span>
                    </h4>
                    <h4 className="mt-3">
                        There might be a network issue, or the Spotify server
                        might be too busy. Please try again in a moment.
                    </h4>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NotFound;
