import ApplicantRoster from '../ApplicantRoster/ApplicantRoster.component';

const StudentsContent = () => {
  return (
    <>
      <div className="stuff">
        <h1>Application Roster</h1>
        <p>East China students enrolled in the Hopkins Global program for Fall 2021.</p>
        <ApplicantRoster />
      </div>
    </>
  );
}

export default StudentsContent;
