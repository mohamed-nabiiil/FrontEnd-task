"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useTranslation } from "react-i18next";
interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  zoom?: number;
}
const Map = (Map: MapProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <MapContainer
        zoom={Map.zoom || 13}
        center={Map.posix}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={Map.posix}>
          <Popup>
            <p>
              {/* <span className="text-[#47BC8A]">{t("Digi")}</span> */}
              {t("DigiFly Company")}
              <br />
              {t("Welcomes you")}
            </p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
