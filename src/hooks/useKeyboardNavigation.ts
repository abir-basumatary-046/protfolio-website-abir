import { useEffect } from "react";
import type { LocationId, WorldLocation } from "../types/portfolio";

type Direction = "left" | "right" | "up" | "down";

function directionFromKey(key: string): Direction | null {
  if (key === "ArrowLeft") return "left";
  if (key === "ArrowRight") return "right";
  if (key === "ArrowUp") return "up";
  if (key === "ArrowDown") return "down";
  return null;
}

function nearest(
  from: WorldLocation,
  direction: Direction,
  locations: WorldLocation[],
) {
  const candidates = locations.filter((place) => {
    if (place.id === from.id) return false;
    const dx = place.x - from.x;
    const dy = place.y - from.y;
    if (direction === "left") return dx < -24 && Math.abs(dx) > Math.abs(dy) * 0.35;
    if (direction === "right") return dx > 24 && Math.abs(dx) > Math.abs(dy) * 0.35;
    if (direction === "up") return dy < -24 && Math.abs(dy) > Math.abs(dx) * 0.28;
    return dy > 24 && Math.abs(dy) > Math.abs(dx) * 0.28;
  });

  candidates.sort((a, b) => {
    const da = Math.hypot(a.x - from.x, a.y - from.y);
    const db = Math.hypot(b.x - from.x, b.y - from.y);
    return da - db;
  });

  return candidates[0];
}

interface KeyboardNavOptions {
  mode: "world" | "scene";
  selected: LocationId | null;
  locations: WorldLocation[];
  onSelect: (id: LocationId) => void;
  onOpen: (id: LocationId) => void;
  onBack: () => void;
}

export function useKeyboardNavigation({
  mode,
  selected,
  locations,
  onSelect,
  onOpen,
  onBack,
}: KeyboardNavOptions) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (mode === "scene") {
          event.preventDefault();
          onBack();
        }
        return;
      }

      if (mode !== "world") return;

      const target = event.target as HTMLElement | null;
      const typing =
        target?.tagName === "INPUT" || target?.tagName === "TEXTAREA";
      if (typing) return;

      const direction = directionFromKey(event.key);
      if (direction) {
        event.preventDefault();
        if (!selected) {
          onSelect("about");
          document.getElementById("island-about")?.focus();
          return;
        }
        const current = locations.find((place) => place.id === selected);
        if (!current) return;
        const next = nearest(current, direction, locations);
        if (next) {
          onSelect(next.id);
          document.getElementById(`island-${next.id}`)?.focus();
        }
        return;
      }

      if (event.key === "Enter") {
        const tag = target?.tagName;
        if (tag === "BUTTON" || tag === "A") return;
        event.preventDefault();
        if (selected) onOpen(selected);
        else onSelect("about");
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode, selected, locations, onSelect, onOpen, onBack]);
}
