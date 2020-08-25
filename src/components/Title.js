import React, { Component } from 'react';

const TITLES = [
  'a software engineer',
  'a test engineer',
  'a team player',
  'an enthusiastic learner',
  'a go getter',
];

class Title extends Component {
  state = { titleIdx: 0, fadeIn: true };

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIdx = (this.state.titleIdx + 1) % TITLES.length;
      this.setState({ titleIdx, fadeIn: true });
      this.timeOut = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 4000);
  };

  componentDidMount() {
    this.timeOut = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    this.animateTitles();
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearInterval(this.timeOut);
  }

  render() {
    const { titleIdx, fadeIn } = this.state;
    const title = TITLES[titleIdx];

    return (
      <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>
        I am {title}
      </p>
    );
  }
}

export default Title;
