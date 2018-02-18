import React from 'react';
import Badge from '../Badge/Badge';
import './Badge.css';

const BadgeCard = ({currentEl, goalEl, goalDist, yearStats}) => {
  return (
    <section className="badge-card card">
      <h2 className='title'> Badges </h2>
      <div className='badge-card-inner'>
        <Badge 
          yearStats={yearStats}
          currentEl={currentEl}
          goalEl={goalEl}
          goalDist={goalDist}
        />
      </div>
    </section>
  );
};

export default BadgeCard;