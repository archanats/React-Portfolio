import React from 'react';
import Header from './Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Jokes from './Jokes';
import SocialProfiles from './SocialProfiles';

const Main = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/jokes" component={Jokes} />
        <Redirect to="/home" />
      </Switch>
      <SocialProfiles />
    </>
  );
};

export default Main;
