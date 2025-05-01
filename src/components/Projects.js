import React from 'react';
import NYCMap from "./NYCMap";

function Projects() {
    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {/* Add your projects here */}
                <div className="project">
                    <h3>Trash Collection Route Optimization</h3>
                    <p>Developed an algorithm to optimize trash collection routes in NYC using Python and Google OR-Tools.</p>
                    <NYCMap />
                </div>
            </div>
        </section>
    );
}

export default Projects;
