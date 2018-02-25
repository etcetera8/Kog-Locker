/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Badge } from './Badge';
import { mapStateToProps } from './Badge';

describe('Badge Component', () => {
const mockYear = { elevation_gain:10, distance: 20 }

const mockGoals = { yearElevation: 20 }
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<Badge 
      yearStats={mockYear}
      allStats={mockYear} 
      goals={mockGoals}
    />);
  })

  it('should exist and match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('the badgeArray function should return an array of 4 badges', () => {
    const inst = wrapper.instance();
    const result = inst.badgeArray()
    expect(result.length).toEqual(4)
  });

  it('the map state to props should return an object', () => {
    const mockState = { userStats: {all_ride_totals: {distance: 10}, yearStats: {distance:20}}}
    const expected = { allStats: { distance: 10 }, yearStats: { distance: 20 }, goals: undefined }
    const result = mapStateToProps(mockState)
    expect(typeof result).toEqual("object");
    expect(result).toEqual(expected)
  })
})