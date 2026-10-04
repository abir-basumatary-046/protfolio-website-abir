import { useEffect, useState } from "react";

export type LayoutMode = "desktop" | "tablet" | "phone";

export function layoutFromWidth(width: number): LayoutMode {
  if (width >= 1100) return "desktop";
  if (width >= 700) return "tablet";
  return "phone";
}

export function useLayoutMode() {
  const [mode, setMode] = useState<LayoutMode>(() => layoutFromWidth(window.innerWidth));

  useEffect(() => {
    const check = () => setMode(layoutFromWidth(window.innerWidth));
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return mode;
}
