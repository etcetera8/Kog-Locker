export const addUserActivities = (state=[], action) => {
  switch (action.type) {
    case 'ADD_USER_ACTIVITIES':
      return action.payload;
    default:
    return state;
  }
};