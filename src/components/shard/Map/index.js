import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ location }) => {
    const { latitude, longitude } = location;

    // Custom map icon
    const customIcon = L.icon({
        iconUrl: '/images/map-pointer.svg', 
        iconSize: [90, 90], 
        iconAnchor: [19, 38], 
        popupAnchor: [0, -38]
    });

    const ChangeView = ({ center }) => {
        const map = useMap();
        map.setView(center, map.getZoom());
        return null;
    };

    return (
        <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: "500px", width: "100%" }}>
            <ChangeView center={[latitude, longitude]} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[latitude, longitude]} icon={customIcon}>
                <Popup>
                    Your Location
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
