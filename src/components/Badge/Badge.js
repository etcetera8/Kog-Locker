import React from 'react';
import mtn from '../../assets/mtn.png';
import './Badge.css';
import PropTypes from 'prop-types';

const percentOfGoal = (current, goal) => {
  const percent = (current/goal) * 100;
  return percent;
}

const badgeCreator = (current, goal, type, unit, icon) => {
  const badge = ( 
    <div className="full-badge-wrapper">
      <div className="badge">
      <img src={icon} alt="badge icon"className="badge-icon" />
      <div className="badge-inner" style={{"height" : `${percentOfGoal(current, goal)}%`}}></div>
      </div>
      <div className="info">
        <span className="type">{type}</span>
        <span className="details">{percentOfGoal(current, goal).toFixed(2)} %</span>
        <span className="details">{current} {unit} of {goal} {unit}</span>
      </div>
    </div>
  )
  return badge;
}

const Badge = ({currentEl, goalEl, yearStats, goalDist}) => {
  const elevationBadge = badgeCreator(yearStats.elevation_gain, goalEl, 'Elevation Hero', 'feet', mtn)
  const distanceBadge = badgeCreator(yearStats.distance, goalDist, 'Distance Trasher', 'miles')
  
  return (
    <div>
      {elevationBadge}
      {distanceBadge}
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