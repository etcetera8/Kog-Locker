import React from 'react';
import Badge from '../Badge/Badge';
import './Badge.css';

const BadgeCard = ({currentEl, goalEl, goalDist, yearStats}) => {
  return (
    <section className="badge-card card">
    <h2 className='title'> Badges </h2>
      <Badge 
        yearStats={yearStats}
        currentEl={currentEl}
        goalEl={goalEl}
        goalDist={goalDist}
      />
    </section>
  );
};

export default BadgeCard;