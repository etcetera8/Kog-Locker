import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatsCard from '../../components/StatsCard/StatsCard';
import PropTypes from 'prop-types';

export class StatsContainer extends Component {

  cardCreator = (propName, propValue) => {
    const variableAttribute = { [propName]: propValue };
    return (
      <StatsCard {...variableAttribute} /> 
    );
  }

  render() {
    const { yearStats, all_ride_totals, recent_ride_totals } = this.props.userStats;
    return (
      <main>
        {this.cardCreator('yearStats', yearStats)}
        {this.cardCreator('allStats', all_ride_totals)}
        {this.cardCreator('recentStats', recent_ride_totals)}
      </main>
    );
  }
}

export const mapStateToProps = (state) => ({
  userStats: state.userStats
});

StatsContainer.propTypes = {
  userStats: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(StatsContainer);