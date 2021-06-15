import './Library.css';
import React from "react";
import Selector from "../Selector/Selector.component";

const Library = () => {
  return (
    <div className="library-div">
      <Selector />
      <div className="library-div-content">
        <div className="library-div-header">
          <h2 className="library-title">Library</h2>
          <span className="library-subtitle">Content available to Chinese students for the Hopkins Global Program in Fall 2021.</span>
        </div>
        <div className="library-div-box">
          <button className="library-request-info-session">File Upload to Widen</button>
        </div>
      </div>
    </div>
  );
}

export default Library;