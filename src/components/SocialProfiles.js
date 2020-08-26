import React, { Component } from 'react';

import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = ({ profile }) => (
  <span style={{ margin: 10 }}>
    <a href={profile.link}>
      <img
        src={profile.image}
        alt="social-link"
        style={{ width: 35, height: 35 }}
      />
    </a>
  </span>
);

const SocialProfiles = () => (
  <div className="row">
    <h3>Connect with me!</h3>
    <div className="my-5 d-flex justify-content-center">
      {SOCIAL_PROFILES.map((profile) => {
        return <SocialProfile key={profile.id} profile={profile} />;
      })}
    </div>
  </div>
);

export default SocialProfiles;
