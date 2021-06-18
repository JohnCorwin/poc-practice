import { setStudents } from "../reducers/studentsReducer";

export function fetchStudents() {
  return (dispatch) => {
    return dispatch
  }
}

export function updateStudents(students) {
  return (dispatch) => {
    return dispatch(setStudents(students));
  }
}
