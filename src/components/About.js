import React from 'react';

import Title from './Title';
import profilePic from '../assets/archana.jpeg';

const About = ({ displayBio, toggleDisplayBio }) => (
  <div className="col-12 my-4 py-4 about">
    {/* <div className="jumbotron"> */}
    <img src={profilePic} alt="profile-pic" className="img-fluid profile" />
      <h1>Hello World!</h1>
      <p>
        My name is <span className="dev-name">Archana</span>.
      </p>
      <Title />
      <p>I am always looking forward to working on meaningful projects.</p>
      {displayBio ? (
        <div>
          <p>I live in New Jersey and code everyday.</p>
          <p>My favorite language is JavaScript.</p>
          <button onClick={toggleDisplayBio} className="btn btn-yellow">
            Show Less
          </button>
        </div>
      ) : (
        <div>
          <button onClick={toggleDisplayBio} className="btn btn-yellow">
            Read More
          </button>
        </div>
      )}
    {/* </div> */}
  </div>
);

export default About;
