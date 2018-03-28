import React from 'react';
import { Grid, Glyphicon, Tabs, Tab } from 'react-bootstrap';

const GetInvolved = () => (
  // TODO: not so ugly? Less font more images?
  <div id="get-involved">
    <div id="info-section">
      <Grid>
        <h1>Host Your Own Show.</h1>
        <p>
          Are you a student interested in Music, News or Sports?
          Would you like to be a part of the WAMH Radio family?
          If you would like to start your own radio show on WAMH check out the
          section below!
        </p>
        <br />
        <p>
          But first, if you love music or news and would like to get involved without doing a show,
          we have opportunities to write about music and organize events/concerts.
          Additionally, if you are looking for administrative experience, would
          like exposure to budgeting, or the inner workings of media/communications
          contact one of our E-board members about potential open positions.
          Moreover, WAMH will be performing workshops and tours in conjunction
          with NEPR, stay tuned for more information about upcoming programming.
          As always – feel free to stop by during business hours or get in touch
          with any of our board members for more information on how you can get
          involved with WAMH Radio.
        </p>
      </Grid>
    </div>
    <div id="step-section">
      <Grid>
        <p>
          A typical student program airs once a week for two hours*.
          Please see our Programming page for examples of current student programs
          to get a feel for what other students are doing at WAMH. In order to get
          your own show just follow these four easy steps!
        </p>
        <Tabs defaultActiveKey={1} id="steps">
          <Tab eventKey={1} title={<span><Glyphicon glyph="info-sign" /><h5>Attend Info Session</h5></span>}>
            <p>
              Come see us to schedule a DJ training! We will hold several scheduled
              training sessions at the beginning of each semester, but we can also
              schedule them by appointment. At your training session you will get
              the low-down on how to work the cool WAMH equipment.
            </p>
          </Tab>
          <Tab eventKey={2} title={<span><Glyphicon glyph="pencil" /><h5>Pass Our Exam </h5></span>}>
            <p>
              After your training you can either immediately take your DJ test or schedule
              it for another time. The DJ test is a 5-10 minute quiz about your training
              session and the contents of the WAMH DJ Manual. Click the hyper link
              to access a copy of the DJ manual.
            </p>
          </Tab>
          <Tab eventKey={3} title={<span><Glyphicon glyph="user" /><h5>Shadow a DJ</h5></span>}>
            <p>
            Sit in on a show with a current DJ to get the feel of what goes on at the studio.
            They will help show you the ropes, provide some helfpul tips and tricks,
            and give you a better idea what to expect.
            </p>
          </Tab>
          <Tab eventKey={4} title={<span><Glyphicon glyph="file" /><h5>Complete the Form</h5></span>}>
            <p>
             Once you pass your test, fill out a show request form and get scheduled!
             Whoo!
            </p>
          </Tab>
        </Tabs>
        <p>
          * We are willing to accommodate one hour programs on a case by case basis.
          We also welcome students to have more than one show per week.
        </p>
      </Grid>
    </div>

  </div>

);

export default GetInvolved;
