import React from 'react';

import Title from './Title';

const About = ({ displayBio, toggleDisplayBio }) => {
  return (
    <div className="jumbotron">
      <div className="container-fluid">
        {/* <img src={this.props.profilePic} alt="profile-pic" className="profile" /> */}
        <h1>Hello World!</h1>
        <p>My name is Archana.</p>
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
      </div>
    </div>
  );
};

export default About;
