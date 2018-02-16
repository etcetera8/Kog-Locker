import React, { Component } from 'react';
import { connect } from 'react-redux';
import BadgeCard from '../../components/BadgeCard/BadgeCard';

class BadgeContainer extends Component {
  
  render() {
    const { yearStats } = this.props.userStats;
    const { elevation } = this.props.badges;
    return (
      <main>
        {this.props.userStats.yearStats && 
          <BadgeCard 
            current={yearStats.elevation_gain}
            goal={elevation}/>
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