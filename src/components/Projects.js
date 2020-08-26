import React from 'react';

import PROJECTS from '../data/projects';

const Project = ({ project }) => (
  <div className="col-xs-12 col-sm-6 col-md-4 p-3 mt-3">
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
  <>
    <div className="row">
      <h2 className="col-12 mx-auto">Highlighted Projects</h2>
    </div>
    <div className="row">
      {PROJECTS.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  </>
);

export default Projects;
