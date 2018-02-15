import React from 'react';
import Badge from '../Badge/Badge';
import './Badge.css';

const BadgeCard = ({percentOfClimb}) => {
  return (
    <section className="badge-card card">
      <Badge percentOfClimb={percentOfClimb}/>
    </section>
  )
}

export default BadgeCard;