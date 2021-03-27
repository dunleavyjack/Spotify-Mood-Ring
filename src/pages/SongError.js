import React from "react";
import Navbar from "../components/Navbar";

const NotFound = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="tan d-flex justify-content-center align-items-center text-center content-body">
                <div className="container">
                    <h3 className="mt-3">
                        Sorry, there was an error loading your songs.
                    </h3>
                    <h4>
                        <span className="pinkish tan">:(</span>
                    </h4>
                    <h4 className="mt-3">
                        You might be using Spotify with a private session, or
                        you might not have listened to enough songs recently for
                        the program to work.
                    </h4>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NotFound;
