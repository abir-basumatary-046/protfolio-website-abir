import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { project } from "../../data/projects";
import { PixelAnchor, PixelButton } from "../ui/PixelButton";
import { PixelPanel } from "../ui/PixelPanel";
import { SceneChrome } from "../ui/SceneChrome";
import { WorkshopArt } from "../world/art";

export default function ProjectsScene({
  onBack,
  whisper,
}: {
  onBack: () => void;
  whisper: (message: string) => void;
}) {
  const [dbId, setDbId] = useState(project.databases[0]?.id ?? "postgres");
  const noted = useRef(false);
  const active = project.databases.find((item) => item.id === dbId) ?? project.databases[0];

  useEffect(() => {
    document.getElementById("back-to-map")?.focus();
  }, []);

  function choose(id: string) {
    setDbId(id);
    if (!noted.current) {
      whisper("Choose wisely.");
      noted.current = true;
    }
  }

  if (!active) return null;

  return (
    <SceneChrome title="Projects" onBack={onBack}>
      <div className="scene-grid">
        <div className="scene-art workshop">
          <WorkshopArt />
          <div className="monitor" aria-live="polite">
            <p className="provider">{active.label}</p>
            <AnimatePresence mode="wait">
              <motion.pre
                key={active.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
              >
                {active.snippet}
              </motion.pre>
            </AnimatePresence>
          </div>
        </div>
        <PixelPanel variant="crt">
          <h1>Projects</h1>
          <h2 style={{ margin: "10px 0 0", fontSize: 26 }}>{project.name}</h2>
          <p className="lede">{project.tagline}</p>
          <p>{project.description}</p>
          <div className="db-flow" aria-hidden="true">
            {project.databases.map((item, index) => (
              <span key={item.id}>
                <span className={`step${item.id === active.id ? " is-on" : ""}`}>{item.label}</span>
                {index < project.databases.length - 1 && <span className="arrow" />}
              </span>
            ))}
          </div>
          <p className="one-app">
            One application
            <br />
            multiple databases
          </p>
          <p className="fine">Database</p>
          <div className="actions" role="group" aria-label="Database">
            {project.databases.map((item) => (
              <PixelButton
                key={item.id}
                tone={item.id === active.id ? "cream" : "ghost"}
                aria-pressed={item.id === active.id}
                onClick={() => choose(item.id)}
              >
                {item.label}
              </PixelButton>
            ))}
          </div>
          <div className="chips">
            {project.technologies.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
          <p className="fine">A visual switch on static sample queries. Nothing is sent to a database.</p>
          <div className="actions">
            <PixelAnchor href={project.demoUrl} tone="cream" pendingLabel="Add PROJECT_DEMO_URL in src/data/projects.ts">
              View project →
            </PixelAnchor>
            <PixelAnchor href={project.githubUrl} tone="ghost" pendingLabel="Add GITHUB_PROJECT_URL in src/data/projects.ts">
              GitHub →
            </PixelAnchor>
          </div>
        </PixelPanel>
      </div>
    </SceneChrome>
  );
}
