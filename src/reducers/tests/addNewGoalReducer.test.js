import {addNewGoal} from '../addNewGoal';
import * as actions from '../../actions/actionIndex';

describe("add new goal reducer", () => {
  it('should return a default state', () => {
    const goal = {type: 'ADD_MAP', payload: "thing"};
    const results = addNewGoal({}, goal);
    expect(results).toEqual({})
  })

  it('should return the payload when passed the type', () => {
    const goal = {type: 'ADD_NEW_GOAL', payload: "thing"};
    const results = addNewGoal({}, goal);
    expect(results).toEqual("thing")
  })
})