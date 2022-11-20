import React from 'react';
// import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './TeamsHomePage.css';
import Barca from'./Teams/Barca';
import RealMadrid from'./Teams/RealMadrid';


const TeamsHomePage = () => {
  return (
    <>
      <Router>
          <Route exact path='./Teams/Barca' component={Barca}/>
          <Route exact path='./Teams/RealMadrid' component={RealMadrid}/>
          {/* <Redirect to='/' /> */}
      </Router >
    </>
  );
}

export default TeamsHomePage;