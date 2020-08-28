import React, { Component } from 'react';
import Header from './Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Jokes from './Jokes';
import SocialProfiles from './SocialProfiles';

class Main extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route
            exact
            path="/home"
            render={() => (
              <Home
                displayBio={this.state.displayBio}
                toggleDisplayBio={this.toggleDisplayBio}
              />
            )}
          />
          <Route exact path="/jokes" component={Jokes} />
          <Redirect to="/home" />
        </Switch>
        <SocialProfiles />
      </>
    );
  }
}

export default Main;
