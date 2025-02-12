"use client";
import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

export default function MapComponent() {
  const mapRef = React.useRef(null);

  useEffect(() => {
    const target = document.querySelector("#map");
    if (!target) return;

    if (!mapRef.current) {
      // Map not initialized, create it
      const map = L.map(target, {
        scrollWheelZoom: false, // Disable scrolling
      }).setView([51.505, -0.09], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([51.5, -0.09]).addTo(map).openPopup();
      document.getElementsByClassName("leaflet-interactive")[0].src =
        "/assets/marker-icon.png";

      // Save the map instance in the ref
      mapRef.current = map;
    }
  }, []);

  return (
    <div
      id="map"
      className="map contactMap"
      style={{ height: "50vh", pointerEvents: "none" }}
    ></div>
  );
}
