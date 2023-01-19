import L from 'leaflet';
import Tracks from '../assets/icons/Tracks.svg';
import Plops from '../assets/icons/Plops.svg';
import Blips from '../assets/icons/Blips.svg';

export const CustomizeIcon = (type) => {
  //console.log(type);
    let icono;
    switch (type) {
      case "Tracks":
        icono = new L.icon({
          iconUrl: Tracks,
          iconSize: [50, 50],
          iconAnchor: [10, 20],
        });
        break;
      case "Plops":
        icono = new L.icon({
          iconUrl: Plops,
          iconSize: [30, 30],
          iconAnchor: [10, 20],
        });
        break;
      case "Blips":
        icono = new L.icon({
          iconUrl: Blips,
          iconSize: [30, 30],
          iconAnchor: [10, 20],
        });
        break;
      default:
        break;
    }
    //console.log(icono)
    return icono;
  };
