import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import Slider from "../../Common/Slider/Slider.component";
import MultiRange from "../../Common/MultiRange/MultiRange.component";
import {
  updateAvailableSeats,
  updateCostOfAttendance,
  updateScholarshipRecommendation,
  updateChinaLer,
  updateSatMin,
  updateSatMax,
  updateToeflMin,
  updateToeflMax,
  updateIeltsMin,
  updateIeltsMax
} from '../../../actions/criteriaActions.js'

const EnrollmentContent = () => {
  const availableSeats = useSelector(state => state.criteria.availableSeats);
  const costOfAttendance = useSelector(state => state.criteria.costOfAttendance);
  const scholarshipRecommendation = useSelector(state => state.criteria.scholarshipRecommendation);
  const chinaLer = useSelector(state => state.criteria.chinaLer);
  const satMin = useSelector(state => state.criteria.satMin);
  const satMax = useSelector(state => state.criteria.satMax);
  const toeflMin = useSelector(state => state.criteria.toeflMin);
  const toeflMax = useSelector(state => state.criteria.toeflMax);
  const ieltsMin = useSelector(state => state.criteria.ieltsMin);
  const ieltsMax = useSelector(state => state.criteria.ieltsMax);

  const dispatch = useDispatch();

  const handleAvailableSeats = (value) => {
    dispatch(updateAvailableSeats(value));
  }

  const handleCostOfAttendance = (value) => {
    dispatch(updateCostOfAttendance(value));
  }

  const handleScholarshipRecommendation = (value) => {
    dispatch(updateScholarshipRecommendation(value));
  }

  const handleChinaLer = (value) => {
    dispatch(updateChinaLer(value));
  }

  const handleSatMin = (value) => {
    dispatch(updateSatMin(value));
  }

  const handleSatMax = (value) => {
    dispatch(updateSatMax(value));
  }

  const handleToeflMin = (value) => {
    dispatch(updateToeflMin(value));
  }

  const handleToeflMax = (value) => {
    dispatch(updateToeflMax(value));
  }

  const handleIeltsMin = (value) => {
    dispatch(updateIeltsMin(value));
  }

  const handleIeltsMax = (value) => {
    dispatch(updateIeltsMax(value));
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
          <Slider min={0} max={5000} value={availableSeats} onChange={handleAvailableSeats} />
          <h5>Cost of Attendance</h5>
          <Slider min={0} max={60000} value={costOfAttendance} onChange={handleCostOfAttendance} sign={"dollar"} />
          <h5>Scholarship Recommendation</h5>
          <Slider min={0} max={10000} value={scholarshipRecommendation} onChange={handleScholarshipRecommendation} sign={"dollar"} />
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
          <Slider min={0} max={100} value={chinaLer} onChange={handleChinaLer} sign={"percent"} />
          <h5>SAT Score</h5>
          <MultiRange min={0} max={1600} leftValue={satMin} rightValue={satMax} leftFunction={handleSatMin} rightFunction={handleSatMax} />
          <h5>Toefl Score</h5>
          <MultiRange min={0} max={120} leftValue={toeflMin} rightValue={toeflMax} leftFunction={handleToeflMin} rightFunction={handleToeflMax} />
          <h5>IELTS Score</h5>
          <MultiRange min={0} max={9} leftValue={ieltsMin} rightValue={ieltsMax} leftFunction={handleIeltsMin} rightFunction={handleIeltsMax} />
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