import React from "react";
import club from "./clubTeams";
import "./Teams.css";

const Barca = () => {
  console.log(club[0].logo);

  return (
    <div className="teams-container">
      <div className="teams-details">
        <div className="teams-header">
          <img className="logo" src={club[0].logo} alt="Barcelona" />
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
    </div>
  );
};

export default Barca;
