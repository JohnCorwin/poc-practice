import './Selector.css';
import React from "react";

const Selector = () => {
  return (
    <div className="selector-div">
      <div className="selector-options">
        <form className="selector-options-form">
          <label for="semester-input">Semester</label>
          <input type="text" id="semester-input"></input>
          <label for="country-input">Country</label>
          <input type="text" id="country-input"></input>
          <hr></hr>
          <label for="program-input">Program</label>
          <input type="text" id="program-input"></input>
          { window.location.href.includes('library') &&
            <>
              <label for="content-type-input">Content Type</label>
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