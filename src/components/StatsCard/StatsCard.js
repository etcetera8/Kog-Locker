import React from 'react';
import './StatsCard.css';

const StatsCard = ({ yearStats, allStats }) => {
  return (
    <section className="stats-card card">
      { yearStats &&
        <div>
          <h2 className="title">Year To Date</h2>
            <span className="card-data">Rides: {yearStats.count}</span>
            <span className="card-data">Distance: {yearStats.distance}</span>
            <span className="card-data">Elevation: {yearStats.elevation_gain}</span>
            <span className="card-data">Time: {yearStats.elapsed_time}</span>
        </div>
      }
      { allStats && 
        <div>
          <h2 className="title"> All-Time</h2>
            <span className="card-data">Rides: {allStats.count}</span>
            <span className="card-data">Distance: {allStats.distance}</span>
            <span className="card-data">Elevation: {allStats.elevation_gain}</span>
            <span className="card-data">Time: {allStats.elapsed_time}</span>
        </div>
      }

    </section>
  )
}

export default StatsCard;