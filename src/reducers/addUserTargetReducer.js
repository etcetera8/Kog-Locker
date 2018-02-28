export const addUserTarget = (state={}, target) => {
  switch(target.type) {
  case 'ADD_USER_TARGET': 
    return target.payload;
  case 'ADD_NEW_GOAL':
    return target.payload;
  default: 
    return state;
  }
};