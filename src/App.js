import React, { Component } from 'react';

import Projects from './components/Projects';
import SocialProfiles from './components/SocialProfiles';

import profilePic from './assets/archana.jpeg';
import About from './components/About';

class App extends Component {
  state = {
    displayBio: false,
  };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <About displayBio={this.state.displayBio} toggleDisplayBio={this.toggleDisplayBio} profilePic={profilePic}/>
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
