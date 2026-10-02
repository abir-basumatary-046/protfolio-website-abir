import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "../../data/profile";
import { LOCATIONS, locationById } from "../../data/world";
import { useParallax } from "../../hooks/useParallax";
import type { LocationId } from "../../types/portfolio";
import { TimeSwitch } from "../../context/TimeOfDay";
import { PixelButton } from "../ui/PixelButton";
import { Bridge, Cloud, Moon, Skyline } from "./art";
import { Island } from "./Island";
import { WorldCharacter } from "./WorldCharacter";

export function WorldMap({
  selected,
  camera,
  hidden,
  onSelect,
  onOpen,
  onCat,
}: {
  selected: LocationId | null;
  camera: LocationId | null;
  hidden: boolean;
  onSelect: (id: LocationId) => void;
  onOpen: (id: LocationId) => void;
  onCat: () => void;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useParallax(rootRef, !reduced && !hidden);

  const cameraPlace = camera ? locationById(camera) : null;
  const origin = cameraPlace
    ? `${(cameraPlace.x / 1440) * 100}% ${(cameraPlace.y / 860) * 100}%`
    : "42% 46%";

  const selectedLabel = selected
    ? LOCATIONS.find((place) => place.id === selected)?.label
    : null;

  return (
    <motion.div
      ref={rootRef}
      className="stage-inner world-root"
      aria-hidden={hidden}
      animate={
        reduced
          ? { opacity: hidden ? 0 : 1 }
          : { scale: camera ? 1.38 : 1, opacity: hidden ? 0 : 1 }
      }
      transition={
        reduced
          ? { duration: 0.15 }
          : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
      }
      style={{ transformOrigin: origin }}
    >
      <div className="depth" data-depth="4">
        <Moon />
      </div>
      <div className="depth" data-depth="8">
        <Cloud className="cloud cloud-a" />
        <Cloud className="cloud cloud-b" />
      </div>
      <div className="depth" data-depth="12">
        <Skyline />
      </div>

      <p className="map-label">World / Map</p>

      <p className="paper-note">
        Same person.
        <br />
        Different
        <br />
        pixels :)
      </p>
      <header className="identity">
        <p className="kicker">Hi, I&apos;m</p>
        <h1>
          {profile.name.split(" ")[0]}
          <br />
          {profile.name.split(" ").slice(1).join(" ")}
        </h1>
        <p className="role">{profile.title}</p>
        <p className="stack-line">{profile.stackLine}</p>
        <p className="intro-copy">{profile.intro}</p>
        <div style={{ marginTop: 18 }}>
          <PixelButton
            onClick={() => {
              if (selected) onOpen(selected);
              else {
                onSelect("about");
                onOpen("about");
              }
            }}
          >
            Press Enter to start →
          </PixelButton>
        </div>
        <svg className="hint-arrow" viewBox="0 0 120 70" aria-hidden="true">
          <path
            d="M6 58 C 30 54, 48 20, 104 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M90 8 L108 16 L92 26" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </header>

      <aside className="status-panel" aria-label="Status">
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
        <TimeSwitch />
      </aside>

      <div className="depth depth-live" data-depth="14">
        <div className="waterfall" aria-hidden="true" />
        <Bridge />
        {LOCATIONS.map((place) => (
          <Island
            key={place.id}
            place={place}
            selected={selected === place.id}
            onSelect={onSelect}
            onOpen={onOpen}
          />
        ))}
      </div>

      <div className="depth depth-live" data-depth="20">
        <WorldCharacter onCat={onCat} />
        <p className="wood-sign">
          Good code
          <br />→ better
          <br />
          opportunities
        </p>
      </div>

      <footer className="controls">
        <p>
          <Keycap dir="left" />
          <Keycap dir="right" />
          <Keycap dir="up" />
          <Keycap dir="down" />
          <span className="hint"> explore</span>
        </p>
        <p className="hint">
          <kbd>enter</kbd> open
          <span> · </span>
          <kbd>esc</kbd> map
        </p>
        <p className="hint">
          {selectedLabel ? `${selectedLabel} selected` : "Choose a place on the map"}
        </p>
      </footer>
    </motion.div>
  );
}

const keyPaths = {
  left: "M13 4 L5 10 L13 16",
  right: "M7 4 L15 10 L7 16",
  up: "M4 13 L10 5 L16 13",
  down: "M4 7 L10 15 L16 7",
} as const;

function Keycap({ dir }: { dir: keyof typeof keyPaths }) {
  return (
    <kbd className="key-arrow" aria-label={dir}>
      <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
        <path d={keyPaths[dir]} fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    </kbd>
  );
}
