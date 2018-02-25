/* eslint-disable */
import * as actions from '../../actions/actionIndex';
import { addUserStats } from '../addUserStatsReducer';

describe('AddUserStatsReducer', () => {
  it('should return a default state of an empty object', () => {
    expect(addUserStats(undefined, {})).toEqual({})
  })

  it('should return an object of stats when passed an action', () => {
    const stats = { max_power: 1000 };
    expect(addUserStats(undefined, actions.addUserStats(stats))).toEqual(stats);
  })
})