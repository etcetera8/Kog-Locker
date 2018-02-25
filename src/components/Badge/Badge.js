import React, { Component } from 'react';
import { connect } from 'react-redux'
import mtn from '../../assets/mtn.png';
import mtns from '../../assets/mtns.png';
import yearDistanceImg from '../../assets/yearDistanceImg.png';
import allDistanceImg from '../../assets/allDistanceImg.png';

import PropTypes from 'prop-types';
import { badgeCreator } from '../../BadgeCreator';

export class Badge extends Component {

  badgeArray = () => {
    const { allStats, yearStats} = this.props;
    //Add new Badges here
    const { yearElevation, yearDistance, allDistance, allElevation } = this.props.goals;
    const badgeArray = [];
    badgeArray.push(badgeCreator(yearStats.elevation_gain, yearElevation, 'Elevation Hero', 'ft', mtn));
    badgeArray.push(badgeCreator(yearStats.distance, yearDistance, 'Distance Trasher', 'miles', yearDistanceImg));
    badgeArray.push(badgeCreator(allStats.distance, allDistance, 'All Time Distance', 'miles', allDistanceImg));
    badgeArray.push(badgeCreator(allStats.elevation_gain, allElevation, 'All Time Elevation', 'ft', mtns));
    return badgeArray
  }

  render() {
    return (
      <div>
        {this.badgeArray()}
      </div>
    );
  }
};

export const mapStateToProps = (state) => ({
  allStats: state.userStats.all_ride_totals,
  yearStats: state.userStats.yearStats,
  goals: state.defaultBadges
})

Badge.propTypes = {
  goals: PropTypes.object.isRequired,
  allStats: PropTypes.object.isRequired,
  yearStats:PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Badge);