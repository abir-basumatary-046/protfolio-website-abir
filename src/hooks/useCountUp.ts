import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function useCountUp(target: number, ms = 800) {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? target : 0);

  useEffect(() => {
    if (reduced) {
      setValue(target);
      return;
    }

    let start: number | null = null;
    let frame = 0;

    const step = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min(1, (now - start) / ms);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, ms, reduced]);

  return value;
}
