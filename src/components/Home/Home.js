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

export class Home extends Component {
  
  render() {
    const { yearStats } = this.props.userStats;
    return (
      <main>
        <StatsCard yearStats={yearStats}/>
        { yearStats &&
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

export const mapStateToProps = (state) => ({
  userStats: state.userStats,
  badges: state.defaultBadges,
  userTarget: state.userTarget
});

const wrapper = GoogleApiWrapper({apiKey:gKey})(Home);

Home.propTypes = {
  userTarget: PropTypes.object.isRequired,
  userStats: PropTypes.object.isRequired,
  badges: PropTypes.object.isRequired,
  google: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps)(wrapper));