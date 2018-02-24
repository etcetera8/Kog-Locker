export const addNewGoal = (state = {}, action) => {
  switch(action.type) {
    case "ADD_NEW_GOAL"
      return action.payload
    default:
      return state
  }
}