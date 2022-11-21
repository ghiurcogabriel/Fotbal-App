import React from "react";
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./TeamsHomePage.css";
import Barca from "./Teams/Barca";
import RealMadrid from "./Teams/RealMadrid";

const TeamsHomePage = () => {
  return (
    <>
      <Barca />
      <RealMadrid />
    </>
  );
};

export default TeamsHomePage;
