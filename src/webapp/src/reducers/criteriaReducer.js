const SET_AVAILABLE_SEATS = "SET_AVAILABLE_SEATS";
const SET_COST_OF_ATTENDANCE = "SET_COST_OF_ATTENDANCE";
const SET_SCHOLARSHIP_RECOMMENDATION = "SET_SCHOLARSHIP_RECOMMENDATION";
const SET_CHINA_LER = "SET_CHINA_LER";
const SET_SAT_MIN = "SET_SAT_MIN";
const SET_SAT_MAX = "SET_SAT_MAX";
const SET_TOEFL_MIN = "SET_TOEFL_MIN";
const SET_TOEFL_MAX = "SET_TOEFL_MAX";
const SET_IELTS_MIN = "SET_IELTS_MIN";
const SET_IELTS_MAX = "SET_IELTS_MAX";

export const initialState = {
  availableSeats: 0,
  costOfAttendance: 0,
  scholarshipRecommendation: 0,
  chinaLer: 0,
  satMin: 0,
  satMax: 0,
  toeflMin: 0,
  toeflMax: 0,
  ieltsMin: 0,
  ieltsMax: 0
};

const criteriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AVAILABLE_SEATS:
      return Object.assign({}, state, {
        availableSeats: action.availableSeats
      });
    case SET_COST_OF_ATTENDANCE:
      return Object.assign({}, state, {
        costOfAttendance: action.costOfAttendance
      });
    case SET_SCHOLARSHIP_RECOMMENDATION:
      return Object.assign({}, state, {
        scholarshipRecommendation: action.scholarshipRecommendation
      });
    case SET_CHINA_LER:
      return Object.assign({}, state, {
        chinaLer: action.chinaLer
      });
    case SET_SAT_MIN:
      return Object.assign({}, state, {
        satMin: action.satMin
      });
    case SET_SAT_MAX:
      return Object.assign({}, state, {
        satMax: action.satMax
      });
    case SET_TOEFL_MIN:
      return Object.assign({}, state, {
        toeflMin: action.toeflMin
      });
    case SET_TOEFL_MAX:
      return Object.assign({}, state, {
        toeflMax: action.toeflMax
      });
    case SET_IELTS_MIN:
      return Object.assign({}, state, {
        ieltsMin: action.ieltsMin
      });
    case SET_IELTS_MAX:
      return Object.assign({}, state, {
        ieltsMax: action.ieltsMax
      });
    default:
      return state
  }
}

export function setAvailableSeats(availableSeats) {
  return {
    type: SET_AVAILABLE_SEATS,
    availableSeats
  }
}

export function setCostOfAttendance(costOfAttendance) {
  return {
    type: SET_COST_OF_ATTENDANCE,
    costOfAttendance
  }
}

export function setScholarshipRecommendation(scholarshipRecommendation) {
  return {
    type: SET_SCHOLARSHIP_RECOMMENDATION,
    scholarshipRecommendation
  }
}

export function setChinaLer(chinaLer) {
  return {
    type: SET_CHINA_LER,
    chinaLer
  }
}

export function setSatMin(satMin) {
  return {
    type: SET_SAT_MIN,
    satMin
  }
}

export function setSatMax(satMax) {
  return {
    type: SET_SAT_MAX,
    satMax
  }
}

export function setToeflMin(toeflMin) {
  return {
    type: SET_TOEFL_MIN,
    toeflMin
  }
}

export function setToeflMax(toeflMax) {
  return {
    type: SET_TOEFL_MAX,
    toeflMax
  }
}

export function setIeltsMin(ieltsMin) {
  return {
    type: SET_IELTS_MIN,
    ieltsMin
  }
}

export function setIeltsMax(ieltsMax) {
  return {
    type: SET_IELTS_MAX,
    ieltsMax
  }
}

export default criteriaReducer;