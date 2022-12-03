import React from "react";
import club from "./clubTeams";
import "./Teams.css";

const RealMadrid = () => {
  const teams = club;

  return (
    <>
      {club?.map((team, i) => {
        return (
          <div className="teams-container">
            <div index={i} className="teams-details">
              <div className="teams-header">
                <img className="logo" src={team.logo} alt="Barcelona" />
                <h1>{team.name}</h1>
              </div>
              <div className="teams-content">
                <div className="teams-content-1">
                  <p>Country: {team.country}</p>
                  <p>Founded:{team.founded}</p>
                  <p>Stadium: {team.stadiumName}</p>
                </div>
                <div className="teams-content-2">
                  <p>City: {team.city}</p>
                  <p>President: {team.president}</p>
                </div>
              </div>
              <div>
                <button className="see-more">See More Details</button>
              </div>
              <div className="club-details"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RealMadrid;
