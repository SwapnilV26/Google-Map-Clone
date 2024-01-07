"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import { getPlacesData } from "./api";

export default function Home() {
  const [places, setPlaces] = useState([]);
  const [cordinates, setCordinates] = useState({
    lat: 0,
    lng: 0,
  });
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // get the current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // fetching the data according to coordinates
  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      console.log(data);
      setPlaces(data);
      setIsLoading(false);
    });
  }, [cordinates, bounds]);

  return (
    <main className="flex justify-center items-center h-[100vh] w-[100vw] relative">
      <Header
        setCordinates={setCordinates}
        setType={setType}
        setRatings={setRatings}
      />

      <List places={places} isLoading={isLoading} />

      <Map
        cordinates={cordinates}
        setCordinates={setCordinates}
        setBounds={setBounds}
      />
    </main>
  );
}
