import type { Transition, Variants } from "motion/react";

export const sceneVariants: Variants = {
  initial: { opacity: 0, scale: 0.94 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.025 },
};

export const sceneVariantsReduced: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const sceneSpring: Transition = {
  type: "spring",
  stiffness: 170,
  damping: 26,
  mass: 0.9,
};

export const sceneFade: Transition = { duration: 0.18, ease: "easeOut" };
