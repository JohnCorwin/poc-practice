import React from "react";

import tasks from "../../../assets/images/tasks.svg";

const CampaignsTile = () => {
  return (<>
    <div className="campaign">
      <div className="campaign-tile-grid">
        <div className="campaign-country">China</div>
      </div>
      <div className="campaign-tile-grid">
        <div className="campaign-openings">320 openings</div>
        <div className="campaign-applications">543 applications</div>
        <div className="campaign-filled">20 filled</div>
      </div>
    </div>
  </>);
}

export default CampaignsTile;