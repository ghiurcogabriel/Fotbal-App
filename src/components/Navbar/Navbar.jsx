import React from "react";
import {Link } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import "./Navbar.css";
import TeamsHomePage from "../TeamsHomePage/TeamsHomePage";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="buttons">
          <li className="item"><Link to='/'>Home</Link></li>
          <li className="item"><Link to='/TeamsHomePage'>Teams</Link></li>
          <li className="item">Nationals</li>
          <li className="item">Stadiums</li>
          <li className="item">About</li>
        </ul>
      </div>
      <Routes>
        <Route path="/TeamsHomePage" element={<TeamsHomePage />} />
      </Routes>
    </>
  );
};

export default Navbar;
