import './Selector.css';
import React from "react";

const Selector = () => {

  return (
    <div className="selector-div">
      <div className="selector-options">
        <form className="selector-options-form">
          <label htmlFor="semester-input">Semester</label>
          <input type="text" id="semester-input"></input>
          <label htmlFor="country-input">Country</label>
          <input type="text" id="country-input"></input>
          <hr></hr>
          <label htmlFor="program-input">Program</label>
          <input type="text" id="program-input"></input>
          { window.location.href.includes('library') &&
            <>
              <label htmlFor="content-type-input">Content Type</label>
              <input type="text" id="content-type-input"></input>
            </>
          }
          <input type="submit" value="Save"></input>
        </form>
      </div>
    </div>
  );
}

export default Selector;