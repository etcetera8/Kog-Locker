import { addBadge } from '../addBadgeReducer';
import * as actions from '../../actions/actionIndex';

it('should return the default state', () => {
  const expected = {elevation: 10000, distance: 550000};
  expect(addBadge(undefined, {})).toEqual(expected);
})

it('should return the state with a new user', () => {
  const expected = {speed: 100}
  expect(addBadge(undefined, actions.addBadge({speed: 100}))).toEqual(expected);
})