import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { fetchCampaigns, updateCampaigns } from "../../../actions/campaignsActions";

import CampaignsTile from "./CampaignsTile.component";

import campaignsLogo from "../../../assets/images/campaigns.svg";

import "./campaigns.scss";

const CampaignsCard = () => {
  const campaigns = useSelector(state => state.campaigns.campaigns);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampaigns())
  }, [])

  return (<>
    <div className="card">
      <div className="top">
        <h1 className="page-title">Campaigns</h1>
        <a className="button" href="/discover">Create New Campaign</a>
      </div>
      <div className="campaigns-grid">
        { campaigns.map((campaign, i) => {
          return <CampaignsTile campaign={campaign} key={i} />
        })}
      </div>
      <img src={campaignsLogo} alt="campaigns"></img>
    </div>
  </>);
}

export default CampaignsCard;