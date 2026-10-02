import { useEffect } from "react";
import { profile } from "../../data/profile";
import { DeskRoom } from "../world/art";
import { PixelPanel } from "../ui/PixelPanel";
import { SceneChrome } from "../ui/SceneChrome";

export default function AboutScene({
  onBack,
  whisper,
}: {
  onBack: () => void;
  whisper: (message: string) => void;
}) {
  useEffect(() => {
    document.getElementById("back-to-map")?.focus();
  }, []);

  return (
    <SceneChrome title="About Me" onBack={onBack}>
      <div className="scene-grid">
        <div className="scene-art">
          <DeskRoom />
          <button
            type="button"
            className="hotspot"
            style={{ left: "54%", top: "40%", width: 48, height: 40 }}
            aria-label="Coffee cup"
            onClick={() => whisper("Critical dependency.")}
          />
          <button
            type="button"
            className="hotspot"
            style={{ left: "66%", top: "64%", width: 56, height: 36 }}
            aria-label="Cat"
            onClick={() => whisper("Mrrp.")}
          />
          <p className="sticky">
            Build
            <br />
            Learn
            <br />
            Improve
            <br />
            Repeat
          </p>
        </div>
        <PixelPanel variant="paper">
          <h1>About Me</h1>
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="lede">
              {paragraph}
            </p>
          ))}
          <div className="traits">
            {profile.traits.map((trait) => (
              <p key={trait} className="trait">
                {trait}
              </p>
            ))}
          </div>
        </PixelPanel>
      </div>
    </SceneChrome>
  );
}
