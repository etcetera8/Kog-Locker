import React, { Component } from 'react';
import { connect } from 'react-redux';
import BadgeCard from '../../components/BadgeCard/BadgeCard';

class BadgeContainer extends Component {

  render() {
    return (
      <main>
        <BadgeCard />
      </main>
    )
  }

}

const mapStateToProps = (state) => ({
  userStats: state.userStats
})

export default connect(mapStateToProps)(BadgeContainer)