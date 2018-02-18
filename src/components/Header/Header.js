import React from 'react';
import './Header.css';


const Header = ({userName, userPicture}) => {
  return (
    <header className="header-container"> 
      <img className="profile-img" src={userPicture} alt="profile picture" />
      <span className="welcome">Welcome, {userName}</span>
      <h1 className="page-title">C<span className="cog">o</span>g L<span className="cog">o</span>ckr</h1> 
    </header>
  );
};

export default Header;