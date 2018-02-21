import React from 'react';
import mtn from '../../assets/mtn.png';
import mtns from '../../assets/mtns.png';
import yearDistance from '../../assets/yearDistance.png';
import allDistance from '../../assets/allDistance.png';

import './Badge.css';
import PropTypes from 'prop-types';
import { badgeCreator } from '../../BadgeCreator';

const Badge = ({currentEl, goalEl, yearStats, goalDist, allStats, allGoalDist, allGoalEl}) => {
  const { elevation_gain, distance } = yearStats;
  console.log("im the all stats in badge", allStats, allGoalEl);
  
  const badgeArray = []
  badgeArray.push(badgeCreator(elevation_gain, goalEl, 'Elevation Hero', 'feet', mtn));
  badgeArray.push(badgeCreator(distance, goalDist, 'Distance Trasher', 'miles', yearDistance));
  badgeArray.push(badgeCreator(allStats.distance, allGoalDist, 'All Time Distance', 'miles', allDistance)) //all time distance
  badgeArray.push(badgeCreator(allStats.elevation_gain, allGoalEl, 'All Time Elevation', 'feet', mtns)) //all time elevation
  
  return (
    <div>
      {badgeArray}
    </div>
  );
};

Badge.propTypes = {
  currentEl: PropTypes.number,
  goalEl: PropTypes.number.isRequired,
  goalDist: PropTypes.number.isRequired,
  yearStats:PropTypes.object.isRequired
};

export default Badge;