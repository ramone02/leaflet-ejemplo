import React, { useState, useEffect, useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "../Markers/Markers";
import Form from "../Form/Form";
import "leaflet/dist/leaflet.css";
import "./MapView.css";
import { SocketContext } from "../../context/SocketContext";

const MapView = () => {
  const { socket } = useContext(SocketContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", getMessage);
    return () => {
      socket.off("message", getMessage);
    };
  }, [messages]);

  const getMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <>
      <Form />
      <MapContainer center={[-43.24895, -65.30505]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {messages.length > 0 && <Markers messages={messages} />}
          {/* <Markers lugares={lugares}></Markers> */}
      </MapContainer>
    </>
  );
};

export default MapView;
