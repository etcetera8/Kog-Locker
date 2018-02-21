import React from 'react';
import {shallow} from 'enzyme';
import { TargetContainer } from './TargetContainer';
import { cleanSegment } from '../../mock-data.js'
describe("targetContainer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TargetContainer userTarget={cleanSegment}/>)
  })

  it('should start out with a default state', () => {
    const state = {segmentId: '', segmentError: false, loading: false}
    expect(wrapper.state()).toEqual(state)
  })

  it('the changeHelper function should set the state', () => {
    const mockEvent = {target: {value:'123'}}
    expect(wrapper.state().segmentId).toEqual('')
    wrapper.find('input').first().simulate('change', mockEvent)
    expect(wrapper.state().segmentId).toEqual('123')
  })


})