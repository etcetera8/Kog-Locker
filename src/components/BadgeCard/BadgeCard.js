import React from 'react';
import Badge from '../Badge/Badge';
import './Badge.css';

const BadgeCard = () => {
  return (
    <section className="badge-card card">
      <h2 className='title'> Badges </h2>
      <div className='badge-card-inner'>
        <Badge />
      </div>
    </section>
  );
};

export default BadgeCard;