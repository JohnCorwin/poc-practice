import { combineReducers } from 'redux'
import students from './studentsReducer';
import criteria from './criteriaReducer';

const rootReducer = combineReducers({
  students,
  criteria
});

export default rootReducer;