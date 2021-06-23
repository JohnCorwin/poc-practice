import ApplicantRoster from './ApplicantRoster.component';

const StudentsContent = () => {


    return (
      <>
        <div className="stuff">
          <h1 className="page-title">Application Roster</h1>
          <p className="page-subtitle">East China students enrolled in the Hopkins Global program for Fall 2021.</p>
          <ApplicantRoster />
        </div>
      </>
    );
}

export default StudentsContent;
