import { combineReducers } from 'redux';
import { addUserData } from './addUserDataReducer';
import { addUserStats } from './addUserStatsReducer';

const rootReducer = combineReducers(
  {
    userData: addUserData,
    userStats: addUserStats
  }
);

export default rootReducer;