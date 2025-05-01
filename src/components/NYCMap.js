import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Marker icon setup
const defaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

const NYCMap = () => {
    const position = [40.7128, -74.0060]; // NYC coordinates

    const locations = [
        { name: "Times Square", coords: [40.7580, -73.9855] },
        { name: "Central Park", coords: [40.7829, -73.9654] },
        { name: "Statue of Liberty", coords: [40.6892, -74.0445] }
    ];

    return (
        <div className="map-container" style={{
            height: "500px",
            width: "100%",
            margin: "20px 0",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden"
        }}>
            <MapContainer
                center={position}
                zoom={12}
                style={{ height: "100%", width: "100%" }}
            >
                {/* Grey map tiles from CartoDB */}
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />

                {locations.map((loc, index) => (
                    <Marker key={index} position={loc.coords}>
                        <Popup>
                            <div style={{ color: '#333' }}>
                                <strong>{loc.name}</strong>
                                <p style={{ margin: '5px 0 0', color: '#666' }}>New York, NY</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default NYCMap;
