import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { GoogleApiWrapper } from 'google-maps-react';
import {gKey} from '../../apiKey.js';

import StatsCard from '../StatsCard/StatsCard';
import BadgeCard from '../BadgeCard/BadgeCard';
import MapCard from '../MapCard/MapCard';
import './Home.css';

class Home extends Component {
  
  render() {
    const {yearStats} = this.props.userStats
    const { elevation, distance } = this.props.badges;
    return (
      <main>
        <StatsCard yearStats={yearStats}/>
        {yearStats &&
        <BadgeCard
          currentEl={yearStats.elevation_gain}
          goalEl={elevation}
          goalDist={distance}
          yearStats={yearStats} 
        />
        }
        <MapCard google={this.props.google}/>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  userStats: state.userStats,
  badges: state.defaultBadges

});

const wrapper = GoogleApiWrapper({apiKey:gKey})(Home)


export default withRouter(connect(mapStateToProps)(wrapper));