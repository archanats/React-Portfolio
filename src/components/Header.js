import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from 'react-bootstrap';

import About from './About';

class Header extends Component {
  state = { isNavOpen: false };

  toggleNav = () => this.setState({ isNavOpen: !this.state.isNavOpen });

  render() {
    return (
      <>
        <Navbar expand="md" variant="dark" >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="/jokes">Jokes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
