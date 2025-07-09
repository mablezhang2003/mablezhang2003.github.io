import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const defaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

function MapMover({ coords }) {
    const map = useMap();
    if (coords) {
        map.setView(coords, map.getZoom());
    }
    return null;
}

const Geolocator = () => {
    const [address, setAddress] = useState('');
    const [marker, setMarker] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.post('https://geolocator-2ldv.onrender.com/get_coords', {
                addresses: [address]
            });
            const data = response.data;

            if (data && data.length > 0 && data[0].coordinates) {
                const { longitude, latitude } = data[0].coordinates;
                setMarker({ coords: [latitude, longitude], name: data[0].address });
            } else {
                alert('Coordinates not found for the given address.');
            }
        } catch (error) {
            alert('Error fetching coordinates. Please try again.');
            console.error(error);
        }
    };

    const commonHeight = '40px';

    return (
        <div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
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
            </div>

            <div className="map-container" style={{
                height: "500px",
                width: "100%",
                margin: "20px 0",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden"
            }}>
                <MapContainer
                    center={marker ? marker.coords : [40.7128, -74.0060]}
                    zoom={12}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    />

                    {marker && <MapMover coords={marker.coords} />}

                    {marker && (
                        <Marker position={marker.coords}>
                            <Popup>
                                <div style={{ color: '#333' }}>
                                    <strong>{marker.name}</strong>
                                    <p style={{ margin: '5px 0 0', color: '#666' }}>Located here</p>
                                </div>
                            </Popup>
                        </Marker>
                    )}
                </MapContainer>
            </div>
        </div>
    );
};

export default Geolocator;
