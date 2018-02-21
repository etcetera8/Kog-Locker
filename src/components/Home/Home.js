import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { GoogleApiWrapper } from 'google-maps-react';
import {gKey} from '../../apiKey.js';
import PropTypes from 'prop-types';

import StatsCard from '../StatsCard/StatsCard';
import BadgeCard from '../BadgeCard/BadgeCard';
import MapCard from '../MapCard/MapCard';
import './Home.css';

class Home extends Component {
  
  render() {
    const {yearStats, all_ride_totals} = this.props.userStats
    const { yearElevation, yearDistance, allDistance, allElevation } = this.props.badges;
    return (
      <main>
        <StatsCard yearStats={yearStats}/>
        {yearStats &&
        <BadgeCard />
        }
        <MapCard 
          google={this.props.google}
          userTarget={this.props.userTarget}
        />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  userStats: state.userStats,
  badges: state.defaultBadges,
  userTarget: state.userTarget
});

const wrapper = GoogleApiWrapper({apiKey:gKey})(Home)

Home.propTypes = {
  userTarget: PropTypes.object.isRequired,
  userStats: PropTypes.object.isRequired,
  badges: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps)(wrapper));