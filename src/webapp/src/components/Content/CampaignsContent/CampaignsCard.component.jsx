import React from "react";

import campaigns from "../../../assets/images/campaigns.svg";

const CampaignsCard = () => {
  return (<>
    <div className="card">
      <div className="top">
        <h1 className="page-title">Campaigns</h1>
        <a className="button" href="/discover">Create New Campaign</a>
      </div>
      <img src={campaigns} alt="campaigns"></img>
    </div>
  </>);
}

export default CampaignsCard;