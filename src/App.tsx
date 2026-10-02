import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  sceneFade,
  sceneSpring,
  sceneVariants,
  sceneVariantsReduced,
} from "./animations/variants";
import { TimeProvider, useTimeOfDay } from "./context/TimeOfDay";
import { DesktopGate } from "./components/ui/DesktopGate";
import { DialogBox } from "./components/ui/DialogBox";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { WorldMap } from "./components/world/WorldMap";
import { LOCATIONS, STAGE } from "./data/world";
import { useDesktopOnly } from "./hooks/useDesktopOnly";
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";
import { useStageScale } from "./hooks/useStageScale";
import type { LocationId } from "./types/portfolio";

const AboutScene = lazy(() => import("./components/scenes/AboutScene"));
const ExperienceScene = lazy(() => import("./components/scenes/ExperienceScene"));
const ProjectsScene = lazy(() => import("./components/scenes/ProjectsScene"));
const SkillsScene = lazy(() => import("./components/scenes/SkillsScene"));
const EducationScene = lazy(() => import("./components/scenes/EducationScene"));
const ContactScene = lazy(() => import("./components/scenes/ContactScene"));

export default function App() {
  const desktop = useDesktopOnly(1100);
  const [ready, setReady] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), reduced ? 200 : 780);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  if (!desktop) return <DesktopGate />;

  return (
    <>
      {!ready && <LoadingScreen />}
      {ready && (
        <TimeProvider>
          <Portfolio />
        </TimeProvider>
      )}
    </>
  );
}

function Portfolio() {
  const { time } = useTimeOfDay();
  const scale = useStageScale(STAGE.w, STAGE.h);
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState<LocationId | null>(null);
  const [view, setView] = useState<LocationId | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const whisper = useCallback((message: string) => {
    setToast(message);
  }, []);

  const open = useCallback((id: LocationId) => {
    setSelected(id);
    setView(id);
  }, []);

  const close = useCallback(() => {
    setView(null);
  }, []);

  useKeyboardNavigation({
    mode: view ? "scene" : "world",
    selected,
    locations: LOCATIONS,
    onSelect: setSelected,
    onOpen: open,
    onBack: close,
  });

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const place = view ? LOCATIONS.find((item) => item.id === view) : null;
  const origin = place
    ? `${(window.innerWidth - STAGE.w * scale) / 2 + place.x * scale}px ${(window.innerHeight - STAGE.h * scale) / 2 + place.y * scale}px`
    : "50% 50%";

  return (
    <main className="viewport" data-time={time}>
      <div className="stars" data-depth="2" />
      <div className="stars-b" />
      <div
        className="stage-fit"
        style={{ transform: `translate(-50%, -50%) scale(${scale})` }}
        inert={view ? true : undefined}
      >
        <WorldMap
          selected={selected}
          camera={view}
          hidden={view !== null}
          onSelect={setSelected}
          onOpen={open}
          onCat={() => whisper("Mrrp.")}
        />
      </div>
      <AnimatePresence>
        {view && (
          <motion.div
            key={view}
            className="scene-layer"
            variants={reduced ? sceneVariantsReduced : sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={reduced ? sceneFade : sceneSpring}
            style={{ transformOrigin: origin }}
          >
            <Suspense fallback={<div className="scene" />}>
              {view === "about" && <AboutScene onBack={close} whisper={whisper} />}
              {view === "experience" && <ExperienceScene onBack={close} />}
              {view === "projects" && <ProjectsScene onBack={close} whisper={whisper} />}
              {view === "skills" && <SkillsScene onBack={close} whisper={whisper} />}
              {view === "education" && <EducationScene onBack={close} />}
              {view === "contact" && <ContactScene onBack={close} whisper={whisper} />}
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
      {toast && <DialogBox text={toast} />}
    </main>
  );
}
