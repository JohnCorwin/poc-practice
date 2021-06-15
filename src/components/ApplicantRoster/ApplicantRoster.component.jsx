import './ApplicantRoster.css';
import React, { useState } from 'react'
import DataTable from 'react-data-table-component';

const ApplicantRoster = () => {
  const columns = [
    { name: 'Name',
      selector: 'name',
      sortable: true
    },
    { name: 'Status',
      selector: 'status',
      sortable: true
    },
    { name: 'GPA',
      selector: 'gpa',
      sortable: true
    },
    { name: 'IELTS',
      selector: 'ielts',
      sortable: true
    },
    { name: 'SAT',
      selector: 'sat',
      sortable: true
    },
    { name: 'TOEFL',
      selector: 'toefl',
      sortable: true
    },
    { name: 'Pre-Qualified?',
      selector: 'prequalified',
      sortable: true
    },
    { name: 'Passport/Visa?',
      selector: 'passportVisa',
      sortable: true
    },
    { name: 'Tuition Status',
      selector: 'tuitionStatus',
      sortable: true
    }];

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

  const xiaoHu = {
    id: 1,
    name: 'Xiao Hu',
    status: 'Follow Up',
    gpa: '3.3',
    ielts: '8',
    sat: '1492',
    toefl: '98',
    prequalified: 'Yes',
    passportVisa: 'Yes',
    tuitionStatus: 'Paid In Full'
  };

  const zhuanCheng = {
    id: 2,
    name: 'Zhuan Cheng',
    status: 'Follow Up',
    gpa: '3.2',
    ielts: '7',
    sat: '1345',
    toefl: '98',
    prequalified: 'Yes',
    passportVisa: 'Yes',
    tuitionStatus: 'Paid In Full'
  };

  const dataApplied = [xiaoHu, zhuanCheng];

  const dataWaitlisted = [zhuanCheng];

  const dataAdmissable = [xiaoHu];

  const [table, setTable] = useState('Applied');

  const getData = () => {
    if (table === 'Applied') {
      return dataApplied;
    } else if (table === 'Waitlisted') {
      return dataWaitlisted;
    } else if (table === 'Admissable') {
      return dataAdmissable;
    }

    return null;
  }

  return (
    <div className="applicant-roster-div">
      <div className="applicant-roster-box">
        <div className="applicant-roster-div">
          <div className="applicant-roster-top-buttons">
            <button onClick={() => setTable('Applied')}className="applied-button">Applied</button>
            <button onClick={() => setTable('Waitlisted')} className="wait-list-button">Wait List</button>
            <button onClick={() => setTable('Admissable')} className="qualified-admissible-button">Qualified/Admissable</button>
          </div>
          <DataTable
            title="Applicant Roster"
            columns={columns}
            customStyles={customStyles}
            data={getData()}
          />
        </div>
      </div>
    </div>
  );
}

export default ApplicantRoster;