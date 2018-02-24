import React from 'react';
import { shallow, mount } from 'enzyme';
import {MapCard} from './MapCard';

describe('MapCard' , () => {
  let wrapper;
  
  beforeEach( () => {
    const mockProps = {name: 'parker', athlete_segment_stats: {stats: 'hi'}, end_latlng: [0, 1] }
    const mockTarget = {name: "road", polyline: '12345', end_latlng: [0, 1] }
    wrapper = shallow(<MapCard 
                        userTarget={mockProps}
                        google={{maps:{}}}
                      />);
  })

  it('should have a default state', () => {
    const defaultState = {"goalTime": 0, "loading": true, "newTime": 0}
    expect(wrapper.state()).toEqual(defaultState)
  })

  it('the handleChange function shoud update the state when fired' , () => {
    expect(wrapper.state().newTime).toEqual(0)
    wrapper.find('input').first().simulate('change', {target:{value: 7}})
    expect(wrapper.state().newTime).toEqual(7)
  })

  it('the handlesubmit function should update the state when fired', () => {
    const mockEvent = {preventDefault: jest.fn()}
    expect(wrapper.state().goalTime).toEqual(0)
    wrapper.state().newTime = 7;
    wrapper.find('button').first().simulate('click', mockEvent)
    expect(wrapper.state().goalTime).toEqual(7)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

})