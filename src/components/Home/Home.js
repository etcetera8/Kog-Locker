import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StatsCard from '../StatsCard/StatsCard'
import BadgeCard from '../../containers/BadgeCard/BadgeCard'
import MapCard from '../../containers/MapCard/MapCard'
import './Home.css';

class Home extends Component {
  
  render() {
    return (
      <main>
        <StatsCard yearStats={this.props.userStats.yearStats}/>
        <BadgeCard />
        <MapCard />
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  userStats: state.userStats
})

export default withRouter(connect(mapStateToProps)(Home));