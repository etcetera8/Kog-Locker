import React from 'react';
import './Header.css';
const Header = ({userName, userPicture}) => {
  console.log(userName, userPicture);
  return (
    <header className="header-container"> 
      <img className="profile-img" src={userPicture} alt="profile picture" />
      <span className="welcome">Welcome, {userName}</span>
      <h1>Personal Project</h1> 
    </header>
  )
}

export default Header;