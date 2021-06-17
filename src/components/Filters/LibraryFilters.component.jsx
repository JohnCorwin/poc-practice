import React from "react";

import "../../css/baseline/project.scss";
import "../../css/baseline/reset.scss";

const EnrollmentFilters = () => {
  return (
    <>
      <section className="filters">
        <label>Semester</label>
        <select>
          <option></option>
          <option>Summer 2021</option>
          <option>Fall 2021</option>
          <option>Spring 2022</option>
          <option>Summer 2022</option>
          <option>Fall 2022</option>
        </select>
        <label>Country</label>
        <select>
          <option>China</option>
        </select>
        <hr></hr>
        <label>Program</label>
        <select>
          <option>Hopkins Global</option>
        </select>
        <label>Content Type</label>
        <div className="checkbox">
          <input type="checkbox"></input>
          <span>Brochures</span>
        </div>
        <div className="checkbox">
          <input type="checkbox"></input>
          <span>Forms</span>
        </div>
        <div className="checkbox">
          <input type="checkbox"></input>
          <span>Video</span>
        </div>
        <div className="button save">Save</div>
      </section>
    </>
  );
}

export default EnrollmentFilters;
