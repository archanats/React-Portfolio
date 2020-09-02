import React from 'react';
import { Card } from 'react-bootstrap';

import PROJECTS from '../data/projects';

const Project = ({ project }) => (
  <Card className="h-100">
    <Card.Title className="pt-2">{project.title}</Card.Title>
    <a href={project.link} target="_blank"><Card.Img src={project.image} className="project-img"></Card.Img></a>
    <Card.Body>
      {project.description}
    </Card.Body>
  </Card>
);

const Projects = () => (
  <>
    <div className="row" id="projects">
      <h2 className="col-12 mx-auto py-2">Highlighted Projects</h2>
    </div>
    <div className="row">
      {PROJECTS.map((project) => (
        <div key={project.id} className="col-12 col-md-6 col-lg-4 mx-auto mt-3">
          <Project project={project} />
        </div>
      ))}
    </div>
  </>
);

export default Projects;
