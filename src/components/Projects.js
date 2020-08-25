import React, { Component } from 'react';

import PROJECTS from '../data/projects';

class Project extends Component {
  render() {
    const { project } = this.props;
    return (
      <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
        <h3>{project.title}</h3>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: 200, height: 120 }}
        />
        <p>{project.description}</p>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted Projects</h2>
        <div>
          {PROJECTS.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
