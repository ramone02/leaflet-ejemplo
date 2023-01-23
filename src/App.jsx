import "./App.css";
import MapView from "./components/MapView/MapView";
import { SocketProvider } from "./context/SocketContext";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <SocketProvider>
      <div className="d-flex" id="wrapper">
        <SideBar />
        <div id="page-content-wrapper">
          <div className="container-fluid">            
            <MapView />
          </div>
        </div>
      </div>
    </SocketProvider>
  );
}

export default App;
