import React from 'react';
import mtn from '../../assets/mtn.png';
import './Badge.css';

const percentOfGoal = (current, goal) => {
  const percent = (current/goal) * 100;
  return percent;
}

const badgeCreator = (current, goal, type, icon) => {
  const climbBadge = ( 
    <div>
      <div className="badge">
      <img src={icon} className="badge-icon" />
      <div className="badge-inner" style={{"height" : `${percentOfGoal(current, goal)}%`}}></div>
      </div>
      <span className="type">{type}</span>
      <div className="info">
      I'm the info
      </div>
    </div>
  )
  const badgeArray = [climbBadge]
  return badgeArray;
}

const Badge = ({currentEl, goalEl, yearStats, goalDist}) => {
  const elevationBadge = badgeCreator(yearStats.elevation_gain, goalEl, 'Elevation Hero', mtn)
  const distanceBadge = badgeCreator(yearStats.distance, goalDist, 'Distance Trasher')
  console.log(yearStats);
  return (
    <div>
      {elevationBadge}
      {distanceBadge}
    </div>
  );
};

export default Badge;