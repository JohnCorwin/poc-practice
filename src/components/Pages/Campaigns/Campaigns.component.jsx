import React from "react";

import campaigns from "../../../assets/images/campaigns.svg";
import tasks from "../../../assets/images/tasks.svg";

import "../../../css/baseline/project.scss";
import "../../../css/baseline/reset.scss";

const Campaigns = () => {
  return (
    <>
      <div className="card">
        <div className="top">
          <h1>Campaigns</h1>
          <a className="button" href="/discover">Create New Campaign</a>
        </div>
        <img src={campaigns} alt="campaigns"></img>
      </div>
      <div className="card side">
        <img src={tasks} alt="tasks"></img>
      </div>
    </>
  );
}

export default Campaigns;