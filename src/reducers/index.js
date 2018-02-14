import { combineReducers } from 'redux';
import { addUserData } from './addUserDataReducer';
import { addUserStats } from './addUserStatsReducer';
import { addUserActivities } from './addUserActivitiesReducer';
import { addUserTarget } from './addUserTargetReducer';

const rootReducer = combineReducers(
  {
    userData: addUserData,
    userStats: addUserStats,
    userActivities: addUserActivities,
    userTarget: addUserTarget
  }
);

export default rootReducer;