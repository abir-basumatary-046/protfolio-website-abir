import { useEffect, useRef, type RefObject } from "react";

/** Subtle mouse parallax. `data-depth` is the max pixel shift at the screen edge. */
export function useParallax(
  rootRef: RefObject<HTMLElement | null>,
  enabled: boolean,
) {
  const frame = useRef(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !enabled) return;

    const nodes = [...root.querySelectorAll<HTMLElement>("[data-depth]")];
    let x = 0;
    let y = 0;

    const paint = () => {
      for (const node of nodes) {
        const depth = Number(node.dataset.depth ?? 0);
        node.style.transform = `translate3d(${(x * depth).toFixed(2)}px, ${(y * depth * 0.65).toFixed(2)}px, 0)`;
      }
    };

    const onMove = (event: MouseEvent) => {
      x = event.clientX / window.innerWidth - 0.5;
      y = event.clientY / window.innerHeight - 0.5;
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(paint);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame.current);
    };
  }, [rootRef, enabled]);
}
