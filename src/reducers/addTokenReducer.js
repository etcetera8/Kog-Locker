export const addToken = ( state={}, action) => {
  switch (action.type) {
  case 'ADD_TOKEN':
    return action.payload;
  default:
    return state;
  }
};