import "./App.css";
import MapView from "./components/MapView";
import { PlacesProvider } from "./context/PlacesContext";
import SideBar from "./components/SideBar";

function App() {
  return (
    <PlacesProvider>
      <div className="d-flex" id="wrapper">
        <SideBar />
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <MapView />
          </div>
        </div>
      </div>
    </PlacesProvider>
  );
}

export default App;
