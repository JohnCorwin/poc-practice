import { combineReducers } from 'redux'
import students from './studentsReducer';
import criteria from './criteriaReducer';
import campaigns from './campaignsReducer';

const rootReducer = combineReducers({
  students,
  criteria,
  campaigns
});

export default rootReducer;