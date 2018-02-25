/* eslint-disable */
import { addBadge } from '../addBadgeReducer';
import * as actions from '../../actions/actionIndex';

it('should return the default state', () => {
  const expected = {
    allDistance: 25000, 
    allElevation: 528000, 
    yearDistance: 500, 
    yearElevation: 52800
  }

  expect(addBadge(undefined, {})).toEqual(expected);
})

it('should return the payload passed into the action', () => {
  const expected = {speed: 100}
  const results = addBadge({}, actions.addBadge(100)) 
  expect(results).toEqual(100);
})