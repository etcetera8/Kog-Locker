import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('header', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
  })

})