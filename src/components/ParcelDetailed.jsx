// NPM packages
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Project files
import StatusIcon from "./StatusIcon";
import StatusWording from "./StatusWording";
import DateTime from "./DateTime";

export default function ParcelDetailed({ information }) {
  // Const
  const position = [
    informtion.location_coordinate_latitude,
    information.location_coordinate_longitude,
  ];

  // Components
  // var myMap = L.map('mapId').setView(position, 13);
  // var marker = L.marker(position).addTo(myMap);

  return (
    <div className="ParcelDetailed">
      <StatusIcon orderStatus={information.status} />
      <p className="data-label">Sender</p>
      <p className="data-actual">{information.sender}</p>
      <p className="data-label">Status</p>
      <StatusWording orderStatus={information.status} />
      <p className="data-label">Estimated time of arrival</p>
      <DateTime dateString={information.eta} />
      <p className="data-label">Parcel ID</p>
      <p className="data-actual">{information.parcel_id}</p>
      <p className="data-label">Pickup location</p>
      <p className="data-actual">{information.location_name}</p>
      <p className="data-label">User phone number</p>
      <p className="data-actual">{information.user_phone}</p>
      <p className="data-label">Verification required?</p>
      {information.verification_required ? (
        <p className="data-actual">Yes </p>
      ) : (
        <p className="data-actual">No</p>
      )}
      <p className="data-label">Notes</p>
      {information.notes != null ? (
        <p className="data-actual">{information.notes}</p>
      ) : (
        <p className="data-actual">None</p>
      )}
      <p className="data-label">Last updated</p>
      <DateTime dateString={information.last_updated} />
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
