import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFound = () => {
    return (
        <React.Fragment>
            <Header />
            Page not found. Go back home <Link to="/dashboard">Home Page</Link>
        </React.Fragment>
    )
}

export default NotFound;