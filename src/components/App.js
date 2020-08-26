import React, { Component } from 'react';

import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

import profilePic from '../assets/archana.jpeg';
import About from './About';

class App extends Component {
  state = {
    displayBio: false,
  };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <>
        <About
          displayBio={this.state.displayBio}
          toggleDisplayBio={this.toggleDisplayBio}
          profilePic={profilePic}
        />
        <div className="container">
          <Projects />
          <hr />
          <SocialProfiles />
        </div>
      </>
    );
  }
}

export default App;
