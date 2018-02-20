import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({userName, userPicture}) => {
  return (
    <header className="header-container"> 
      <img className="profile-img" src={userPicture} alt="USER" />
      <span className="welcome">Welcome, {userName}</span>
      <h1 className="page-title">C<span className="cog">o</span>g L<span className="cog">o</span>ckr</h1> 
    </header>
  );
};

Header.propTypes = {
  userName: PropTypes.string,
  userPicture: PropTypes.string
};

export default Header;