import React from 'react';
import Badge from '../Badge/Badge';
import './Badge.css';
import PropTypes from 'prop-types';

const BadgeCard = ({currentEl, goalEl, goalDist, allGoalDist, allGoalEl, yearStats, allStats}) => {
  return (
    <section className="badge-card card">
      <h2 className='title'> Badges </h2>
      <div className='badge-card-inner'>
        <Badge 
          currentEl={currentEl}
          goalEl={goalEl}
          goalDist={goalDist}
          allGoalDist={allGoalDist}
          allGoalEl={allGoalEl}
          yearStats={yearStats}
          allStats={allStats}
        />
      </div>
    </section>
  );
};

BadgeCard.propTypes = {
  currentEl: PropTypes.number.isRequired,
  goalEl: PropTypes.number.isRequired,
  goalDist: PropTypes.number.isRequired,
  yearStats:PropTypes.object.isRequired
};

export default BadgeCard;