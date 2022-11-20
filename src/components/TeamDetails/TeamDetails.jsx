import React from "react";
import "./TeamDetails.css";

const TeamDetails = (data) => {
  // console.log(data);

  return (
    <>
      <div className="container">
        <div className="middle-contaiiner">
          <div className="club">
            <div className="img-container">
              <img
                src={data.team.team.logo}
                alt="LOGO"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className="club-details">
              <h2>Club Name: <br />{data.team.team.name}</h2>
              <h2>Country: <br />{data.team.team.country}</h2>
              <h2>Founded: <br /> {data.team.team.founded}</h2>
            </div>
          </div>

          <div className="stadium-img">
            <img
              src={data.team.venue.image}
              alt="STADIUM"
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            />
          </div>

          <div className="stadium">
            <div className="stadium-details">
              <h2>Stadium Name: <br /> {data.team.venue.name}</h2>
              <h2>City: <br /> {data.team.venue.city}</h2>
              <h2>Address: <br /> {data.team.venue.address}</h2>
              <h2>Stadium Capacity: <br /> {data.team.venue.capacity}</h2>
              <h2>Surface: <br /> {data.team.venue.surface}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetails;
