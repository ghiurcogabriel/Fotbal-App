import React from 'react';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './Navbar.css';
// import TeamsHomePage from '../TeamsHomePage/TeamsHomePage';

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