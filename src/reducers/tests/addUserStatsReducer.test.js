/* eslint-disable */
import * as actions from '../../actions/actionIndex';
import { addUserStats } from '../addUserStatsReducer';

describe('AddUserStatsReducer', () => {
  it('should return a default state of an empty object', () => {
    expect(addUserStats(undefined, {})).toEqual({})
  })

  it('should return the payload of stats when passed an action', () => {
    const results = addUserStats(undefined, actions.addUserStats(100))
    expect(results).toEqual(100);
  })
})