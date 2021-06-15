import './Requirements.css';

const Requirements = () => {
  return (
      <>
        <div className="criteria-div-header">
          <h2 className="criteria-title">Enrollment Criteria</h2>
          <span className="criteria-title criteria-subtitle">Enrollment Criteria is available for East China students during the Fall 2021 Hopkins Global Semester.</span>
        </div>
        <div className="criteria-enrollment-requirements">
          <p>Enrollment Requirements</p>
          <form className="enrollment-window-form">
            <span>Enrollment Window</span>
            <div className="criteria-enrollment-window">
              <div className="criteria-enrollment-section">
                <label for="from-input">From</label>
                <input type="text" id="from-input"></input>
              </div>
              <div className="criteria-enrollment-section">
                <label for="threshold-input">Threshold</label>
                <input type="text" id="threshold-input"></input>
              </div>
              <div className="criteria-enrollment-section">
                <label for="to-input">To</label>
                <input type="text" id="to-input"></input>
              </div>
            </div>
            <span>Decision Style</span>
            <div className="criteria-decision-style">
              <div className="criteria-enrollment-section">
                <label for="type-input">Type</label>
                <input type="text" id="type-input"></input>
              </div>
              <div className="criteria-enrollment-section">
                <label for="threshold-input">Threshold</label>
                <input type="text" id="threshold-input"></input>
              </div>
            </div>
            <p>Cost of Attendance:</p>
            <input type="range" min="1" max="100" value="50"></input>
            <p>Scholarship Recommendation:</p>
            <input type="range" min="1" max="100" value="50"></input>
            <p>Payment Deadline:</p>
            <div className="criteria-payment-deadline">
              <div className="criteria-enrollment-section">
                <label for="from-input">From</label>
                <input type="text" id="from-input"></input>
              </div>
              <div className="criteria-enrollment-section">
                <label for="threshold-input">Threshold</label>
                <input type="text" id="threshold-input"></input>
              </div>
              <div className="criteria-enrollment-section">
                <label for="to-input">To</label>
                <input type="text" id="to-input"></input>
              </div>
            </div>
          </form>
        </div>
      </>
  );
}

export default Requirements;
