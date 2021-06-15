import './Students.css';
import React from "react";
import Selector from "../Selector/Selector.component";

const Students = () => {
  return (
    <div className="students-div">
      <Selector />
      <div className="students-div-box">
        <h2 className="students-title">Applicant Roster</h2>
        <p className="students-subtitle">East China students enrolled in the Hopkins Global program for Fall 2021</p>
        <div className="students-div">
          <div className="students-div-header">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;