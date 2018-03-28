import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DJ_MANUAL from '../assets/WAMH-DJ-Manual-2016.pdf';
import CURRENT_SCHEDULE from '../assets/WAMH-Spring-2018-Schedule.pdf';


const Footer = () => (
  <div id="footer">
    <Grid>
      <Row id="wrapper">
        <Col lg={5} sm={4} xs={12}>
          <Row>
            <h2>89.3 WAMH Radio</h2>
          </Row>
          <Row>
            <p>The Pioneer Valley&#39;s Finest Music and News Since 1942.</p>
          </Row>
          <Row id="social-links">
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
          </Row>
        </Col>
        <Col lg={3} sm={4} xs={12}>
          <h4>NAVIGATION</h4>
          <hr />
          <ul>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="getinvolved">Get Involved</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </Col>
        <Col lg={4} sm={4} xs={12}>
          <h4>QUICK LINKS</h4>
          <hr />
          <ul>
            <li><a target="_blank" href={DJ_MANUAL}>DJ Manual</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="http://mixlr.com/wamh-radio/">Mixlr Online Radio</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.last.fm/user/WAMH_Official">Last.fm</a></li>
            <li><a target="_blank" href={CURRENT_SCHEDULE}>Program PDF</a></li>
          </ul>
        </Col>
      </Row>
    </Grid>
    <div id="credit"><a href="http://www.natecorley.com">Website by Nate Corley &#39;20</a></div>
  </div>
);

export default Footer;
