import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StatsCard from '../StatsCard/StatsCard';
class StatsContainer extends Component {
  render() {
    return (
      <main>
        <StatsCard yearStats={this.props.userStats.yearStats}/>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  userStats: state.userStats
})

export default withRouter(connect(mapStateToProps)(StatsContainer))