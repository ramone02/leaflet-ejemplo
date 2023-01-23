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
    <div className="container my-3">
      <p className="fw-bold">SET COORDENADAS</p>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
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
            <div className="col-4">
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
                  id="flexRadioDefault1"
                  onChange={(e) => setType("Blips")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Blips
                </label>
              </div>
            </div>
            <div className="col-4">
              <button type="submit" className="btn btn-primary btn-sm">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
