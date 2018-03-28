import React from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Switch, Route } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import MainNavigation from './MainNavigation';
import Footer from './Footer';
import WelcomeScreen from './WelcomeScreen';
import About from './About';
import GetInvolved from './GetInvolved';
import Schedule from './Schedule';
import Contact from './Contact';
import MobileMenuSlider from './MobileMenuSlider';

import { schedule } from '../utils/constants';

// TODO: all of these should be .env
// mixlr url
const url = 'http://edge.mixlr.com/channel/fltfb';

// api key
const lastFMKey = '8a45f3213c7165bc062264f933d699b2';

// last fm apis
const endpoint = 'http://ws.audioscrobbler.com/2.0/';
const lastFMUser = 'WAMH_OFFICIAL';
const songLimit = 10;

export default class MainWebsite extends React.Component {
  // TODO: do this in redux? or container component
  state = {
    volume: 0.8,
    muted: false,
    playing: false,
    recentTracks: null,
    albumInformation: null,
    showName: null,
    mobileMenuOpen: false,
    loading: true,
  }

  componentDidMount = () => {
    // fetch list of recently played songs (includes current song)
    this.fetchRecentlyPlayed();

    // check every five seconds
    this.interval = setInterval(this.fetchRecentlyPlayed, 10000);
  }

  componentWillUnmount = () => {
    // stop regular checking
    clearInterval(this.interval);
  }

  /**
   * Fetches the album information (including art) given the album name and artist
   * @param  {string} album
   * @param  {string} artist
   */
  fetchAlbumInformation = (album, artist) => {
    // get album information
    axios.get(endpoint, {
      params: {
        method: 'album.getinfo',
        api_key: lastFMKey,
        artist,
        album,
        format: 'json',
      },
    })
      .then((response) => {
        this.setState({ albumInformation: response.data.album });
        const that = this;
        // TODO: remove this once we actually fetch more stuff
        setTimeout(() => that.setState({ loading: false }), 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchRecentlyPlayed = () => {
    // get recently played tracks
    axios.get(endpoint, {
      params: {
        method: 'user.getrecenttracks',
        user: lastFMUser,
        api_key: lastFMKey,
        format: 'json',
        limit: songLimit,
      },
    })
      .then((response) => {
        const recent = response.data.recenttracks.track;

        // if the recently played track changed
        if (!this.state.recentTracks || recent[0].name !== this.state.recentTracks[0].name) {
          // TODO: transition here...
          this.setState({ recentTracks: recent });
          this.fetchAlbumInformation(recent[0].album['#text'], recent[0].artist['#text']);
        } else {
          console.log("They're the same!");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // TODO: do this only when it changes...
    // also, check to see which show is playing
    const d = new Date();
    const day = d.getDay();
    const hours = d.getHours();
    this.setState({ showName: schedule[day][hours] });
  }

  // handles
  toggleRadio = () => this.setState({ playing: !this.state.playing })
  handleMute = () => this.setState({ muted: !this.state.muted })
  handleVolumeChange = newVolume => this.setState({ volume: newVolume });
  handleSelect = (key) => {
    this.props.history.push(key);
  };
  toggleMobileMenu = () => this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen })
  handleMobileMenuStateChange = state => this.setState({ mobileMenuOpen: state.isOpen })


  render() {
    return (
      <div id="bootstrap-overrides">
        {/* Loader */}
        <div id="loader-overlay" style={{ display: this.state.loading ? 'block' : 'none' }}>
          <div id="loader-div" />
        </div>

        {/* Radio stream component - invisible on page, only plays audio */}
        <ReactPlayer
          url={url}
          playing={this.state.playing}
          volume={this.state.volume}
          muted={this.state.muted}
          style={{ display: 'none' }}
        />

        {/*  Mobile drop-down menu */}
        <MobileMenuSlider
          mobileMenuOpen={this.state.mobileMenuOpen}
          handleMobileMenuStateChange={this.handleMobileMenuStateChange}
          toggleMobileMenu={this.toggleMobileMenu}
        />

        {/* Always render navigation */}
        <MainNavigation
          toggleRadio={this.toggleRadio}
          recentTracks={this.state.recentTracks}
          albumInformation={this.state.albumInformation}
          showName={this.state.showName}
          handleSelect={this.handleSelect}
          playing={this.state.playing}
          mobileMenuOpen={this.state.mobileMenuOpen}
          toggleMobileMenu={this.toggleMobileMenu}
        />

        {/*  Based on the URL, render correct page */}
        <Switch>
          <Route
            path="/getinvolved"
            exact
            component={GetInvolved}
          />
          <Route
            path="/schedule"
            exact
            component={Schedule}
          />
          <Route
            path="/about"
            exact
            component={About}
          />
          <Route
            path="/contact"
            exact
            component={Contact}
          />
          {/* Wild-card route to home page, fallback option */}
          <Route
            path="/*"
            exact
            render={props =>
              (<WelcomeScreen
                {...props}
                toggleRadio={this.toggleRadio}
                showName={this.state.showName}
                playing={this.state.playing}
              />)
            }
          />
        </Switch>

        {/*  Always render footer */}
        <Footer />
      </div>
    );
  }
}
