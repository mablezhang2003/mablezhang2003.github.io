import React, { useState } from 'react';
import NYCMap from "./NYCMap";

function Projects() {
    const [routeData, setRouteData] = useState(null);

    const fetchOptimalRoute = async () => {
        try {
            const response = await fetch('TRASH_API/api/pickup-locations');
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setRouteData(data);
            console.log('Fetched route data:', data);
        } catch (error) {
            console.error('Failed to fetch optimal route:', error);
        }
    };

    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                <div className="project">
                    <h3>Trash Collection Route Optimization</h3>
                    <p>Developed an algorithm to optimize trash collection routes in NYC using Python and Google OR-Tools.</p>
                    <NYCMap />
                    <button onClick={fetchOptimalRoute}>Calculate Optimal Route</button>
                    {routeData && (
                        <div className="route-data">
                            <h4>Optimal Route Data:</h4>
                            <pre>{JSON.stringify(routeData, null, 2)}</pre>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Projects;
