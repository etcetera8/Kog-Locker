import { combineReducers } from 'redux';
import { addUserData } from './addUserDataReducer';
import { addUserStats } from './addUserStatsReducer';
import { addUserActivities } from './addUserActivitiesReducer';
import { addUserTarget } from './addUserTargetReducer';
import { addBadge } from './addBadgeReducer.js';
import { addMap } from './addMapReducer.js'
import { loginUser } from './loginUserReducer';
import { addToken } from './addTokenReducer';

const rootReducer = combineReducers(
  {
    userData: addUserData,
    userStats: addUserStats,
    userActivities: addUserActivities,
    userTarget: addUserTarget,
    defaultBadges: addBadge,
    targetMap: addMap,
    loginStatus: loginUser,
    token: addToken
  }
);

export default rootReducer;