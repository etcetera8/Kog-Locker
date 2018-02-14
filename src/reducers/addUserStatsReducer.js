export const addUserStats = (state={}, action) => {
  switch(action.type) {
    case 'ADD_USER_STATS':
      return action.payload;
    default:
      return state;
  }
}