import React, { useEffect, useState } from "react";
import { getTeamsInfo } from "../Api/Api";
import TeamDetails from "../TeamDetails/TeamDetails";
import Search from "../Search/Search";

function MainApp() {
  const [teamName, setTeamName] = useState(null);
  const [teamInfo, setTeamInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    console.log(teamName);

    getTeamsInfo(teamName).then((data) => {
      console.log(data);
      if (data.response[0]) {
        setTeamInfo(data.response[0]);
        setIsLoading(false);
      }
    });
  }, [teamName]);

  return (
    <>
      <Search setTeamName={setTeamName} />
      {teamInfo ? (
        <TeamDetails team={teamInfo} isLoading={isLoading} />
      ) : (
        <h1>Search your favorite football team!</h1>
      )}
    </>
  );
}

export default MainApp;
