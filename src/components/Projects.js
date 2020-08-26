import React from 'react';

import PROJECTS from '../data/projects';

const Project = ({ project }) => (
  <div className="col-12 col-sm-6 col-md-4 p-2 mt-2">
    <h3>{project.title}</h3>
    <img
      src={project.image}
      alt={project.title}
      style={{ width: 200, height: 120 }}
    />
    <p className="mb-2">{project.description}</p>
  </div>
);

const Projects = () => (
  <div className="row">
    <div clasName="col-10 justify-content-around text-center">
    <h2>Highlighted Projects</h2>
      {PROJECTS.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default Projects;
