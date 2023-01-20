import React from "react";
import { Marker, Popup } from "react-leaflet";
import { CustomizeIcon } from "./CustomizeIcon";
//import { MarkerIcon } from "./react-leaflet-icon";
import "leaflet/dist/leaflet.css";

const Markers = ({ points }) => {
  /* //Obtener color por el type
  const getColor = (type) => {
    switch (type) {
      case "Plops":
        return "red";
      case "Tracks":
        return "green";
      case "Blips":
        return "purple";
      default:
        break;
    }
  }; */

  const pintarMarkers = () => {
    return points.map((p, index) => {
      return (
        <div key={index}>
          <Marker
            position={p.geometry}
            radius={20}
            icon={CustomizeIcon(p.type)}
            key={index}
          >
            <Popup>
              {p.name}
              {p.type}
              <br /> Leyenda Customizable.
            </Popup>
          </Marker>
        </div>
      );
    });
  };

  return <>{points !== null ? pintarMarkers() : <></>}</>;
};

export default Markers;
