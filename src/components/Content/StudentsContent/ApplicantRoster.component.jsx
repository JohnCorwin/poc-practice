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

  const getClassName = (value) => {
    return (table === value) ? "tab is-selected" : "tab";
  }

  return (
    <div className="card">
      <div className="tabs">
        <div className={getClassName("Applied")} onClick={ () => setTable("Applied")}>
          <h2>Applied</h2>
          <div className="metric">{dataApplied.length}</div>
        </div>
        <div className={getClassName("Waitlisted")} onClick={ () => setTable("Waitlisted")}>
          <h2>Wait List</h2>
          <div className="metric">{dataWaitlisted.length}</div>
        </div>
        <div className={getClassName("Admissable")} onClick={ () => setTable("Admissable")}>
          <h2>Qualified/Admissable</h2>
          <div className="metric">{dataAdmissable.length}</div>
        </div>
      </div>
      <div className="tab-details">
        <div className="details">
          <DataTable
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