import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix missing marker icon issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function MapCard({ bgColor, cardData }) {
  return (cardData.lat !== null || cardData.lng !== null) ? (
    <div className="bg-white p-5 rounded-xl shadow border border-gray-300 hover:shadow-lg transition-shadow duration-300 w-full h-fit">
      {/* Badge */}
      <span
        className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-3 text-white"
        style={{ backgroundColor: bgColor }}
      >
        Maps
      </span>

      {/* Map */}
      <div className="relative z-0">
        <MapContainer
          center={[cardData.lat, cardData.lng]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-[240px] w-full rounded-lg mb-4"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />
          <Marker position={[cardData.lat, cardData.lng]}>
            <Popup>
              {cardData.address || "Pinned Location"}
              <br />({cardData.lat.toFixed(5)}, {cardData.lng.toFixed(5)})
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Address Section */}
      {cardData.address && (
        <div className="text-sm text-gray-700 mb-2">
          <span className="font-semibold">Address:</span> {cardData.address}
        </div>
      )}

      {/* Context Section */}
      {cardData.context && (
        <div className="text-sm text-gray-600 italic">
          💬 {cardData.context}
        </div>
      )}
    </div>
  ) : (
    <div className="bg-white p-5 rounded-xl shadow border border-gray-300 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <span
          className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 text-white"
          style={{ backgroundColor: bgColor }}
        >
          Maps
        </span>

        <h3 className="font-semibold text-gray-800 text-lg mb-2">
          {cardData.address}
        </h3>

        <div className="text-sm text-gray-700 mb-2">
          <p>
            <span className="font-medium">Context:</span> {cardData.context}
          </p>
        </div>

        <p>Lat: Could not be determined</p>
        <p>Lng: Could not be determined</p>
      </div>
    </div>
  );
}
