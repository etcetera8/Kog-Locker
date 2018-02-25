/* eslint-disable */
import * as actions from '../../actions/actionIndex';
import { addUserData } from '../addUserDataReducer';

describe('user data reducer', () => {
  it('should return a default state of an empty object', () => {
    expect(addUserData(undefined, {})).toEqual({});
  })

  it('should return a default state of an empty object', () => {
    const expected = {name: 'parker'}
    expect(addUserData({}, actions.addUserData({name: 'parker'}))).toEqual(expected);
  })
})
