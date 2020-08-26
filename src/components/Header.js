import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';

import About from './About';

class Header extends Component {
  state = { isNavOpen: false, displayBio: false };

  toggleNav = () => this.setState({ isNavOpen: !this.state.isNavOpen });

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <>
        <Navbar expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/jokes">
                    Jokes
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <About
          displayBio={this.state.displayBio}
          toggleDisplayBio={this.toggleDisplayBio}
        />
      </>
    );
  }
}

export default Header;
