import { createContext, useEffect, useState } from "react";
export const PlacesContext = createContext();

export const PlacesProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getData();
  }, []); //ver dependecia places?

  const getData = async () => {
    try {
      const respuesta = await fetch("http://localhost:4002/get-msgs");
      const data = await respuesta.json();
      setPlaces(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addPlace = (place) => {
    console.log(place + "Places context");
    setPlaces([...places, place]);
    console.log(places);
  };

  return (
    <PlacesContext.Provider value={{ places, addPlace }}>
      {/*...Components*/}
      {children}
    </PlacesContext.Provider>
  );
};
