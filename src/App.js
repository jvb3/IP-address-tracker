import "./styles/styles.css";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";

function App() {
  const [ipInput, setIpInput] = useState();
  const [searchIp, setSearchIp] = useState();
  const [ipData, setIpData] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: "",
    lng: "",
  });
  const [zoom, setZoom] = useState(13);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleInput = (e) => {
    setIpInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchIp(ipInput);
  };

  useEffect(() => {
    getInitIp();
  }, []);

  const getInitIp = async () => {
    try {
      const GEOLOCATION_INITIAL = "https://geolocation-db.com/json/";
      const res = await fetch(GEOLOCATION_INITIAL);
      const initialData = await res.json();
      console.log(initialData);
      setSearchIp(initialData.IPv4);
      setCoordinates({ lat: initialData.latitude, lng: initialData.longitude });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIpData();
  }, [searchIp]);

  const getIpData = async () => {
    try {
      const GEOLOCATION_API = "at_1qpRmgPihtgE2XYsd6TWenZMgW9QP";
      const GEOLOCATION_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${GEOLOCATION_API}&ipAddress=${searchIp}`;
      const res = await fetch(GEOLOCATION_URL);
      const data = await res.json();
      console.log(data);
      if (data.messages) {
        setErrorMsg(true);
      } else {
        setErrorMsg(false);
        setIpData(data);
        setCoordinates({ lat: data.location.lat, lng: data.location.lng });
        setZoom(13);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <SearchBar
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        ipData={ipData}
        coordinates={coordinates}
        zoom={zoom}
        errorMsg={errorMsg}
      />
    </>
  );
}

export default App;
