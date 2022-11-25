import React from "react";
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import BarcaLogo from "../../images/BarcaLogo.png";
import "./TeamsHomePage.css";
import Barca from "./Teams/Barca";
import RealMadrid from "./Teams/RealMadrid";
import club from "./Teams/clubTeams";

console.log(club[0].name);

const TeamsHomePage = () => {
  const { name, country, city } = club;
  console.log(name);
  return (
    <div id="teams">
      <div className="teams-main-cotainer">
        {/* <div className="teams-container">
          <div className="teams-details">
            <div className="teams-header">
              <img className="logo" src={BarcaLogo} alt="Barcelona" />
              <h1>Barcelona</h1>
            </div>
            <div className="teams-content">
              <div className="teams-content-1">
                <p>Country: Spain</p>
                <p>Founded: 1899</p>
                <p>Stadium: Sporify Camp Nou</p>
              </div>
              <div className="teams-content-2">
                <p>City: Barcelona</p>
                <p>President: Juan Laporta</p>
              </div>
            </div>
            <div>
              <button className="see-more">See More Details</button>
            </div>
            <div className="club-details"></div>
          </div>
        </div> */}
        {/* <div className="teams-container">
          <div className="teams-details">
            <div className="teams-header">
              <img className="logo" src={BarcaLogo} alt="Barcelona" />
              <h1>Barcelona</h1>
            </div>
            <div className="teams-content">
              <div className="teams-content-1">
                <p>Country: Spain</p>
                <p>Founded: 1899</p>
                <p>Stadium: Sporify Camp Nou</p>
              </div>
              <div className="teams-content-2">
                <p>City: Barcelona</p>
                <p>President: Juan Laporta</p>
              </div>
            </div>
            <div>
              <button className="see-more">See More Details</button>
            </div>
            <div className="club-details"></div>
          </div>
        </div> */}
        {/* <div> */}
        {/* <Barca /> */}
        {/* </div> */}
        {/* <div> */}
        <RealMadrid />
        {/* </div> */}
      </div>
    </div>
  );
};

export default TeamsHomePage;
