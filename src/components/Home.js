import React from 'react';

import Projects from './Projects';
import About from './About';

const Home = (props) => (
  <>
    <About
      displayBio={props.displayBio}
      toggleDisplayBio={props.toggleDisplayBio}
    />
    <div className="container-fluid projects">
      <Projects />
    </div>
  </>
);

export default Home;
