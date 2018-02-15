import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StatsCard from '../StatsCard/StatsCard';

class StatsContainer extends Component {
  
  ytdCard = () => {
    return (
      <StatsCard 
        yearStats={this.props.userStats.yearStats}
        //allStats={this.props.userStats.all_ride_totals}
      />
      )
  }

  allCard = () => {
    console.log(this.props.userStats.all_ride_totals);
    return (
      <StatsCard allStats={this.props.userStats.all_ride_totals} />
    )
  }

  render() {
    console.log(this.props.userStats);
    return (
      <main>
        {this.ytdCard()}
        {this.allCard()}
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  userStats: state.userStats
})

export default withRouter(connect(mapStateToProps)(StatsContainer))