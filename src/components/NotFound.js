import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const NotFound = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="tan d-flex justify-content-center align-items-center text-center content-body">
                <div>
                    <h2 className="bold mt-3">Hmm... looks like something went wrong. <span className="pinkish tan">:(</span></h2>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NotFound;