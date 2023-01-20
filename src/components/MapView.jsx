import React, { useState, useEffect, useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./Markers";
import Form from "./Form";
import "leaflet/dist/leaflet.css";
import { PlacesContext } from "../context/PlacesContext";

const MapView = ({data}) => {
  //const [data, setData] = useState([]);
  //const { places } = useContext(PlacesContext);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    //getData();
    if(data){
      setPoints(data)
    }
    
    
    
  }, [data]);

  const getData = async () => {
    try {
      const respuesta = await fetch("http://localhost:4002/get-msgs");
      const data = await respuesta.json();
      setPoints(data);
    } catch (error) {
      console.log(error);
    }
  };
  // style={{width: '99.5%'}} 
  return (
    <>
      <Form />
      <MapContainer center={[-43.24895, -65.30505]} zoom={13}> 

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.length >= 0 && <Markers points={points} />}
        {/* <Markers lugares={lugares}></Markers> */}
      </MapContainer>
    </>
  );
};

export default MapView;
