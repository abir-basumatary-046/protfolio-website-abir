import { useEffect } from "react";
import { profile } from "../../data/profile";
import { PixelAnchor } from "../ui/PixelButton";
import { PixelPanel } from "../ui/PixelPanel";
import { SceneChrome } from "../ui/SceneChrome";
import { RooftopScene } from "../world/art";

export default function ContactScene({
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
    <SceneChrome title="Contact" onBack={onBack}>
      <div className="scene-grid">
        <div className="scene-art">
          <RooftopScene />
          <div className="meteor" aria-hidden="true" />
          <button
            type="button"
            className="hotspot"
            style={{ left: "58%", top: "60%", width: 64, height: 40 }}
            aria-label="Cat"
            onClick={() => whisper("Mrrp.")}
          />
        </div>
        <PixelPanel variant="glass">
          <h1>Contact</h1>
          <p className="lede">
            Let&apos;s build something
            <br />
            amazing together.
          </p>
          <ul className="contact-list">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </li>
            <li>
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
          <div className="actions">
            <PixelAnchor href={`mailto:${profile.email}`} tone="cream">
              Say hello →
            </PixelAnchor>
            <PixelAnchor href={profile.linkedinUrl}>LinkedIn →</PixelAnchor>
          </div>
        </PixelPanel>
      </div>
    </SceneChrome>
  );
}
