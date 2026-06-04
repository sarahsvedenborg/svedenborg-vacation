"use client";

import { RouteMap } from "@/components/route-map";

export function RouteMapSection() {
  return (
    <section className="space-y-4">
      <h2 className="font-serif text-2xl font-medium">Interaktivt rutekart</h2>
      <p className="text-body">
        Orange linje viser kanalruten fra Whitchurch Marina til Llangollen. Fylt markør er start,
        omriss markør er mål.
      </p>
      <RouteMap />
    </section>
  );
}
