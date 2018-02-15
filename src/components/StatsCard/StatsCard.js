import React from 'react';
import './StatsCard.css';

const StatsCard = ({yearStats}) => {
  console.log(yearStats);
  return (
    <section className="stats-card card">
      <h2 className="title">Year To Data</h2>
      { yearStats &&
        <div>
          <span className="card-data">Rides: {yearStats.count}</span>
          <span className="card-data">Disitance: {yearStats.distance}</span>
          <span className="card-data">Elevation: {yearStats.elevation_gain}</span>
          <span className="card-data">Time: {yearStats.elapsed_time}</span>
        </div>
      }
    </section>
  )
}

export default StatsCard;