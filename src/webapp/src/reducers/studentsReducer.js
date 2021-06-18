const SET_STUDENTS = "SET_STUDENTS";

export const initialState = {
  students: [],
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return Object.assign({}, state, {
        students: action.students
      });
    default:
      return state
  }
};

export function setStudents(students) {
  return {
    type: SET_STUDENTS,
    students
  }
}

export default quizReducer;
