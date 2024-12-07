import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const WebMap = () => (
  <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: 200, width: '100%' }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>A pretty popup.</Popup>
    </Marker>
  </MapContainer>
);
