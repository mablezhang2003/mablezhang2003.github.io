import React from 'react';
import ProjectCard from './ProjectCard';
import '../App.css';
import trashCleanupImg from '../assets/trashcleanup.png';
import worldGenImg from '../assets/world-generation.png';
import cookCountyImg from '../assets/cook-county.png';
import neuralNetworkImg from '../assets/neural-network.jpeg';
import antsBeesImg from '../assets/ants-bees.png';

function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects and Work Samples</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Trash Cleanup Optimal Routing"
          image={trashCleanupImg}
          description="Developed a routing algorithm for trash collection in New York City using Vehicle Routing Problem (VRP) and a Geodesic Distance matrix in Python, used heat maps and clustering to identify high-density areas and prioritize cleanup efforts"
        />

        <ProjectCard
          title="Feedforward and Convolutional Neural Networks"
          image={neuralNetworkImg}
          description="Implemented a two-layer neural network and CNN from scratch using NumPy. Trained models on Iris and MNIST datasets. Explored learning rates, network sizes, and transfer learning with CIFAR-10 in PyTorch."
        />

        <ProjectCard
          title="World Generation Game"
          image={worldGenImg}
          description="Developed procedural world generation using noise functions and tile-based rendering in a real-time game simulation."
        />

        <ProjectCard
          title="Cook County Housing Gov Data Set"
          image={cookCountyImg}
          description="Built a data pipeline to remove outliers and transform data, conducted feature engineering, and trained a linear regression model to predict housing prices from 60+ features."
        />

        <ProjectCard
          title="Ants vs. Bees Game"
          image={antsBeesImg}
          description="Built a Python tower defense game with ant units that collect food, throw projectiles, absorb damage, and apply status effects to invading bees, all using class inheritance and a real-time GUI."
        />
      </div>
    </section>
  );
}

export default Projects;
