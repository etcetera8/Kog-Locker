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

it('should return the state with a new user', () => {
  const expected = {speed: 100}
  expect(addBadge(undefined, actions.addBadge({speed: 100}))).toEqual(expected);
})