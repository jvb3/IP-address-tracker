import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import ChangeView from "./ChangeView";

function OnMap({ coordinates, zoom }) {
  return (
    <MapContainer
      className="map-wrapper"
      center={[coordinates.lat, coordinates.lng]}
      zoom={zoom}
    >
      <ChangeView center={[coordinates.lat, coordinates.lng]} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coordinates.lat, coordinates.lng]} />
    </MapContainer>
  );
}

export default OnMap;
