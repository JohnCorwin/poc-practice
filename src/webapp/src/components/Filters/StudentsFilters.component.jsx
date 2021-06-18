import React from "react";

import "../../css/baseline/project.scss";
import "../../css/baseline/reset.scss";

const StudentsFilters = () => {
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
        <div className="button">Export to CSV</div>
      </section>
    </>
  );
}

export default StudentsFilters;
