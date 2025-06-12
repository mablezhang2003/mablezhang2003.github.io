import React from 'react';

function ProjectCard({ title, image, description, githubLink, children }) {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
      {githubLink && (
        <a
          className="project-link"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
