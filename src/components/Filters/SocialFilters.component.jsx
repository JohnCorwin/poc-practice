import React from "react";

import "../../css/baseline/project.scss";
import "../../css/baseline/reset.scss";

const SocialFilters = () => {
  return (
    <>
      <section className="filters">
        <div className="dates">
          <div className="date">
            <label>From</label>
            <input type="date"></input>
          </div>
        </div>
        <div className="dates">
          <div className="date">
            <label>To</label>
            <input type="date"></input>
          </div>
        </div>
        <hr></hr>
        <label>Country</label>
        <select><option>China</option></select>
        <label>Search</label>
        <input type="text"></input>
        <label>Content Type</label>
        <div className="checkbox">
          <input type="checkbox"></input>
          <span>Text Only</span>
        </div>
        <div className="checkbox">
          <input type="checkbox"></input>
          <span>Photos</span>
        </div>
        <div className="checkbox">
          <input type="checkbox"></input>
          <span>Videos</span>
        </div>
        <label>Data Source</label>
        <div className="checkbox">
          <input type="checkbox"></input>
          <span>Twitter</span>
        </div>
        <div className="checkbox">
          <input type="checkbox"></input>
          <span>Instagram</span>
        </div>
        <div className="checkbox">
          <input type="checkbox"></input>
          <span>TikTok</span>
        </div>
        <div className="button save">Save</div>
      </section>
    </>
  );
}

export default SocialFilters;
