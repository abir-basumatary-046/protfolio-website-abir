import { useEffect, useState } from "react";

export function useStageScale(width: number, height: number) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const fit = () => {
      const next = Math.min(
        window.innerWidth / width,
        window.innerHeight / height,
      );
      setScale(next);
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [width, height]);

  return scale;
}
