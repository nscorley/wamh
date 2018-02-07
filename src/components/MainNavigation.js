import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const MainNavigation = () => (
  <div id="main-navigation">
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">WAMH Radio</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Home
          </NavItem>
          <NavItem eventKey={2} href="#">
            Blogs & Stories
          </NavItem>
          <NavItem eventKey={2} href="#">
            Schedule
          </NavItem>
          <NavItem eventKey={2} href="#">
            Get Involved
          </NavItem>
          <NavItem eventKey={2} href="#">
            Contact
          </NavItem>
        </Nav>
        {/* <Nav pullRight>
          Information about current playing here...
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default MainNavigation;
