import React, { Component } from 'react';
import { connect } from 'react-redux';
import BadgeCard from '../../components/BadgeCard/BadgeCard';

class BadgeContainer extends Component {
  
  climbGoal = () => {
    const current = this.props.userStats.yearStats.elevation_gain;
    const goal = this.props.badges.elevation;
    const percent = (current/goal) * 100;
    return percent;
  }

  render() {
    console.log(this.props);
    return (
      <main>
        {this.props.userStats.yearStats && 
          <BadgeCard percentOfClimb={this.climbGoal()}/>
        }
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