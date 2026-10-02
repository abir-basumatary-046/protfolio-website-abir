import { useEffect, useState } from "react";

export function useDesktopOnly(minWidth = 1100) {
  const [supported, setSupported] = useState(
    () => window.innerWidth >= minWidth,
  );

  useEffect(() => {
    const check = () => setSupported(window.innerWidth >= minWidth);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [minWidth]);

  return supported;
}
