import './Campaigns.css';
import React from "react";

const Campaigns = () => {
  return (
    <div className="content-div">
      <div className="content-div-box">
        <div className="campaigns-div">
          <div className="campaigns-div-header">
            <h2 className="campaigns-title">Campaigns</h2>
            <button className="create-new-campaign-button">Create New Campaign</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaigns;