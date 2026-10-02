import { useEffect, useState } from "react";
import { experience } from "../../data/experience";
import type { ExperienceEntry } from "../../types/portfolio";
import { AchievementStat } from "../ui/AchievementStat";
import { PixelPanel } from "../ui/PixelPanel";
import { SceneChrome } from "../ui/SceneChrome";
import { OfficeWash } from "../world/art";

type Tab = "overview" | "work" | "tech";

export default function ExperienceScene({ onBack }: { onBack: () => void }) {
  const [activeId, setActiveId] = useState(experience[0]?.id ?? "vendor");
  const [tab, setTab] = useState<Tab>("overview");
  const entry = experience.find((item) => item.id === activeId) ?? experience[0];

  useEffect(() => {
    document.getElementById("back-to-map")?.focus();
  }, []);

  if (!entry) return null;

  return (
    <SceneChrome title="Experience" onBack={onBack}>
      <div className="scene-wash" aria-hidden="true">
        <OfficeWash />
      </div>
      <h1>Experience</h1>
      <div className="timeline" aria-label="PwC timeline, 2023 to present">
        <p className="timeline-cue">Two platforms on this role. Open either one.</p>
        <div className="timeline-row">
          <span className="timeline-year">2023</span>
          <div className="timeline-choices">
            {experience.map((item) => {
              const selected = item.id === entry.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`node${selected ? " is-on" : ""}`}
                  aria-pressed={selected}
                  onClick={() => {
                    setActiveId(item.id);
                    setTab("overview");
                  }}
                >
                  <span className="node-kicker">{selected ? "Showing" : "Open this"}</span>
                  <span className="node-title">{item.timelineLabel}</span>
                </button>
              );
            })}
          </div>
          <span className="timeline-year">Now</span>
        </div>
      </div>

      <PixelPanel variant="glass">
        <EntryBody entry={entry} tab={tab} onTab={setTab} />
      </PixelPanel>
    </SceneChrome>
  );
}

function EntryBody({
  entry,
  tab,
  onTab,
}: {
  entry: ExperienceEntry;
  tab: Tab;
  onTab: (tab: Tab) => void;
}) {
  return (
    <>
      <h2 style={{ margin: 0, fontSize: 28 }}>{entry.role}</h2>
      <p className="role-line">
        {entry.company}
        <span className="muted"> · {entry.project}</span>
      </p>
      <p className="role-line muted">
        {entry.dates} · {entry.place}
      </p>
      <div className="tabs" role="tablist" aria-label="Experience details">
        {(
          [
            ["overview", "Overview"],
            ["work", "Key work"],
            ["tech", "Tech stack"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className="tab"
            role="tab"
            aria-selected={tab === id}
            onClick={() => onTab(id)}
          >
            {label}
          </button>
        ))}
      </div>
      {tab === "overview" && <p className="lede">{entry.overview}</p>}
      {tab === "work" && (
        <ul className="work-list">
          {entry.keyWork.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {tab === "tech" && (
        <div className="chips">
          {entry.technologies.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      )}
      <div className={`metrics${entry.metrics.length < 4 ? " compact" : ""}`} style={{ marginTop: 18 }}>
        {entry.metrics.map((metric) => (
          <AchievementStat key={metric.display} metric={metric} />
        ))}
      </div>
    </>
  );
}
