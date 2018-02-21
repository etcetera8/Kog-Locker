import React from 'react';
import { shallow } from 'enzyme';
import BadgeCard from './BadgeCard';

describe('BadgeCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<BadgeCard />)
    expect(wrapper).toMatchSnapshot();
  })
})