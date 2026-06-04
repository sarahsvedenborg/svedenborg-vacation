/** Approximate Llangollen Canal path: Whitchurch Marina → Llangollen (lat, lng). */
export const canalRoute: [number, number][] = [
  [52.969045, -2.6812],
  [52.9688, -2.694],
  [52.9682, -2.712],
  [52.9675, -2.732],
  [52.966, -2.758],
  [52.9635, -2.785],
  [52.9605, -2.812],
  [52.957, -2.838],
  [52.9535, -2.862],
  [52.9495, -2.888],
  [52.945, -2.912],
  [52.9405, -2.938],
  [52.936, -2.962],
  [52.9325, -2.988],
  [52.9305, -3.012],
  [52.9298, -3.038],
  [52.9305, -3.065],
  [52.933, -3.092],
  [52.9365, -3.118],
  [52.941, -3.142],
  [52.946, -3.162],
  [52.952, -3.178],
  [52.9585, -3.192],
  [52.965, -3.205],
  [52.969856, -3.170384],
];

export const routeStart = {
  name: "Whitchurch Marina",
  position: canalRoute[0] as [number, number],
};

export const routeEnd = {
  name: "Llangollen",
  position: canalRoute[canalRoute.length - 1] as [number, number],
};
