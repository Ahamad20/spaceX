import React, { Component } from 'react';
import './MissionDetails.scss';

const MissionDetails =({details})=> {
    
        return (
          <>
            <div className="d-flex flex-wrap missionDetails">
              {details.length > 0 &&
                details.map((d) => {
                  return (
                    <div className="card cardDetails">
                      <img
                        class="card-img-top"
                        src={`${d.links.mission_patch}`}
                        alt=""
                      />
                      <div class="card-body">
                      <h6>{d.mission_name}<span>#{d.flight_number}</span></h6>
                      <h6>Mission Ids:{d.mission_id}</h6>
                      <h6>Launch Year:{d.launch_year}</h6>
                      <h6>Successful Launch:{d.launch_success}</h6>
                      <h6>Successful Landing:</h6>
                      </div>
                    </div>
                  );
                })}
              {details.length === 0 ? <div>no resutls</div> : null}
            </div>
          </>
        );
    
}

export default MissionDetails