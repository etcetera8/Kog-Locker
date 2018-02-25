/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { StatsContainer } from './StatsContainer';
import { mapStateToProps } from './StatsContainer';
describe('StatsContainer', () => {

  it('should match the snapshot', () => {
    const mockStats={name:'parker', recent_ride_totals: {totals: 5}}
    const wrapper = shallow(<StatsContainer 
                              userStats={mockStats} 
                            />);
    expect(wrapper).toMatchSnapshot();
  })

  it('the cardCreator function shoud return a jsx object', () => {
    const mockStats={name:'parker', recent_ride_totals: {totals: 5}}
    const wrapper = shallow(<StatsContainer
                              userStats={mockStats}
                            />);
    const inst = wrapper.instance();
    const results = inst.cardCreator("yearStats", {data: "datums"})
    expect(Object.keys(results.type.propTypes)).toEqual(['yearStats', 'allStats', 'recentStats'])
  })

  it('mapStateToProps shoud return and object', () => {
    const mockState = {userStats: {name:'parker'}}
    const results = mapStateToProps(mockState);
    const expected = { userStats: { name: 'parker' } }
    expect(results).toEqual(expected);
  })
})
