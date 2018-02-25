/* eslint-disable */
import * as actions from '../../actions/actionIndex';
import { addUserTarget } from '../addUserTargetReducer';

describe('addUserTargetReducer', () => {
  it('should return a default state of an empty object', () => {
    expect(addUserTarget(undefined, {})).toEqual({})
  })

  it('should return an object of a target segment', () => {
    const expected = {"payload": {"name": "Lookout Mountain"}, "type": "ADD_USER_TARGET"}
    const data = {type: 'ADD_USER_TARGET', payload: {name:'Lookout Mountain'}}
    expect(addUserTarget(undefined, actions.addUserTarget(data))).toEqual(expected);
  })
})