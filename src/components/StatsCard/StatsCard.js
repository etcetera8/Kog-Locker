import React from 'react';
import './StatsCard.css';

const StatsCard = ({yearStats}) => {
  console.log(yearStats);
  return (
    <section className="stats-card card">
      <h2>Y-T-D Stats</h2>
      { yearStats &&
        <span>{yearStats.count}</span>
        <span>{yearStats.distance}</span>
        <span>{yearStats.}</span>
      }
    </section>
  )
}

export default StatsCard;