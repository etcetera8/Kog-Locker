import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StatsCard from '../StatsCard/StatsCard';
import BadgeCard from '../BadgeCard/BadgeCard';
import MapCard from '../MapCard/MapCard';
import './Home.css';

class Home extends Component {
  
  render() {
    const {yearStats} = this.props.userStats
    const { elevation } = this.props.badges;
    console.log(yearStats);
    return (
      <main>
        <StatsCard yearStats={yearStats}/>
        {yearStats &&
        <BadgeCard
          current={yearStats.elevation_gain}
          goal={elevation} 
        />
        }
        <MapCard />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  userStats: state.userStats,
  badges: state.defaultBadges

});

export default withRouter(connect(mapStateToProps)(Home));