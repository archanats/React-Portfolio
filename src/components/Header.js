import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';

import About from './About';

class Header extends Component {
  style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30,
  };

  state = { isNavOpen: false, displayBio: false };

  toggleNav = () => this.setState({ isNavOpen: !this.state.isNavOpen });

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <Navbar expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
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
      </div>
    );
  }
}

export default Header;
