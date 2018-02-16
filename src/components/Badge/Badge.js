import React from 'react';
  
const climbGoal = (current, goal) => {
  const percent = (current/goal) * 100;
  return percent;
}

const badgeCreator =(current, goal) => {
  const climbBadge = ( 
    <div className="badge">
      <div className="badge-icon">X</div>
      <div className="badge-inner" style={{"height" : `${climbGoal(current, goal)}%`}}></div>
    </div> 
  )
  const badgeArray = [climbBadge]
  return badgeArray;
}

const Badge = ({current, goal}) => {
  return (
    <div>
      {badgeCreator(current, goal)}
    </div>
  );
};

export default Badge;