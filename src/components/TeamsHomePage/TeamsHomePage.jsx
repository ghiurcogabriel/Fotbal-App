import React from "react";
import "./TeamsHomePage.css";
import RealMadrid from "./Teams/RealMadrid";
import club from "./Teams/clubTeams";

console.log(club[0].name);

const TeamsHomePage = () => {
  return (
    <div id="teams">
      <div className="teams-main-cotainer">
        <RealMadrid />
      </div>
    </div>
  );
};

export default TeamsHomePage;
