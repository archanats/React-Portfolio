import React, { Component } from 'react';

import SOCIAL_PROFILES from '../data/socialProfiles';

class SocialProfile extends Component {
  render() {
    const { profile } = this.props;
    return (
      <span style={{ margin: 10}}>
        <a href={profile.link}>
          <img
            src={profile.image}
            alt="social-link"
            style={{ width: 35, height: 35 }}
          />
        </a>
      </span>
    );
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h3>Connect with me!</h3>
        <div>
          {SOCIAL_PROFILES.map((profile) => {
            return <SocialProfile key={profile.id} profile={profile} />;
          })}
        </div>
      </div>
    );
  }
}

export default SocialProfiles;
