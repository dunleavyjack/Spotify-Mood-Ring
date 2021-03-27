import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand nav-title brand-text" to="/"><span className="pinkish">mood ring &#57406;</span></Link>
                <div className="navbar-nav ml-auto">
                    <Link className="navbar-brand nav-title brand-text" to="/about">about</Link>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;