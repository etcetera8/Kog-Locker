/* eslint-disable */
import * as actions from '../../actions/actionIndex';
import { addUserActivities } from '../addUserActivitiesReducer';

describe('User Activities reducer', () => {
  it('should return a default state of an empty array', () => {
    expect(addUserActivities(undefined, {})).toEqual([]);
  })

  it('should return the payload of the action creator', () => {
    const payload = {type: 'ADD_USER_ACTIVITIES', payload: ["an activity"]}
    const results = addUserActivities(undefined, payload)
    expect(results).toEqual(["an activity"])
  })
})