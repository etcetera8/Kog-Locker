import React from 'react';
import './Footer.css';
import logo from '../../assets/stravaLogo.png';

const Footer = () => {
  return (
    <footer>
      <img className="strava-logo" src={logo} />
    </footer>
  );
};

export default Footer;