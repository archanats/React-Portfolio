import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from 'react-bootstrap';

import About from './About';
import { NavbarText } from 'reactstrap';

class Header extends Component {
  state = { isNavOpen: false };

  toggleNav = () => this.setState({ isNavOpen: !this.state.isNavOpen });

  render() {
    return (
      <>
        <Navbar expand="md" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavbarText>&#123; archanats &#125;</NavbarText>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link
                href="https://maestro-de-musica.netlify.app/"
                target="_blank"
              >
                Maestro de Musica
              </Nav.Link>
              <Nav.Link href="/jokes">Jokes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
