export const addMap = (state = null, action) => {
  switch(action.type) {
    case 'ADD_MAP':
      return action.payload
    default:
      return state
  }
}