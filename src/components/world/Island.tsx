import type { ReactElement } from "react";
import type { LocationId, WorldLocation } from "../../types/portfolio";
import {
  IslandAbout,
  IslandContact,
  IslandEducation,
  IslandExperience,
  IslandProjects,
  IslandSkills,
} from "./art";

const art: Record<LocationId, () => ReactElement> = {
  about: IslandAbout,
  experience: IslandExperience,
  projects: IslandProjects,
  skills: IslandSkills,
  education: IslandEducation,
  contact: IslandContact,
};

export function Island({
  place,
  selected,
  onSelect,
  onOpen,
}: {
  place: WorldLocation;
  selected: boolean;
  onSelect: (id: LocationId) => void;
  onOpen: (id: LocationId) => void;
}) {
  const Art = art[place.id];

  return (
    <button
      id={`island-${place.id}`}
      type="button"
      className={`island${selected ? " is-selected" : ""}`}
      style={{ left: place.x, top: place.y }}
      aria-label={`${place.label}. Enter to open.`}
      aria-pressed={selected}
      onMouseEnter={() => onSelect(place.id)}
      onFocus={() => onSelect(place.id)}
      onClick={() => onOpen(place.id)}
    >
      <span className="sign" style={{ ["--tilt" as string]: `${place.tilt}deg` }}>
        {place.label}
      </span>
      <span className="island-glow" aria-hidden="true" />
      <span className="island-art">
        <Art />
      </span>
      <span className="island-label-pop">enter</span>
    </button>
  );
}
