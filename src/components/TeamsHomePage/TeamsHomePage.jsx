import React from "react";
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./TeamsHomePage.css";
import Barca from "./Teams/Barca";
import RealMadrid from "./Teams/RealMadrid";

const TeamsHomePage = (data) => {
  return (
    <>
      <div className="container">
        <div className="team-container">
          <img className="logo" src="barca" alt="Barcelona" />
          <h1>Barcelona</h1>
          <div className="club-details">
            <h2>
              Club Name: <br />
              {data.team.team.name}
            </h2>
            <h2>
              Country: <br />
              {data.team.team.country}
            </h2>
            <h2>
              Founded: <br /> {data.team.team.founded}
            </h2>
          </div>
        </div>
      </div>
      <Barca />
      <RealMadrid />
    </>
  );
};

export default TeamsHomePage;
