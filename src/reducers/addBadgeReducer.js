const defaultChallenges = {elevation: 10000, distance: 550000}

export const addBadge = (state = defaultChallenges, action) => {
  switch (action.type) {
    case 'ADD_BADGE':
      return action.payload
    default:
      return state
  }
}