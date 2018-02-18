import React from 'react';
import StatsCard from './StatsCard';
import { shallow } from 'enzyme';

describe('header', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<StatsCard />)
    expect(wrapper).toMatchSnapshot();
  })

})