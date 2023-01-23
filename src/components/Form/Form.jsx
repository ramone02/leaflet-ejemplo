import React, { useContext, useState } from "react";
import { SocketContext } from "../../context/SocketContext";

const Form = () => {
  const [latitud, setLatitud] = useState(-43.2609757167659);
  const [longitud, setLongitud] = useState(-65.27568688154048);
  const [type, setType] = useState("");
  const { socket } = useContext(SocketContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      type: type,
      name: "Nombre Editable",
      geometry: [latitud, longitud],
    };
    setLatitud(0);
    setLongitud(0);
    setType("");
    //addPlace(obj);
    socket.emit('message', message);
  };

  return (
    <div className="container my-2 p-3 shadow-lg bg-white rounded">
      <p className="fw-bold text-center">SET COORDENADAS</p>
      <div className="">
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-evenly mt-2">
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Latitud"
                aria-label="Latitud"
                name="latitud"
                value={latitud}
                onChange={(e) => setLatitud(e.target.value)}
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Longitud"
                aria-label="Longitud"
                name="longitud"
                value={longitud}
                onChange={(e) => setLongitud(e.target.value)}
              />
            </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="col-4 d-flex justify-content-evenly">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={(e) => setType("Tracks")}
                  required
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Tracks
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  onChange={(e) => setType("Plops")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Plops
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  onChange={(e) => setType("Blips")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Blips
                </label>
              </div>
            </div>
            </div>
            <div className="d-flex justify-content-center p-2">
              <button type="submit" className="btn btn-primary btn-sm col-3">
                Enviar
              </button>
            </div>
          
        </form>
      </div>
    </div>
  );
};

export default Form;
