import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { HamburgerButton } from 'react-hamburger-button';
import LOGO_IMAGE from '../assets/logo.png';
import RECORD_IMAGE from '../assets/record.png';
import NO_RECORD_IMAGE from '../assets/no-record.png';

// TODO: display previously played songs

const MainNavigation = ({
  toggleRadio,
  recentTracks,
  albumInformation,
  showName,
  handleSelect,
  playing,
  mobileMenuOpen,
  toggleMobileMenu,
  match,
}) => {
  const selected = match.url || '/welcome';
  // TODO: better off air message
  let nowPlaying;
  // TODO: overall loader instead of this
  if (!recentTracks || !albumInformation) {
    nowPlaying = (
      <div id="now-playing">
        <div id="current-info-container">
          <div>
              LOADING...
          </div>
        </div>
      </div>
    );
  } else if (showName) {
    const track = recentTracks[0];
    nowPlaying = (
      <div id="now-playing">
        <div
          role="button"
          tabIndex={0}
          onClick={toggleRadio}
          onKeyDown={toggleRadio}
        >
          {/*  TODO: animate play/pause transition */}
          <span style={{ display: playing ? 'inline' : 'none' }}>
            <i className="fas fa-pause" />
          </span>
          <span style={{ display: playing ? 'none' : 'inline' }}>
            <i className="fas fa-play" />
          </span>
        </div>
        {/*  TODO: crossfade images when album art switches */}
        <img src={albumInformation.image[4]['#text'] || RECORD_IMAGE} alt="Cover art" />
        <div id="current-info-container">
          <span>
            <div id="now-playing-header">NOW PLAYING</div>
            <div id="show-information">{showName}</div>
          </span>
          <span>
            <div id="song-info"><span id="current-band"><b>{track.artist['#text']}</b></span>{` - ${track.name}`}</div>
          </span>
        </div>
      </div>
    );
  } else {
    nowPlaying = (
      <div id="now-playing">
        <i id="off-air-icon" className="fas fa-volume-off" />
        <img src={NO_RECORD_IMAGE} alt="Cover art" />
        <div id="off-air">
          &nbsp;OFF AIR
        </div>
      </div>
    );
  }

  return (
    <div id="main-navigation">
      <div id="left-panel">
        <Link to="/welcome">
          <img src={LOGO_IMAGE} alt="logo" />
        </Link>
        <div id="mobile-title">WAMH 89.3</div>
        {nowPlaying}
      </div>
      <div id="right-panel">
        <div id="top-section">
          <div id="call-in">
            <a href="tel:1-413-542-2288"><i className="fas fa-phone" />&nbsp;&nbsp;<span id="phone-number">(413)-542-2288</span></a>
          </div>
          <div id="social-group">
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/wamh-radio">
                <i className="fab fa-soundcloud" />
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/WAMHRadio/">
                <i className="fab fa-facebook-f" />
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/explore/locations/682608371/">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/wamhradio?lang=en">
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </div>

        {/*  TODO: volume control? */}
        <div id="mobile-menu">
          <HamburgerButton
            open={mobileMenuOpen}
            onClick={toggleMobileMenu}
            width={30}
            height={25}
            strokeWidth={1}
            color="white"
            animationDuration={0.5}
          />
        </div>

        <Nav
          bsStyle="tabs"
          activeKey={selected}
          onSelect={
              (key, e) => {
                e.preventDefault();
                handleSelect(key);
              }
            }
        >
          <NavItem eventKey="/welcome">
              WELCOME
          </NavItem>
          <NavItem eventKey="/schedule">
              SCHEDULE
          </NavItem>
          <NavItem eventKey="/getinvolved">
              GET INVOLVED
          </NavItem>
          <NavItem eventKey="/about">
              ABOUT
          </NavItem>
          <NavItem eventKey="/contact">
              CONTACT
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default withRouter(MainNavigation);
