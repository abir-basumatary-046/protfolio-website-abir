import { useEffect } from "react";
import { education } from "../../data/education";
import { PixelPanel } from "../ui/PixelPanel";
import { SceneChrome } from "../ui/SceneChrome";
import { MountainScene } from "../world/art";

export default function EducationScene({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    document.getElementById("back-to-map")?.focus();
  }, []);

  return (
    <SceneChrome title="Education" onBack={onBack}>
      <div className="scene-grid">
        <div className="scene-art">
          <MountainScene />
          <span className="flake" style={{ left: "30%", top: "18%", animationDelay: "0s" }} />
          <span className="flake" style={{ left: "48%", top: "12%", animationDelay: "1.4s" }} />
          <span className="flake" style={{ left: "40%", top: "26%", animationDelay: "2.6s" }} />
          <span className="flake" style={{ left: "58%", top: "20%", animationDelay: "0.8s" }} />
        </div>
        <PixelPanel variant="wood">
          <h1>Education</h1>
          <p className="kicker" style={{ color: "#f2c572" }}>
            IIT (ISM)
          </p>
          <h2 style={{ margin: "8px 0 0", fontSize: 30 }}>{education.degree}</h2>
          <p className="lede">{education.institution}</p>
          <p>{education.dates}</p>
        </PixelPanel>
      </div>
    </SceneChrome>
  );
}
