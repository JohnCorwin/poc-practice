import React, { useState } from "react";
import Slider from "../../Common/Slider/Slider.component";
import MultiRange from "../../Common/MultiRange/MultiRange.component";

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

  const getMultiStyles = (leftValue, rightValue, maxValue) => {
    var leftPercent = (leftValue / maxValue) * 100;

    return {
      background: "linear-gradient(90deg, red "+leftPercent+"%, #01BB15 "+leftPercent+"%)"
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
          <Slider min={0} max={5000} value={availableSeats} onChange={setAvailableSeats} />
          <h5>Cost of Attendance</h5>
          <Slider min={0} max={60000} value={costOfAttendance} onChange={setCostOfAttendance} sign={"dollar"} />
          <h5>Scholarship Recommendation</h5>
          <Slider min={0} max={10000} value={scholarshipRecommendation} onChange={setScholarshipRecommendation} sign={"dollar"} />
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
          <h5>China LER</h5>
          <Slider min={0} max={100} value={chinaLer} onChange={setChinaLer} sign={"percent"} />
          <h5>SAT Score</h5>
          <MultiRange min={0} max={1600} leftValue={satMin} rightValue={satMax} leftFunction={setSatMin} rightFunction={setSatMax} />
          <h5>Toefl Score</h5>
          <MultiRange min={0} max={120} leftValue={toeflMin} rightValue={toeflMax} leftFunction={setToeflMin} rightFunction={setToeflMax} />
          <h5>IELTS Score</h5>
          <MultiRange min={0} max={9} leftValue={ieltsMin} rightValue={ieltsMax} leftFunction={setIeltsMin} rightFunction={setIeltsMax} />
          <h5>ACADEMIC RECOMMENDATION LETTERS?</h5>
            <div className="yesno">
              <span className="no">No</span>
              <div className="toggle"></div>
              <span className="yes">Yes</span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default EnrollmentContent;