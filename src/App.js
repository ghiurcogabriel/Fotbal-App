import React, { useEffect, useState } from "react";
import './App.css';
import { getTeamsInfo } from './components/Api/Api';
import Navbar from "./components/Navbar/Navbar";
import TeamDetails from "./components/TeamDetails/TeamDetails";


function App() {

const [teamInfo, setTeamInfo] = useState(null);


useEffect(() => {
  console.log(teamInfo); 
  
    getTeamsInfo()
      .then((data) => {
        console.log(data); 
        if(data.response[0]){
          setTeamInfo(data.response[0]);
        }
      })
}, []);




  return (
    <div className="App">
      <Navbar />
      {teamInfo ? <TeamDetails team={teamInfo}/> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
