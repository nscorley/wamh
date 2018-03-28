import React from 'react';
import { Jumbotron, Glyphicon, Grid, Thumbnail, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GIRL_HOST_SRC from '../assets/board-background.jpeg';
import DJ_MANUAL from '../assets/WAMH-DJ-Manual-2016.pdf';
import OLD_EBOARD from '../assets/wamh-old-eboard.jpeg';

const WelcomeScreen = ({ toggleRadio, showName, playing }) => {
  const particleNumber = 100;
  // TODO: this is god damn awful
  const dots = [];
  for (let i = 0; i < particleNumber; i += 1) {
    dots.push('Meow');
  }

  const offAirMessage = (
    <span>Currently off air. Check out our <Link to="/schedule">schedule</Link>.</span>
  );

  return (
  // TODO: show different message if not live
    <div id="welcome-screen">
      <Jumbotron>
        <div>
          <h1>Listen to WAMH.</h1>
          <p>
            {showName ? `Live Now: ${showName}` : offAirMessage}
          </p>
        </div>
        <div id="wave-container" className={playing ? 'visible-wave' : 'hidden-wave'}>
          <div id="cushion">
            <div id="wave">
              {
              dots.map((d, i) => <div className="dot" key={i} />)
            }
            </div>
          </div>
        </div>
        <div>
          <span id="play-button" className="hvr-pulse">
            {
              showName ? (
                <Glyphicon glyph={playing ? 'pause' : 'play-circle'} className={playing ? 'live' : 'off'} onClick={toggleRadio} />
              ) : (
                <Glyphicon glyph="volume-off" />
              )
            }
          </span>
        </div>
      </Jumbotron>
      <div id="featured">
        <Grid>
          <div id="thumbnail-wrapper">
            <Thumbnail src="https://images.sk-static.com/images/media/img/col6/20170223-225429-365843.jpg" alt="Oshi">
              <h3>Oshi</h3>
              <p>Missed Oshi&#39;s performance at Amherst? Check out what you missed.</p>
              <p>
                <Button bsStyle="primary" target="_blank" href="https://twitter.com/oshimakesmusic/status/977579898771566592">Reactions</Button>&nbsp;
                <Button bsStyle="default" target="_blank" href="https://soundcloud.com/oshi">Music</Button>
              </p>
            </Thumbnail>
            <Thumbnail src={GIRL_HOST_SRC} alt="Girl Host">
              <h3>Become a DJ</h3>
              <p>We&#39;re always looking for new hosts. Become a part of the WAMH family today.</p>
              <p>
                <Link to="/getinvolved"><Button bsStyle="primary">Learn More</Button></Link>&nbsp;
                <Button bsStyle="default" href={DJ_MANUAL}>DJ Manual</Button>
              </p>
            </Thumbnail>
            <Thumbnail src={OLD_EBOARD} alt="242x200">
              <h3>Meet the Team</h3>
              <p>See what makes WAMH tick, and shoot us a message!
                We are always open to suggestions.
              </p>
              <p>
                <Link to="about"><Button bsStyle="primary">About Us</Button></Link>&nbsp;
                <Link to="contact"><Button bsStyle="default">Contact</Button></Link>
              </p>
            </Thumbnail>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default WelcomeScreen;
