import './Criteria.css';
import React from "react";
import Selector from "../Selector/Selector.component";
import Requirements from "../Requirements/Requirements.component";

const Criteria = () => {
  return (
    <div className="criteria-div">
      <Selector />
      <div className="criteria-content">
        <Requirements />
      </div>
    </div>
  );
}

export default Criteria;