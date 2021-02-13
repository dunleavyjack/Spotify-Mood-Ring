import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const NotFound = () => {
    return (
        <React.Fragment>
            <Navbar />
            Page not found. Go back home <Link to="/yourmood">Home Page</Link>
        </React.Fragment>
    )
}

export default NotFound;