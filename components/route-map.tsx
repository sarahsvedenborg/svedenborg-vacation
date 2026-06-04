"use client";

import { useEffect } from "react";
import L from "leaflet";
import {
  CircleMarker,
  MapContainer,
  Polyline,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { canalRoute, routeEnd, routeStart } from "@/lib/canal-route";

const ACCENT = "#c4784a";
const ROUTE_LINE = { color: ACCENT, weight: 4, opacity: 0.85 };
const START_MARKER = {
  color: "#fff",
  weight: 2,
  fillColor: ACCENT,
  fillOpacity: 1,
};
const END_MARKER = {
  color: ACCENT,
  weight: 3,
  fillColor: "#fff",
  fillOpacity: 1,
};

function FitRouteBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(L.latLngBounds(positions), { padding: [48, 48] });
  }, [map, positions]);

  return null;
}

export function RouteMap() {
  return (
    <MapContainer
      center={routeStart.position}
      zoom={11}
      scrollWheelZoom
      className="h-80 w-full border border-border [&_.leaflet-control-attribution]:text-[10px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitRouteBounds positions={canalRoute} />
      <Polyline positions={canalRoute} pathOptions={ROUTE_LINE} />
      <CircleMarker center={routeStart.position} radius={9} pathOptions={START_MARKER}>
        <Popup>
          <strong>Start</strong>
          <br />
          {routeStart.name}
        </Popup>
      </CircleMarker>
      <CircleMarker center={routeEnd.position} radius={9} pathOptions={END_MARKER}>
        <Popup>
          <strong>Mål</strong>
          <br />
          {routeEnd.name}
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
}
