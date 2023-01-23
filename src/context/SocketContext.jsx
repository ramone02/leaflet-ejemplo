import { createContext, useState } from "react";
import io from "socket.io-client";
export const SocketContext = createContext();
const socket = io("127.0.0.1:4002");

export const SocketProvider = ({ children }) => {
  
  const [messages, setMessages] = useState([]);  

  /* const getData = async () => {
    try {
      const respuesta = await fetch("http://localhost:4002/get-msgs");
      const data = await respuesta.json();
      setPlaces(data);
    } catch (error) {
      console.log(error);
    }
  }; */

  /* const addPlace = (message) => {
    console.log(message + "Message context");
    setPlaces([...messages, message]);
    console.log(messages);
  }; */

  return (
    <SocketContext.Provider value={{ socket }}>
      {/*...Components*/}
      {children}
    </SocketContext.Provider>
  );
};
