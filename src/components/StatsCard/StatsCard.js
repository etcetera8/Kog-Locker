import React from 'react';
import './StatsCard.css';

const StatsCard = ({ yearStats, allStats, recentStats }) => {
  return (
    <section className="stats-card card">
      { yearStats &&
        <div>
          <h2 className="title">Year To Date</h2>
          <span className="card-data">Rides: <span className="nums">{yearStats.count}</span></span>
          <span className="card-data">Distance: <span className="nums">{yearStats.distance} miles</span></span>
          <span className="card-data">Elevation: <span className="nums">{yearStats.elevation_gain} feet</span></span>
          <span className="card-data">Time: <span className="nums">{Math.floor((yearStats.elapsed_time /60)/60) } hours</span></span>
        </div>
      }
      { allStats && 
        <div>
          <h2 className="title"> All-Time</h2>
          <span className="card-data">Rides: <span className="nums">{allStats.count}</span></span>
          <span className="card-data">Distance: <span className="nums">{allStats.distance} miles</span></span>
          <span className="card-data">Elevation: <span className="nums">{allStats.elevation_gain} feet</span></span>
          <span className="card-data">Time: <span className="nums">{Math.floor((allStats.elapsed_time / 60) /60)} hours</span></span>
        </div>
      }
      { recentStats &&
        <div>
          <h2 className="title">Recent Rides</h2>
          <span className="card-data">Rides: <span className="nums">{recentStats.count}</span></span>
          <span className="card-data">Distance: <span className="nums">{recentStats.distance} miles</span></span>
          <span className="card-data">Elevation: <span className="nums">{recentStats.elevation_gain} feet</span></span>
          <span className="card-data">Time: <span className="nums">{Math.floor((recentStats.elapsed_time / 60) /60)} hours</span></span>
        </div>
      }

    </section>
  );
};

export default StatsCard;