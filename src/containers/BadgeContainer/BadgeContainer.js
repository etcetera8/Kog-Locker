import React, { Component } from 'react';
import { connect } from 'react-redux';
import Badge from '../Badge/Badge';
import PropTypes from 'prop-types';
import './BadgeContainer.css'

export class BadgeContainer extends Component {
  
  render() {
    const { yearStats } = this.props.userStats;
    
    return (
      <main className='badge-main-container'>
        { yearStats && 
          <Badge />
        }
      </main>
    );
  }
}

export const mapStateToProps = (state) => ({
  userStats: state.userStats
});

BadgeContainer.propTypes = {
  userStats: PropTypes.object.isRequired,
  badges: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(BadgeContainer);