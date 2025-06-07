import React from 'react';
import ProjectCard from './ProjectCard';
import '../App.css';
import trashCleanupImg from '../assets/trashcleanup.png';
import worldGenImg from '../assets/world-generation.png';
import cookCountyImg from '../assets/cook-county.png';

function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects and Work Samples</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Trash Cleanup Optimal Routing "
          image={trashCleanupImg}
          description="Developed a routing algorithm for trash collection in New York City using Vehicle Routing Problem (VRP) and a Geodesic Distance matrix in Python, used heat maps and clustering to identify high-density areas and prioritize cleanup efforts"
        />

        <ProjectCard
          title="World Generation Game"
          image={worldGenImg}
          description='Developed a routing algorithm for trash collection in New York City using Vehicle Routing Problem (VRP) and a Geodesic Distance matrix in Python, used heat maps and clustering to identify high-density areas and prioritize cleanup efforts'
        />

        <ProjectCard
          title="Cook County Housing Gov Data Set"
          image={cookCountyImg}
          description="Built a data pipeline to remove outliers and transform data to feed into the model and conducted feature engineering
to train a linear regression model to determine the predictive power of 60+ features on housing price"
        >
        </ProjectCard>
      </div>
    </section>
  );
}

export default Projects;
