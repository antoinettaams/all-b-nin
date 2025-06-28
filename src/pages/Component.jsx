import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = ({ contacts }) => {
  return (
    <MapContainer 
      center={[6.3725, 2.3589]} 
      zoom={10} 
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {contacts.map(contact => (
        <Marker key={contact.id} position={[contact.location.lat, contact.location.lng]}>
          <Popup>
            <div>
              <h3 className="font-bold">{contact.name}</h3>
              <p>{contact.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;