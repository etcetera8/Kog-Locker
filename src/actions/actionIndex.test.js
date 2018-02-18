import * as actions from './actionIndex';

describe('all actions', () => {
  it('addUserData function should return user data', () => {
    const mockData = {name: 'user'};
    const expected = {type: 'ADD_USER_DATA', payload: mockData}
    expect(actions.addUserData(mockData)).toEqual(expected)
  })

  it('addUserStats function should return user stats', () => {
    const mockData = {speed: 100};
    const expected = {type: 'ADD_USER_STATS', payload: mockData}
    expect(actions.addUserStats(mockData)).toEqual(expected)   
  })

  it('addUserActivites function should return an array of userActivities', () => {
    const mockData = {speed: 100};
    const expected = {type: 'ADD_USER_ACTIVITIES', payload: mockData}
    expect(actions.addUserActivities(mockData)).toEqual(expected)  
  })

  it('addUserTarget function should return an object of a target segment', () => {
    const mockData = {speed: 100};
    const expected = {type: 'ADD_USER_TARGET', payload: mockData}
    expect(actions.addUserTarget(mockData)).toEqual(expected)  
  })

  it('addBadge function should return a new badge', () => {
    const mockData = {speed: 100};
    const expected = {type: 'ADD_BADGE', payload: mockData}
    expect(actions.addBadge(mockData)).toEqual(expected)  
  })

  it('addMap function should return a new array of lat-longs', () => {
    const mockData = {speed: 100};
    const expected = {type: 'ADD_MAP', payload: mockData}
    expect(actions.addMap(mockData)).toEqual(expected)  
  })

})