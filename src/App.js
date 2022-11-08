import React, { useEffect, useState } from "react";
import './App.css';
import { getTeamsInfo } from './components/Api/Api';
import Navbar from "./components/Navbar/Navbar";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import Search from "./components/Search/Search";


function App() {

  const [teamName, setTeamName] = useState(null);
const [teamInfo, setTeamInfo] = useState(null);


useEffect(() => {
  console.log(teamName); 
  
    getTeamsInfo(teamName)
      .then((data) => {
        console.log(data); 
        if(data.response[0]){
          setTeamInfo(data.response[0]);
        }
      })
}, [teamName]);




  return (
    <div className="App">
      <Navbar />
      <Search setTeamName={setTeamName}/>
      {teamInfo ? <TeamDetails team={teamInfo}/> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
