import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapStateToProps } from './Home';
import {cleanUserStats, cleanSegment, defaultBadges } from '../../mock-data.js';

describe('Home component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Home 
                              userStats={cleanUserStats}
                              userTarget={cleanSegment}
                              badges={defaultBadges} />)
    expect(wrapper).toMatchSnapshot();
  })

  it("the mapStateToProps function should return an object", () => {
    const mockState = {userStats: 1, defaultBadges: 2, userTarget:3 }
    const expected = { userStats: 1, badges: 2, userTarget: 3 };
    const results = mapStateToProps(mockState)
    expect(results).toEqual(expected);
  })
})