import React from 'react';
import { Grid, Thumbnail, Modal, Button, Image } from 'react-bootstrap';
import { eboard } from '../utils/constants';

export default class About extends React.Component {
  state = { show: false, member: eboard[0] }

  handleSelect = (member) => {
    // set state, then toggle modal
    this.setState({ member }, this.toggleModal);
  }
  toggleModal = () => this.setState({ show: !this.state.show })

  createCard = member => (
    <Thumbnail src={member.image} href="#" alt={member.name} onClick={() => this.handleSelect(member)}>
      <h3>{member.name}</h3>
      <p>{member.position}</p>
    </Thumbnail>
  )

  render() {
    const currentMember = this.state.member;
    return (
      <div id="about">
        <div id="general">
          <Grid>
            <h1>About WAMH Radio.</h1>
            <p>
              Welcome to WAMH Radio! At WAMH we provide the Pioneer Valley with the finest
              in Music, News and Sports on air. Operating at 89.3FM, WAMH operates out
              of Keefe Campus Center at Amherst College in Amherst, MA. Known for
              its alternative take on Music, WAMH is committed to playing new music
              every hour and delivering quality content for listeners of all types.
              Here at WAMH, we love providing students with the opportunity to express
              themselves through radio content. Moreover, WAMH prides itself as a major
              player in bringing concerts and events to the Amherst College campus.
              WAMH believes that radio is not only meant to fill t he empty auditory
              spaces in our cars, elevators and department stores, but also to bring
              people together, foster community and develop lasting relationships.
              Started in the 1940’s, WAMH Radio has been a center for symphonic
              stylings and exhilarating debate for nearly 75 years.
            </p>
            <br />
            <p> Looking for the WAMH online public file? Click <a href="https://publicfiles.fcc.gov/fm-profile/wamh">here</a>.</p>
          </Grid>
        </div>
        <div id="members">
          <Modal show={this.state.show} onHide={this.toggleModal} id="bio-modal">
            <Modal.Header closeButton>
              <div id="header-container">
                <div>
                  <Image src={currentMember.image} circle />
                </div>
                <div>
                  <h3>{currentMember.name}</h3>
                  <h4>{currentMember.position}</h4>
                </div>
              </div>
            </Modal.Header>
            <Modal.Body>
              <p>{currentMember.bio}</p>
            </Modal.Body>
          </Modal>
          <Grid>
            <h1>Leadership.</h1>
            <div id="bio-wrapper">
              {
                eboard.map(member => this.createCard(member))
              }
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}
