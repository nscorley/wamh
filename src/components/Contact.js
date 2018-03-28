import React from 'react';
import { Grid, Well, Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => (
  <div id="contact">
    <Grid>
      <h1>Contact WAMH.</h1>
      <p>Interested in learning more about WAMH Radio? Check out our&nbsp;
        <Link to="/about">About</Link> page, or shoot us a message. Please allow
        some time for a response.
      </p>
      <br />
      <hr />
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2"><i className="fas fa-check-circle" />&nbsp;<b>Primary Contact</b></Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Please direct all music submissions, PSAs and other media to: </p>
          <Well bsSize="small"><a><i className="fas fa-envelope" />wamh@amherst.edu</a></Well>
        </Panel.Body>
      </Panel>
      <hr />
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2"><i className="fas fa-briefcase" />&nbsp;<b>Business Contact</b></Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Please direct all feedback, general queries and event proposals to
            (music submissions to this email will be marked as spam):
          </p>
          <Well bsSize="small"><a href="mailto:wamhbusiness?Subject=Hello%20WAMH" target="_top"><i className="fas fa-envelope" />wamhbusiness@amherst.edu </a></Well>
          <br />
        </Panel.Body>
      </Panel>
      <hr />
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2"><i className="fas fa-hand-point-up" />&nbsp;<b>Request Line</b></Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>To call-in for the currently airing show:
          </p>
          <Well bsSize="small"><a href="tel:1-413-542-2288"><i className="fas fa-phone" />(413)-542-2288</a></Well>
          <br />
        </Panel.Body>
      </Panel>
      <hr />
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2"><i className="fas fa-briefcase" />&nbsp;<b>Business Line</b></Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>To call-in for business matters (similar to above business email):
          </p>
          <Well bsSize="small"><a href="tel:1-413-542-2244"><i className="fas fa-phone" />(413)-542-2244</a></Well>
          <br />
        </Panel.Body>
      </Panel>
    </Grid>
  </div>
);

export default Contact;
