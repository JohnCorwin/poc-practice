import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DataTable from 'react-data-table-component';
import { fetchStudents, updateStudents } from '../../../actions/studentsActions.js'

import './applicantRoster.scss';

const ApplicantRoster = () => {
  const [table, setTable] = useState('Applied');
  const [students, setStudents] = useState([]);

  const dispatch = useDispatch();

  const studentCell = (data) => {
    return (
      <div className="student">
        <div className="student-name">{data.name}</div>
        <div className="student-location">{data.location}</div>
        <div className="student-email">{data.email}</div>
      </div>
    );
  }

  useEffect(() => {
    fetch('http://localhost:8081/api/students/list')
        .then(response => response.json())
        .then(data => setStudents(data))
        .catch(error => {
          console.error("What?!? An Error?!?")
        });
  }, [])

  const columns = [
    { name: 'Student',
      cell: row => studentCell(row),
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

  const getDataApplied = () => {
    return students;
  }

  const getDataWaitlisted = () => {
    return students.filter(student => student.sat < 1400)
  }

  const getDataAdmissable = () => {
    return students.filter(student => student.sat > 1400)
  }

  const dataApplied = getDataApplied();

  const dataWaitlisted = getDataWaitlisted();

  const dataAdmissable = getDataAdmissable();

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