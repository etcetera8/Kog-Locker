import React from 'react';
  
const percentOfGoal = (current, goal) => {
  const percent = (current/goal) * 100;
  return percent;
}

const badgeCreator =(current, goal) => {
  const climbBadge = ( 
    <div className="badge">
      <div className="badge-icon">X</div>
      <div className="badge-inner" style={{"height" : `${percentOfGoal(current, goal)}%`}}></div>
    </div> 
  )
  const badgeArray = [climbBadge]
  return badgeArray;
}

const Badge = ({currentEl, goalEl, yearStats, goalDist}) => {
  console.log(yearStats);
  return (
    <div>
      {badgeCreator(yearStats.elevation_gain, goalEl)}
      {badgeCreator(yearStats.distance, goalDist)}
    </div>
  );
};

export default Badge;