import React from 'react';

function ProjectElement({ project }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={project.image} className="card-img-top" alt={project.alt} />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.link1.link} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">{project.link1.name}</a>
          {project.link2 && <a href={project.link2.link} className="btn btn-secondary ms-2" target="_blank" rel="noopener noreferrer">{project.link2.name}</a>}
        </div>
      </div>
    </div>
  );
}

export default ProjectElement;
