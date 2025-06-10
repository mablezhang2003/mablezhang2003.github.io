import React from 'react';

function ProjectCard({ title, image, description, githubLink, children }) {
  return (
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-link"
    >
      <div className="project-card">
        {image && <img src={image} alt={title} className="project-image" />}
        <h3>{title}</h3>
        <p>{description}</p>
        {children}
      </div>
    </a>
  );
}

export default ProjectCard;
