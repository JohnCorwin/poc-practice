import { setStudents, setLoading } from "../reducers/studentsReducer";

import axios from 'axios';

const apiUrl = "http://localhost:8081/api/students/list";

export function fetchStudents() {
  return (dispatch) => {
    return axios.get(apiUrl)
        .then(dispatch(setLoading(true)))
        .then(response => response.data)
        .then(data => dispatch(setStudents(data)))
        .catch(error => {
          console.error("What?!? An Error?!?");
          dispatch(setLoading(false));
        })
        .finally(() => {
          dispatch(setLoading(false));
        })
  }
}

export function updateStudents(students) {
  return (dispatch) => {
    return dispatch(setStudents(students));
  }
}

export function updateLoading(loading) {
  return (dispatch) => {
    return dispatch(setLoading(loading));
  }
}
