/* eslint-disable */
import * as actions from '../../actions/actionIndex';
import { addUserActivities } from '../addUserActivitiesReducer';

describe('User Activities reducer', () => {
  it('should return a default state of an empty array', () => {
    expect(addUserActivities(undefined, {})).toEqual([]);
  })

  it('should return a an array of activites if called', () => {
    const expected = [{activity: 1234}]
    expect(addUserActivities(undefined, {type: 'ADD_USER_ACTIVITIES', payload:expected})).toEqual(expected)
  })
})