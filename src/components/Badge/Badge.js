import React from 'react';

const Badge = ({percentOfClimb}) => {
  console.log(percentOfClimb);
  return (
  <div className="badge">
    <div className="badge-icon">X</div>
    <div className="badge-inner" style={{"height" : `${percentOfClimb}%`}}></div>
  </div>
  )
}

export default Badge;