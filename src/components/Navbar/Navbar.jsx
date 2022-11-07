import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='buttons'>
                <li className='item'>Home</li>
                <li className='item'>Teams</li>
                <li className='item'>Nationals</li>
                <li className='item'>Stadiums</li>
                <li className='item'>About</li>
            </ul>
        </div>
    );
};

export default Navbar;