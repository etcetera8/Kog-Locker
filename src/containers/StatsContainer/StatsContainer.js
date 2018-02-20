import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatsCard from '../../components/StatsCard/StatsCard';
import PropTypes from 'prop-types';

class StatsContainer extends Component {
  
  recentCard = () => {
    const { recent_ride_totals } = this.props.userStats;
    return (
      <StatsCard recentStats={recent_ride_totals} />
    )
  }

  ytdCard = () => {
    const { yearStats, all_ride_totals } = this.props.userStats;
    return (
      <StatsCard yearStats={yearStats} />
    )
  }

  allCard = () => {
    const { all_ride_totals } = this.props.userStats;
    return (
      <StatsCard allStats={all_ride_totals} />
    )
  }

  render() {
    return (
      <main>
        {this.ytdCard()}
        {this.allCard()}
        {this.recentCard()}
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  userStats: state.userStats
})

StatsContainer.propTypes = {
  userStats: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(StatsContainer)