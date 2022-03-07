import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>

            <Link to="/edit-menu">Edit Menu</Link>
        </div>
    );
}

export default Header;
