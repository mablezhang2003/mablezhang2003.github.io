import React from 'react';

function ProjectCard({ title, image, description, link, children }) {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
      {link && (
        <a className="project-link" href={link} target="_blank" rel="noreferrer">
          Visit Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
