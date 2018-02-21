const defaultChallenges = {
  yearElevation: 52800, 
  yearDistance: 500,
  allElevation: 528000,
  allDistance: 25000
}

export const addBadge = (state = defaultChallenges, action) => {
  switch (action.type) {
    case 'ADD_BADGE':
      return action.payload
    default:
      return state
  }
}