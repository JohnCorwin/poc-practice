import React from "react";

const EnrollmentContent = () => {
  return (
    <div className="stuff">
      <h1 className="page-title">Enrollment Criteria</h1>
      <p className="page-subtitle">Enrollment Criteria available for East China students during the Fall 2021 Hopkins Global Semester.</p>
      <div className="cards">
        <div className="card">
        <h2>Enrollment Requirements</h2>
        <div className="form">
          <h5>Enrollment Window</h5>
          <div className="inputs">
            <div className="input dates">
              <div className="date">
                <label>From</label>
                <input type="date"></input>
              </div>
              <div className="date">
                <label>To</label>
                <input type="date"></input>
              </div>
            </div>
            <div className="input">
              <label>Threshold</label>
              <select>
                <option></option>
                <option>1 day</option>
                <option>5 days</option>
                <option>1 week</option>
                <option>10 days</option>
                <option>14 days</option>
                <option>21 days</option>
                <option>30 days</option>
              </select>
            </div>
          </div>
          <h5>Decision Style</h5>
          <div className="inputs">
            <div className="input">
              <label>Type</label>
              <select>
                <option>Rolling</option>
              </select>
            </div>
            <div className="input">
              <label>Threshold</label>
              <select>
                <option></option>
                <option>1 day</option>
                <option>5 days</option>
                <option>1 week</option>
                <option>10 days</option>
                <option>14 days</option>
                <option>21 days</option>
                <option>30 days</option>
              </select>
            </div>
          </div>
          <h5>Available Seats</h5>
            <div className="slider">
              <span className="multirange one">
                <input className="range" type="range" min="0" max="0" value="0"></input>
                <input className="range" type="range" min="0" max="5000" value="2500" js-hook="seats"></input>
                <span className="bar"></span>
              </span>
              <input type="text" value="2500" js-hook="seats-value"></input>
            </div>
            <h5>Cost of Atendance</h5>
            <div className="slider">
              <span className="multirange one">
                <input className="range" type="range" min="0" max="0" value="0"></input>
                <input className="range" type="range" min="0" max="60000" value="30000" js-hook="cost"></input>
                <span className="bar"></span>
              </span>
              <div className="dollar">
                <span className="sign">$</span>
                <input type="text" value="30,000" js-hook="cost-value"></input>
              </div>
            </div>
            <h5>Scholarship Recommendation</h5>
            <div className="slider">
              <span className="multirange one">
                <input className="range" type="range" min="0" max="0" value="0"></input>
                <input className="range" type="range" min="0" max="10000" value="3000" js-hook="scholarship"></input>
                <span className="bar"></span>
              </span>
              <div className="dollar">
                <span className="sign">$</span>
                <input type="text" value="3,000" js-hook="scholarship-value"></input>
              </div>
            </div>
            <h5>Payment Deadline</h5>
              <div className="inputs">
                <div className="input dates">
                  <div className="date">
                    <label>From</label>
                    <input type="date"></input>
                  </div>
                  <div className="date">
                    <label>To</label>
                    <input type="date"></input>
                  </div>
                </div>
                <div className="input">
                  <label>Threshold</label>
                  <select>
                    <option></option>
                    <option>1 day</option>
                    <option>5 days</option>
                    <option>1 week</option>
                    <option>10 days</option>
                    <option>14 days</option>
                    <option>21 days</option>
                    <option>30 days</option>
                  </select>
                </div>
              </div>
              <h5>Designated Representative</h5>
              <input className="email" type="text" value="john.doe@uni.edu"></input>
              <h5>Enable Chat?</h5>
              <div className="yesno">
                <span className="no">No</span>
                <div className="toggle"></div>
                <span className="yes">Yes</span>
              </div>
            </div>
          </div>
          <div className="card">
            <h5>Transcript OCR enabled?
              <div className="yesno">
                <span className="no">No</span>
                <div className="toggle"></div>
                <span className="yes">Yes</span>
              </div>
            </h5>
            <div className="checkbox">
              <input type="checkbox"></input>
              <span>ACT</span>
            </div>
            <h5>China LER
              <div className="slider">
                <span className="multirange one">
                  <input className="range" type="range" min="0" max="0" value="0"></input>
                  <input className="range" type="range" min="0" max="100" value="80" js-hook="ler"></input>
                  <span className="bar"></span>
                </span>
                <div className="dollar">
                  <input className="ler-value" type="text" value="80" js-hook="ler-value"></input>
                  <span className="percent">%</span>
                </div>
              </div>
            </h5>
            <h5>SAT Score</h5>
            <span className="multirange multi">
              <input className="range" type="range" min="0" max="1600" value="600" js-hook="satmin"></input>
              <input className="range" type="range" min="0" max="1600" value="1200" js-hook="satmax"></input>
              <span className="bar"></span>
            </span>
            <div className="values">
              <input type="text" value="600" js-hook="satmin-value"></input>
              <input type="text" value="1200" js-hook="satmax-value"></input>
              <div className="max">1600</div>
            </div>
            <h5>Toefl Score</h5>
            <span className="multirange multi">
              <input className="range" type="range" min="0" max="120" value="40" js-hook="toeflmin"></input>
              <input className="range" type="range" min="0" max="120" value="80" js-hook="toeflmax"></input>
              <span className="bar"></span>
            </span>
            <div className="values">
              <input type="text" value="40" js-hook="toeflmin-value"></input>
              <input type="text" value="80" js-hook="toeflmax-value"></input>
              <div className="max">120</div>
            </div>
            <h5>IELTS Score</h5>
            <span className="multirange multi">
              <input className="range" type="range" min="0" max="9" value="3" js-hook="ieltsmin"></input>
              <input className="range" type="range" min="0" max="9" value="6" js-hook="ieltsmax"></input>
              <span className="bar"></span>
            </span>
            <div className="values">
              <input type="text" value="3" js-hook="ieltsmin-value"></input>
              <input type="text" value="9" js-hook="ieltsmax-value"></input>
              <div className="max">9</div>
            </div>
            <h5>ACADEMIC RECOMMENDATION LETTERS?
              <div className="yesno">
                <span className="no">No</span>
                <div className="toggle"></div>
                <span className="yes">Yes</span>
              </div>
            </h5>
          </div>
        </div>
      </div>
  );
}

export default EnrollmentContent;