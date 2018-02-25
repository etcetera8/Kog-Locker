/* eslint-disable */
import * as actions from '../../actions/actionIndex';
import { addUserData } from '../addUserDataReducer';

describe('user data reducer', () => {
  it('should return a default state of an empty object', () => {
    expect(addUserData(undefined, {})).toEqual({});
  })

  it('should return the payload of the action creator', () => {
    const expected = {userData: "user data"};
    const results = addUserData({}, actions.addUserData({userData: "user data"}))
    expect(results).toEqual(expected);
  })
})
