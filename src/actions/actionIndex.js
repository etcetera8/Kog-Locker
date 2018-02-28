export const addUserData = (userData) => ({
  type: 'ADD_USER_DATA',
  payload: userData
});

export const addUserStats = (userStats) => ({
  type: 'ADD_USER_STATS',
  payload: userStats
});

export const addUserActivities = (userActivities) => ({
  type: 'ADD_USER_ACTIVITIES',
  payload: userActivities
});

export const addUserTarget = (userTarget) => ({
  type: 'ADD_USER_TARGET',
  payload: userTarget
});

export const addNewGoal = (newGoal) => ({
  type: 'ADD_NEW_GOAL',
  payload: newGoal
});

export const addBadge = (badge) => ({
  type: 'ADD_BADGE',
  payload: badge
});

export const addMap = (map) => ({
  type: 'ADD_MAP',
  payload: map
});

export const loginUserAction = (login) => ({
  type: 'LOGIN_USER',
  payload: login
})