import { useEffect, useState } from "react";
import { aiWorkflow, skills } from "../../data/skills";
import type { SkillItem } from "../../types/portfolio";
import { PixelPanel } from "../ui/PixelPanel";
import { SceneChrome } from "../ui/SceneChrome";
import { SkillItemButton } from "../ui/SkillItem";

const tilts = [-1.4, 1.1, 0.8, -0.7];

export default function SkillsScene({
  onBack,
  whisper,
}: {
  onBack: () => void;
  whisper: (message: string) => void;
}) {
  const [selected, setSelected] = useState<SkillItem | null>(null);
  const rooms = skills.filter((category) => category.kind !== "lab");
  const lab = skills.find((category) => category.kind === "lab");

  useEffect(() => {
    document.getElementById("back-to-map")?.focus();
  }, []);

  return (
    <SceneChrome title="Skills" onBack={onBack}>
      <h1>Skills</h1>
      <div className="skill-layout">
        <div className="skill-grid">
          {rooms.map((category, index) => (
            <div key={category.id} className="tray">
              <div className="tray-back" style={{ transform: `rotate(${tilts[index] ?? 0}deg)` }} />
              <div className="tray-content">
                <h2>{category.title}</h2>
                <div className="skill-list">
                  {category.items.map((item) => (
                    <SkillItemButton
                      key={item.name}
                      item={item}
                      selected={selected?.name === item.name}
                      onSelect={setSelected}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {lab && (
          <PixelPanel variant="glass" className="lab">
            <button
              type="button"
              className="lab-trigger"
              onClick={() => whisper("Prompt → Think → Review → Ship")}
            >
              AI workshop
            </button>
            <h2>{lab.title}</h2>
            <p className="lede">{aiWorkflow.title}</p>
            <div className="uses">
              {aiWorkflow.uses.map((use) => (
                <span key={use}>{use}</span>
              ))}
            </div>
            <p>{aiWorkflow.review}</p>
            <p className="muted">{aiWorkflow.toolsLine}</p>
            <div className="skill-list" style={{ marginTop: 12 }}>
              {lab.items.map((item) => (
                <SkillItemButton
                  key={item.name}
                  item={item}
                  selected={selected?.name === item.name}
                  onSelect={setSelected}
                />
              ))}
            </div>
          </PixelPanel>
        )}
      </div>
      {selected && (
        <div className="detail-pop" role="region" aria-label={selected.name}>
          <strong>{selected.name}</strong>
          <p style={{ margin: "6px 0 0" }}>{selected.note}</p>
        </div>
      )}
    </SceneChrome>
  );
}
