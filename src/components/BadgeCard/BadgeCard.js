import React from 'react';
import Badge from '../Badge/Badge';
import './Badge.css';

const BadgeCard = ({current, goal}) => {
  return (
    <section className="badge-card card">
      <Badge 
        current={current}
        goal={goal}
      />
    </section>
  );
};

export default BadgeCard;