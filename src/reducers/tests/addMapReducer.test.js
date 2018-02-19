import { addMap } from '../addMapReducer';
import * as actions from '../../actions/actionIndex';

describe('map reducer', () => {
  it('should return a default state of null', () => {
    expect(addMap(undefined, {})).toEqual(null)
  })

  it('should return an action object', () => {
    const expected = {map: 'a map'}
    expect(addMap(undefined, actions.addMap({map: 'a map'}))).toEqual(expected)
  })
})