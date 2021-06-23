const SET_LOADING = "SET_LOADING";
const SET_STUDENTS = "SET_STUDENTS";

export const initialState = {
  loading: false,
  students: [],
};

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      });
    case SET_STUDENTS:
      return Object.assign({}, state, {
        students: action.students
      });
    default:
      return state
  }
};

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading
  }
}

export function setStudents(students) {
  return {
    type: SET_STUDENTS,
    students
  }
}

export default studentsReducer;
