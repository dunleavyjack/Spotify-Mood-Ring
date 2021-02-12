import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
        <div>
            <Button color="inherit" component={Link} to="/">mood ring</Button>
        </div> 
    )
};

export default Header;