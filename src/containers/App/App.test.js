/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import App  from './App';
import {mapStateToProps} from './App';
import {mapDispatchToProps} from './App';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('match StateToProps should return an object with the right key values' , () => {
    const mockState = {userData: "stuff", userStats: "more stuff"}
    const results = mapStateToProps(mockState);
    expect(typeof results).toEqual('object');
    const expected = {"userData": "stuff", "userStats": "more stuff"};
    expect(results).toEqual(expected);
  })

  it('mapDispatchToProps should return an object with the right key values', () => {
    const results = mapDispatchToProps();
    console.log(results);
    const expected = ["setUserData", "setUserStats", "setUserActivities", "setUserTarget"]

    expect(Object.keys(results)).toEqual(expected)
  })
})
