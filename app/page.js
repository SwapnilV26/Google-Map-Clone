"use client";
import { useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";

export default function Home() {
  const [cordinates, setCordinates] = useState({ lat: 0, lng: 0 });
  return (
    <main className="flex justify-center items-center h-[100vh] w-[100vw] relative">
      <Header />

      <List />

      <Map cordinates={cordinates} setCordinates={setCordinates} />
    </main>
  );
}
