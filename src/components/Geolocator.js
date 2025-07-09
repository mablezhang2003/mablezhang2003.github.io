import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const dotIcon = L.divIcon({
    className: 'custom-dot',
    html: '<span style="background-color: #ff8000; width: 10px; height: 10px; display: block; border-radius: 50%;"></span>',
    iconSize: [10, 10],
    iconAnchor: [5, 5]
});

L.Marker.prototype.options.icon = dotIcon;

function FitBounds({ markers }) {
            const map = useMap();

    useEffect(() => {
        if (markers.length > 0) {
            const bounds = L.latLngBounds(markers.map(marker => marker.coords));
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [markers, map]);

    return null;
}

const Geolocator = () => {
    const [address, setAddress] = useState('');
    const [markers, setMarkers] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.post('https://geolocator-2ldv.onrender.com/get_coords', {
                addresses: [address]
            });
            const data = response.data;
            if (data && data.length > 0 && data[0].coordinates) {
                const { longitude, latitude } = data[0].coordinates;
                setMarkers([{ coords: [latitude, longitude], name: data[0].address }]);
            } else {
                alert('Coordinates not found for the given address.');
            }
        } catch (error) {
            alert('Error fetching coordinates. Please try again.');
            console.error(error);
        }
    };

    const handlePlotTrashLocations = async () => {
        try {
            const response = await axios.get('https://geolocator-2ldv.onrender.com/get_trash_locations');
            const data = response.data;
            if (data && data.length > 0) {
                const newMarkers = data
                    .filter(loc => loc.coordinates)
                    .map(loc => ({
                        coords: [loc.coordinates.latitude, loc.coordinates.longitude],
                            name: loc.address
                        }));
                setMarkers(newMarkers);
            } else {
                alert('Coordinates not found for the given address.');
            }
        } catch (error) {
            alert('Error fetching coordinates. Please try again.');
            console.error(error);
        }
    };

    const initialPosition = [40.7128, -74.0060];
    const initialZoom = 12;
    const commonHeight = '40px';

    return (
        <div>
            <div style={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <input
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder="Enter address"
                    style={{
                        width: '300px',
                        marginRight: '10px',
                        height: commonHeight,
                        padding: '0 10px',
                        boxSizing: 'border-box'
                    }}
                />
                <button
                    onClick={handleSearch}
                    style={{
                        height: commonHeight,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    Search Address
                </button>
                <button
                    onClick={handlePlotTrashLocations}
                    style={{
                        height: commonHeight,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    Plot Trash Locations
                </button>
            </div>

            <style>
                {`.leaflet-div-icon.custom-dot {
                    background-color: transparent;
                    border: none;
                }`}
            </style>

            <div className="map-container" style={{
                height: "500px",
                width: "100%",
                margin: "20px 0",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden"
            }}>
                <MapContainer
                    center={initialPosition}
                    zoom={initialZoom}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    />

                    {markers.map((marker, index) => (
                        <Marker key={index} position={marker.coords} icon={dotIcon}>
                            <Popup>
                                <div style={{ color: '#333' }}>
                                    <strong>{marker.name}</strong>
                                    <p style={{ margin: '5px 0 0', color: '#666' }}>Located here</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}

                    <FitBounds markers={markers} />
                </MapContainer>
            </div>
        </div>
    );
};

export default Geolocator;
