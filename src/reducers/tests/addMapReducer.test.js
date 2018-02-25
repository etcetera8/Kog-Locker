/* eslint-disable */
import { addMap } from '../addMapReducer';
import * as actions from '../../actions/actionIndex';

describe('map reducer', () => {
  it('should return a default state of null', () => {
    expect(addMap(undefined, {})).toEqual(null)
  })

  it('should return the action payload', () => {
    const results = addMap({}, {type:"ADD_MAP", payload: "new map"})
    expect(results).toEqual("new map")
  })
})