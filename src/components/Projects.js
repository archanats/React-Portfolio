import React from 'react';

import PROJECTS from '../data/projects';

const Project = ({ project }) => (
  <>
    <h3>{project.title}</h3>
    <img src={project.image} alt={project.title} className="img-fluid" />
    <p className="mb-2">{project.description}</p>
  </>
);

const Projects = () => (
  <>
    <div className="row">
      <h2 className="col-10 mx-auto">Highlighted Projects</h2>
    </div>
    <div className="row">
      {PROJECTS.map((project) => (
        <div key={project.id} className="col-xs-10 col-md-6 col-lg-4 mx-auto p-3 mt-3">
          <Project project={project} />
        </div>
      ))}
    </div>
  </>
);

export default Projects;
