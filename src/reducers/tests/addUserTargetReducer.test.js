/* eslint-disable */
import * as actions from '../../actions/actionIndex';
import { addUserTarget } from '../addUserTargetReducer';

describe('addUserTargetReducer', () => {
  it('should return a default state of an empty object', () => {
    expect(addUserTarget(undefined, {})).toEqual({})
  })

  it('should return the payload of the action creator', () => {
    const results = addUserTarget(undefined, actions.addUserTarget("segment"));
    expect(results).toEqual("segment");
  })
})