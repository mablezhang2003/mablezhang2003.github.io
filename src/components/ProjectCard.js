import React from 'react';

function ProjectCard({title, image, description, githubLink, children}) {
    return (
        <a className="project-card"
           href={githubLink}
           target="_blank"
           rel="noopener noreferrer"
           style={{textDecoration: "none", color: "inherit"}}
        >
            {image && <img src={image} alt={title} className="project-image"/>}
            <h3>{title}</h3>
            <p>{description}</p>
            {children}
        </a>
    );
}

export default ProjectCard;
