import { profile } from "../../data/profile";
import { LOCATIONS } from "../../data/world";
import { TimeSwitch } from "../../context/TimeOfDay";
import type { LocationId } from "../../types/portfolio";
import { PixelButton } from "../ui/PixelButton";
import {
  IslandAbout,
  IslandContact,
  IslandEducation,
  IslandExperience,
  IslandProjects,
  IslandSkills,
  PixelCat,
  PixelPerson,
} from "./art";

const art = {
  about: IslandAbout,
  experience: IslandExperience,
  projects: IslandProjects,
  skills: IslandSkills,
  education: IslandEducation,
  contact: IslandContact,
};

export function CompactMap({
  onOpen,
  onCat,
}: {
  onOpen: (id: LocationId) => void;
  onCat: () => void;
}) {
  return (
    <div className="compact">
      <div className="compact-top">
        <p className="map-label">World / Map</p>
        <TimeSwitch />
      </div>

      <header className="compact-identity">
        <p className="paper-note">
          Same person.
          <br />
          Different
          <br />
          pixels :)
        </p>
        <p className="kicker">Hi, I&apos;m</p>
        <h1>
          {profile.name.split(" ")[0]}
          <br />
          {profile.name.split(" ").slice(1).join(" ")}
        </h1>
        <p className="role">{profile.title}</p>
        <p className="stack-line">{profile.stackLine}</p>
        <p className="intro-copy">{profile.intro}</p>
        <PixelButton onClick={() => onOpen("about")}>Press Enter to start →</PixelButton>
      </header>

      <ul className="compact-places">
        {LOCATIONS.map((place) => {
          const Art = art[place.id];
          return (
            <li key={place.id}>
              <button
                id={`island-${place.id}`}
                type="button"
                className="place-card"
                onClick={() => onOpen(place.id)}
              >
                <span className="place-art" aria-hidden="true">
                  <Art />
                </span>
                <span className="sign" style={{ ["--tilt" as string]: `${place.tilt}deg` }}>
                  {place.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="compact-foot">
        <div className="compact-hero">
          <PixelPerson scale={4} />
          <button type="button" className="compact-cat" aria-label="Cat" onClick={onCat}>
            <PixelCat scale={4} />
          </button>
        </div>
        <aside className="compact-status" aria-label="Status">
          <p className="status-row">
            <span className="status-mark">★</span>
            {profile.years}
          </p>
          <p className="status-row">
            <span className="status-mark">⌖</span>
            {profile.locationLabel}
          </p>
          <p className="status-row">
            <span className="status-mark">○</span>
            {profile.availability}
          </p>
        </aside>
      </div>
    </div>
  );
}
