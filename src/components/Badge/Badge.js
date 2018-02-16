import React from 'react';

const Badge = ({percentOfClimb}) => {
  console.log(percentOfClimb);
  
  const climbBadge = (   <div className="badge">
      <div className="badge-icon">X</div>
      <div className="badge-inner" style={{"height" : `${percentOfClimb}%`}}></div>
    </div> )

  const badgeArray = [
    climbBadge
  ]

  return (
    <div>
      {badgeArray}
    </div>
  

  );
};

export default Badge;