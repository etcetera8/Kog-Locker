import React from 'react';
import { shallow } from 'enzyme';
import { BadgeContainer } from './BadgeContainer';
import { mapStateToProps } from './BadgeContainer';

describe('BadgeContainer', () => {
  it('should match the snapshot', () => {
    const mockStats = {yearStats: {distance:10}}
    const wrapper = shallow(<BadgeContainer userStats={mockStats} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('mapStateToProps should return an object with the right keys', () => {
    const mockState = {userStats: {name: 'peter sagan'}}
    const results = mapStateToProps(mockState)
    const expected = {"userStats": {"name": "peter sagan"}}
    expect(results).toEqual(expected)
  })
})
