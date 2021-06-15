import './Connect.css';
import React from "react";
import Selector from "../Selector/Selector.component";

const Connect = () => {
  return (
    <div className="connect-div">
      <Selector />
      <div className="connect-div-content">
        <div className="connect-div-header">
          <h2 className="connect-title">Connect</h2>
          <span className="connect-subtitle">Connections for Chinese students during the Fall 2021 Hopkins Global Semester</span>
        </div>
        <div className="connect-div-container">
          <div className="connect-div-box">
            <button className="connect-request-info-session">Request an Info Session</button>
          </div>
          <div className="connect-div-box">
            <span className="connect-request-tracker">Days Since Application: 6</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;