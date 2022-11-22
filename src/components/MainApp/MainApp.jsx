import React, { useEffect, useState } from "react";
import { getTeamsInfo } from "../Api/Api";
import TeamDetails from "../TeamDetails/TeamDetails";
import Search from "../Search/Search";

function MainApp() {
  const [teamName, setTeamName] = useState(null);
  const [teamInfo, setTeamInfo] = useState(null);

  useEffect(() => {
    console.log(teamName);

    getTeamsInfo(teamName).then((data) => {
      console.log(data);
      if (data.response[0]) {
        setTeamInfo(data.response[0]);
      }
    });
  }, [teamName]);

  return (
    <>
      <Search setTeamName={setTeamName} />
      {teamInfo ? (
        <TeamDetails team={teamInfo} />
      ) : (
        <h1>Search your favorite football team!</h1>
      )}
    </>
  );
}

export default MainApp;
