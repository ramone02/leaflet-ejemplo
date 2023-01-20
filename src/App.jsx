import "./App.css";
import MapView from "./components/MapView";
import { PlacesProvider } from "./context/PlacesContext";
import SideBar from "./components/SideBar";
import { useState , useEffect } from "react";
import dataJson from './assets/data.json'

function App() {
  const [selected, setSelected] = useState(undefined)
  const [objetsToView, setObjetsToView] = useState(undefined)
  const [data, setData] = useState(dataJson) 
  
  useEffect(() => {
   if(selected !== undefined){
    switch (selected) {
      case "Blips":
        let b = data.lugares.filter(e => e.type === "Blips")
        setObjetsToView(b)
        break;
      case "Tracks":
        let tr = data.lugares.filter(e => e.type === "Tracks")
        setObjetsToView(tr)
        break;
      case "Plops":
        let pl = data.lugares.filter(e => e.type === "Plops")
        setObjetsToView(pl)
        break;
      
    }
   }
  }, [selected])
  useEffect(() => {
    if(objetsToView === undefined){
      getData()
    }
  }, [])
  
  const getData = async () => {
    try {
      //const respuesta = await fetch("http://localhost:4002/get-msgs");
      // const data = await respuesta.json();
      // setPlaces(data);
      setObjetsToView(dataJson.lugares)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PlacesProvider>
      <div className="d-flex" id="wrapper">
        <SideBar setSelected={setSelected} selected={selected}/>
        <div id="page-content-wrapper">
          <div className="px-3">
            <MapView data={objetsToView}/>
          </div>
        </div>
      </div>
    </PlacesProvider>
  );
}

export default App;
