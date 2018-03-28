import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import LOGO_IMAGE from '../assets/logo.png';

const MobileMenuSlider = ({
  mobileMenuOpen,
  handleMobileMenuStateChange,
  toggleMobileMenu,
}) => (
  <div id="mobile-menu-slider">
    <Menu
      isOpen={mobileMenuOpen}
      onStateChange={state => handleMobileMenuStateChange(state)}
    >
      <span>
        <img src={LOGO_IMAGE} alt="logo" />
      </span>
      <Link to="/welcome" onClick={toggleMobileMenu}><i className="fas fa-home" /><span>WELCOME</span></Link>
      <Link to="/schedule" onClick={toggleMobileMenu}><i className="fas fa-calendar-alt" /><span>SCHEDULE</span></Link>
      <Link to="/getinvolved" onClick={toggleMobileMenu}><i className="fas fa-hand-point-up" /><span>GET INVOLVED</span></Link>
      <Link to="/about" onClick={toggleMobileMenu}><i className="fas fa-info-circle" /><span>ABOUT</span></Link>
      <Link to="/contact" onClick={toggleMobileMenu}><i className="fas fa-envelope" /><span>CONTACT</span></Link>

    </Menu>
  </div>
);

export default MobileMenuSlider;
