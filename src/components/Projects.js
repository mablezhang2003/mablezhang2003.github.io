import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects and Work Samples</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Trash Cleanup Optimal Routing "
          image="/assets/trashcleanup.png"
          description="Developed a routing algorithm for trash collection in New York City using Vehicle Routing Problem (VRP) and a Geodesic Distance matrix in Python, used heat maps and clustering to identify high-density areas and prioritize cleanup efforts"
        />

        <ProjectCard
          title="World Generation Game"
          image="/assets/world-generation.png"
          description='Developed a routing algorithm for trash collection in New York City using Vehicle Routing Problem (VRP) and a Geodesic Distance matrix in Python, used heat maps and clustering to identify high-density areas and prioritize cleanup efforts'
        />

        <ProjectCard
          title="Cook County Housing Gov Data Set"
          image="/assets/cook-county.png"
          description="Built a data pipeline to remove outliers and transform data to feed into the model and conducted feature engineering
to train a linear regression model to determine the predictive power of 60+ features on housing price"
        >
          <a className="project-link" href="https://pawty.ai" target="_blank" rel="noreferrer">
            Visit Pawty Website
          </a>
        </ProjectCard>
      </div>
    </section>
  );
}

export default Projects;
