import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/">mood ring</Link>
            </div>
        </nav>
    )
};

export default Header;