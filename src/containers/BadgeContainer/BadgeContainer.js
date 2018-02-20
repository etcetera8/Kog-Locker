import React, { Component } from 'react';
import { connect } from 'react-redux';
import BadgeCard from '../../components/BadgeCard/BadgeCard';
import Badge from '../../components/Badge/Badge';
import PropTypes from 'prop-types';

class BadgeContainer extends Component {
  
  render() {
    const { yearStats } = this.props.userStats;
    const { yearElevation, yearDistance } = this.props.badges;
    return (
      <main className='badge-main-container'>
        {yearStats && 
          <Badge
            yearStats={yearStats}
            goalEl={yearElevation}
            goalDist={yearDistance}
          />
        }
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  userStats: state.userStats,
  badges: state.defaultBadges
})

BadgeContainer.propTypes = {
  userStats: PropTypes.object.isRequired,
  badges: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(BadgeContainer)