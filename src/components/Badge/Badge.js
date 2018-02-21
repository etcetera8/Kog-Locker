import React from 'react';
import mtn from '../../assets/mtn.png';
import './Badge.css';
import PropTypes from 'prop-types';
import { badgeCreator } from '../../BadgeCreator';

const Badge = ({currentEl, goalEl, yearStats, goalDist}) => {
  const { elevation_gain, distance } = yearStats;
  const badgeArray = []
  badgeArray.push(badgeCreator(elevation_gain, goalEl, 'Elevation Hero', 'feet', mtn));
  badgeArray.push(badgeCreator(distance, goalDist, 'Distance Trasher', 'miles'));
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