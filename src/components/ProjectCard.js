import React from 'react';

function ProjectCard({ title, image, description, downloadLink, children }) {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
      {downloadLink && (
        <a className="project-link" href={downloadLink} download>
          Download Code
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
