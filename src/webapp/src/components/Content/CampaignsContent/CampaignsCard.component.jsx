import React from "react";

import CampaignsTile from "./CampaignsTile.component";

import campaigns from "../../../assets/images/campaigns.svg";

import "./campaigns.scss";

const CampaignsCard = () => {
  return (<>
    <div className="card">
      <div className="top">
        <h1 className="page-title">Campaigns</h1>
        <a className="button" href="/discover">Create New Campaign</a>
      </div>
      <div className="campaigns-grid">
        <CampaignsTile />
        <CampaignsTile />
        <CampaignsTile />
      </div>
      <img src={campaigns} alt="campaigns"></img>
    </div>
  </>);
}

export default CampaignsCard;