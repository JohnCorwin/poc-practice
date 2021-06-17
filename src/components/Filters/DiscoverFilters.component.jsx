import React from "react";

import "../../css/baseline/project.scss";
import "../../css/baseline/reset.scss";

const DiscoverFilters = () => {
  return (
    <>
      <section className="filters">
        <label>Country</label>
        <select js-hook="country-select">
          <option></option>
          <option>Brazil</option>
          <option>China</option>
          <option>Japan</option>
          <option>India</option>
          <option>Iran</option>
          <option>Mexico</option>
          <option>Nepal</option>
          <option>Nigeria</option>
          <option>Saudi Arabia</option>
          <option>South Korea</option>
          <option>Taiwan</option>
          <option>Vietnam</option>
        </select>
        <label>Level</label>
        <div className="checkbox">
          <input type="checkbox" js-hook="checkbox1"></input>
          <span>UG</span>
        </div>
        <div className="checkbox">
          <input type="checkbox" js-hook="checkbox2"></input>
          <span>PG</span>
        </div>
        <div className="checkbox">
          <input type="checkbox"></input>
          <span>Other</span>
        </div>
        <label>Education Interest</label>
        <div className="checkbox">
          <input type="checkbox" js-hook="checkbox3"></input>
          <span>Engineering</span>
        </div>
        <div className="checkbox">
          <input type="checkbox" js-hook="checkbox4"></input>
          <span>Education</span>
        </div>
        <div className="checkbox">
          <input type="checkbox" js-hook="checkbox5"></input>
          <span>Science</span>
        </div>
        <div className="checkbox">
          <input type="checkbox" js-hook="checkbox6"></input>
          <span>Communications</span>
        </div>
        <div className="checkbox">
          <input type="checkbox" js-hook="checkbox7"></input>
          <span>Political Science</span>
        </div>
        <label>Affluence Score</label>
        <div className="checkbox">
          <input type="checkbox" js-hook="checkbox8"></input>
          <span>8-10</span>
        </div>
        <div className="checkbox">
          <input type="checkbox" js-hook="checkbox9"></input>
          <span>5-7</span>
        </div>
        <div className="checkbox">
          <input type="checkbox" js-hook="checkbox10"></input>
          <span>1-4</span>
        </div>
        <label>Brand Bias</label>
        <div className="checkbox">
          <input type="checkbox"></input>
          <span>Elite</span>
        </div>
        <div className="checkbox">
          <input type="checkbox"></input>
          <span>Value</span>
        </div>
        <div className="checkbox">
          <input type="checkbox"></input>
          <span>Discount</span>
        </div>
        <div className="button save">Save</div></section>
    </>
  );
}

export default DiscoverFilters;
