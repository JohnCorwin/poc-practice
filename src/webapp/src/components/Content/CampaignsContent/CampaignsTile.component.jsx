import React from "react";

import tasks from "../../../assets/images/tasks.svg";

const CampaignsTile = (props) => {

  return (<>
    <div className="campaign">
      <div className="campaign-tile-grid">
        <div className="campaign-country">China</div>
      </div>
      <div className="campaign-tile-grid">
        <div className="campaign-openings">{ props.campaign.openings ?? 0 } openings</div>
        <div className="campaign-applications">{ props.campaign.applications ?? 0 } applications</div>
        <div className="campaign-filled">{ props.campaign.filled ?? 0 } filled</div>
      </div>
    </div>
  </>);
}

export default CampaignsTile;