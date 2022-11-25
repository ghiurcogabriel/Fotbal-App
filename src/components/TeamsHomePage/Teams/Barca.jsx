import React from "react";
import club from "./clubTeams";
import "./Teams.css";

const Barca = () => {
  // console.log(club[0].logo);

  return (
    <div className="teams-container">
      <div className="teams-details">
        <div className="teams-header">
          <img
            className="logo"
            src={club[0].logo}
            alt="Barcelona"
            style={{ width: "170px" }}
          />
          <h1>{club[0].name}</h1>
        </div>
        <div className="teams-content">
          <div className="teams-content-1">
            <p>Country: {club[0].country}</p>
            <p>Founded: {club[0].founded}</p>
            <p>Stadium: {club[0].stadiumName}</p>
          </div>
          <div className="teams-content-2">
            <p>City: {club[0].city}</p>
            <p>President: {club[0].president}</p>
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
