import React from "react";
import { Marker, Popup } from "react-leaflet";
import { CustomizeIcon } from "../CustomizeIcon";
import "leaflet/dist/leaflet.css";

const Markers = ({ messages }) => {
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

  console.log(messages);
  const pintarMarkers = () => {
    console.log("aca");
    return messages.map((p, index) => {
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

  return <>{messages.length > 0 ? pintarMarkers() : <></>}</>;
};

export default Markers;
