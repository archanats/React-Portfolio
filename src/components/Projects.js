import React from 'react';

import PROJECTS from '../data/projects';

const Project = ({ project }) => {
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
};

const Projects = () => {
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
};

export default Projects;
