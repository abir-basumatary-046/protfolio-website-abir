import type { LocationId, WorldLocation } from "../types/portfolio";

export const STAGE = { w: 1440, h: 860 };

export const LOCATIONS: WorldLocation[] = [
  { id: "about", label: "About Me", x: 610, y: 360, tilt: -2.4 },
  { id: "experience", label: "Experience", x: 860, y: 176, tilt: 1.4 },
  { id: "projects", label: "Projects", x: 1120, y: 250, tilt: -1.2 },
  { id: "skills", label: "Skills", x: 700, y: 590, tilt: 2.1 },
  { id: "education", label: "Education", x: 960, y: 520, tilt: -1.6 },
  { id: "contact", label: "Contact", x: 1210, y: 600, tilt: 1.7 },
];

export function locationById(id: LocationId) {
  const found = LOCATIONS.find((item) => item.id === id);
  if (!found) throw new Error(`Unknown location: ${id}`);
  return found;
}
