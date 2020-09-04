import React from 'react';

import Title from './Title';
import profilePic from '../assets/archana.jpeg';

const About = ({ displayBio, toggleDisplayBio }) => (
  <div className="col-12 my-4 py-4 about">
    {/* <div className="jumbotron"> */}
    <h2 className="pb-3">{'<About />'}</h2>
    <img src={profilePic} alt="profile-pic" className="img-fluid profile" />
      <h2 className="pt-3">Hello World!</h2>
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
