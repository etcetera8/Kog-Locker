import React, { Component } from 'react';
import { connect } from 'react-redux';
import BadgeCard from '../../components/BadgeCard/BadgeCard';
import Badge from '../../components/Badge/Badge';

class BadgeContainer extends Component {
  
  render() {
    const { yearStats } = this.props.userStats;
    const { elevation, distance } = this.props.badges;
    return (
      <main className='badge-main-container'>
        {yearStats && 
          <Badge
            yearStats={yearStats}
            goalEl={elevation}
            goalDist={distance}
          />
        }
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  userStats: state.userStats,
  badges: state.defaultBadges
})

export default connect(mapStateToProps)(BadgeContainer)