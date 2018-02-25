import React from 'react';
import {shallow} from 'enzyme';
import { TargetContainer, mapStateToProps, mapDispatchToProps } from './TargetContainer';
import { cleanSegment } from '../../mock-data.js'

describe("targetContainer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TargetContainer userTarget={cleanSegment}
                                       google={{maps: "Google Maps API"}}/>)
  })

  it('should start out with a default state', () => {
    const state = {input: '', segmentError: false, loading: false}
    expect(wrapper.state()).toEqual(state)
  })

  it('the changeHelper function should set the state', () => {
    const mockEvent = {target: {value:'123'}}
    expect(wrapper.state().input).toEqual('')
    wrapper.find('input').first().simulate('change', mockEvent)
    expect(wrapper.state().input).toEqual('123')
  })

  it("mapDispatchToProps should return an object with the right keys", () => {
    const results = mapDispatchToProps();
    expect(Object.keys(results)).toEqual(["setUserTarget"])
  })

  it("mapStateToProps should return an object with correct keys", () => {
    const mockState = {userTarget: "Target segment"};
    const results = mapStateToProps(mockState);
    expect(results).toEqual({userTarget: "Target segment"})
  })
})