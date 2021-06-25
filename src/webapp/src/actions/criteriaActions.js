import {
  setAvailableSeats,
  setCostOfAttendance,
  setScholarshipRecommendation,
  setChinaLer,
  setSatMin,
  setSatMax,
  setToeflMin,
  setToeflMax,
  setIeltsMin,
  setIeltsMax
} from "../reducers/criteriaReducer";

export function updateAvailableSeats(availableSeats) {
  return (dispatch) => {
    return dispatch(setAvailableSeats(availableSeats));
  }
}

export function updateCostOfAttendance(costOfAttendance) {
  return (dispatch) => {
    return dispatch(setCostOfAttendance(costOfAttendance));
  }
}

export function updateScholarshipRecommendation(scholarshipRecommendation) {
  return (dispatch) => {
    return dispatch(setScholarshipRecommendation(scholarshipRecommendation));
  }
}

export function updateChinaLer(chinaLer) {
  return (dispatch) => {
    return dispatch(setChinaLer(chinaLer));
  }
}

export function updateSatMin(satMin) {
  return (dispatch) => {
    return dispatch(setSatMin(satMin));
  }
}

export function updateSatMax(satMax) {
  return (dispatch) => {
    return dispatch(setSatMax(satMax));
  }
}

export function updateToeflMin(toeflMin) {
  return (dispatch) => {
    return dispatch(setToeflMin(toeflMin));
  }
}

export function updateToeflMax(toeflMax) {
  return (dispatch) => {
    return dispatch(setToeflMax(toeflMax));
  }
}

export function updateIeltsMin(ieltsMin) {
  return (dispatch) => {
    return dispatch(setIeltsMin(ieltsMin));
  }
}

export function updateIeltsMax(ieltsMax) {
  return (dispatch) => {
    return dispatch(setIeltsMax(ieltsMax));
  }
}