const defaultChallenges = {elevation: 52800, distance: 500}

export const addBadge = (state = defaultChallenges, action) => {
  switch (action.type) {
    case 'ADD_BADGE':
      return action.payload
    default:
      return state
  }
}