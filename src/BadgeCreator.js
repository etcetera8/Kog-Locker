import React from 'react';

export const percentOfGoal = (current, goal) => {
  const percent = (current/goal) * 100;
  return percent;
}

export const badgeCreator = (current, goal, type, unit, icon) => {
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
