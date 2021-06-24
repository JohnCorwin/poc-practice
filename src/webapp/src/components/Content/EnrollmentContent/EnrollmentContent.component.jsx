import React, { useState } from "react";

const EnrollmentContent = () => {
  const [availableSeats, setAvailableSeats] = useState(2500);
  const [costOfAttendance, setCostOfAttendance] = useState(30000);
  const [scholarshipRecommendation, setScholarshipRecommendation] = useState(3000);
  const [chinaLer, setChinaLer] = useState(80);
  const [satMin, setSatMin] = useState(600);
  const [satMax, setSatMax] = useState(1200);
  const [toeflMin, setToeflMin] = useState(40);
  const [toeflMax, setToeflMax] = useState(80);
  const [ieltsMin, setIeltsMin] = useState(3);
  const [ieltsMax, setIeltsMax] = useState(6);
  const [recommendationLetters, setRecommendationLetters] = useState(true);

  const handleLeftValue = (leftValue, rightValue, maxValue, fun) => {
    var intValue = parseInt(leftValue);
    var newLeftValue = (leftValue >= rightValue) ? parseInt(rightValue) - 1 : intValue;
    fun(newLeftValue);
  }

  const handleRightValue = (rightValue, leftValue, maxValue, fun) => {
    var intValue = parseInt(rightValue);
    var newRightValue = (rightValue <= leftValue) ? parseInt(leftValue) + 1 : intValue;
    fun(newRightValue);
  }

  const getStyles = (value, maxValue) => {
    var remainingPercent = (value / maxValue) * 100;
    var usedPercent = 100 - remainingPercent;

    return {
      right: usedPercent+"%",
      left: "0%"
    }
  }

  const getMultiStyles = (leftValue, rightValue, maxValue) => {
    var leftPercent = (leftValue / maxValue) * 100;
    var rightPercent = 100 - ((rightValue / maxValue) * 100);

    return {
      right: rightPercent+"%",
      left: leftPercent+"%",
    }
  }

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
                <input className="range" type="range" min="0" max="5000" value={availableSeats} onChange={e => setAvailableSeats(e.target.value)}></input>
                <span className="bar" style={getStyles(availableSeats, 5000)}></span>
              </span>
              <input type="text" value={availableSeats}></input>
            </div>
            <h5>Cost of Atendance</h5>
            <div className="slider">
              <span className="multirange one">
                <input className="range" type="range" min="0" max="0" value="0"></input>
                <input className="range" type="range" min="0" max="60000" value={costOfAttendance} onChange={e => setCostOfAttendance(e.target.value)}></input>
                <span className="bar" style={getStyles(costOfAttendance, 60000)}></span>
              </span>
              <div className="dollar">
                <span className="sign">$</span>
                <input type="text" value={costOfAttendance}></input>
              </div>
            </div>
            <h5>Scholarship Recommendation</h5>
            <div className="slider">
              <span className="multirange one">
                <input className="range" type="range" min="0" max="0" value="0"></input>
                <input className="range" type="range" min="0" max="10000" value={scholarshipRecommendation} onChange={e => setScholarshipRecommendation(e.target.value)}></input>
                <span className="bar" style={getStyles(scholarshipRecommendation, 10000)}></span>
              </span>
              <div className="dollar">
                <span className="sign">$</span>
                <input type="text" value={scholarshipRecommendation}></input>
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
                  <input className="range" type="range" min="0" max="100" value={chinaLer} onChange={e => setChinaLer(e.target.value)}></input>
                  <span className="bar" style={getStyles(chinaLer, 100)}></span>
                </span>
                <div className="dollar">
                  <input className="ler-value" type="text" value={chinaLer}></input>
                  <span className="percent">%</span>
                </div>
              </div>
            </h5>
            <h5>SAT Score</h5>
            <span className="multirange multi">
              <input className="range" type="range" min="0" max="1600" value={satMin} onChange={e => handleLeftValue(e.target.value, satMax, 1600, setSatMin)}></input>
              <input className="range" type="range" min="0" max="1600" value={satMax} onChange={e => handleRightValue(e.target.value, satMin, 1600, setSatMax)}></input>
              <span className="bar" style={getMultiStyles(satMin, satMax, 1600)}></span>
            </span>
            <div className="values">
              <input type="text" value={satMin}></input>
              <input type="text" value={satMax}></input>
              <div className="max">1600</div>
            </div>
            <h5>Toefl Score</h5>
            <span className="multirange multi">
              <input className="range" type="range" min="0" max="120" value={toeflMin} onChange={e => handleLeftValue(e.target.value, toeflMax, 120, setToeflMin)}></input>
              <input className="range" type="range" min="0" max="120" value={toeflMax} onChange={e => handleRightValue(e.target.value, toeflMin, 120, setToeflMax)}></input>
              <span className="bar" style={getMultiStyles(toeflMin, toeflMax, 120)}></span>
            </span>
            <div className="values">
              <input type="text" value={toeflMin}></input>
              <input type="text" value={toeflMax}></input>
              <div className="max">120</div>
            </div>
            <h5>IELTS Score</h5>
            <span className="multirange multi">
              <input className="range" type="range" min="0" max="9" value={ieltsMin} onChange={e => handleLeftValue(e.target.value, ieltsMax, 9, setIeltsMin)}></input>
              <input className="range" type="range" min="0" max="9" value={ieltsMax} onChange={e => handleRightValue(e.target.value, ieltsMin, 9, setIeltsMax)}></input>
              <span className="bar" style={getMultiStyles(ieltsMin, ieltsMax, 9)}></span>
            </span>
            <div className="values">
              <input type="text" value={ieltsMin}></input>
              <input type="text" value={ieltsMax}></input>
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