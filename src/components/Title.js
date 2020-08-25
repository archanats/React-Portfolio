import React, { Component } from 'react';

const TITLES = [
  'a software engineer',
  'a test engineer',
  'a team player',
  'an enthusiastic learner',
  'a go getter',
];

class Title extends Component {
  state = { titleIdx: 0 };

  animateTitles = () => {
    setInterval(() => {
      const titleIdx = (this.state.titleIdx + 1) % TITLES.length;
      this.setState({ titleIdx });
    }, 4000);
  };

  componentDidMount() {
    this.animateTitles();
  }

  render() {
    const title = TITLES[this.state.titleIdx];

    return <p>I am {title}</p>;
  }
}

export default Title;
