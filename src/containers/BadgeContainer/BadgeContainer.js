import React, { Component } from 'react';
import { connect } from 'react-redux';
import BadgeCard from '../../components/BadgeCard/BadgeCard';

class BadgeContainer extends Component {
  
  render() {
    const { yearStats } = this.props.userStats;
    const { elevation, distance } = this.props.badges;
    return (
      <main>
        {this.props.userStats.yearStats && 
          <BadgeCard 
            currentEl={yearStats.elevation_gain}
            goalEl={elevation}
            goalDist={distance}
            yearStats={this.props.userStats.yearStats}
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