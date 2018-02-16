import React, { Component } from 'react';
import { connect } from 'react-redux';
import BadgeCard from '../../components/BadgeCard/BadgeCard';

  // const climbGoal = (elevation, goal) => {
  //   //const current = this.props.userStats.yearStats.elevation_gain;
  //   //const goal = this.props.badges.elevation;
  //   const percent = (elevation/goal) * 100;
  //   return percent;
  // }

class BadgeContainer extends Component {
  
  render() {
    const { yearStats } = this.props.userStats;
    const { elevation } = this.props.badges;
    return (
      <main>
        {this.props.userStats.yearStats && 
          <BadgeCard 
            current={this.props.userStats.yearStats.elevation_gain}
            goal={this.props.badges.elevation}/>
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