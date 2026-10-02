import type { ReactNode } from "react";
import { TimeSwitch } from "../../context/TimeOfDay";

export function SceneChrome({
  title,
  onBack,
  children,
}: {
  title: string;
  onBack: () => void;
  children: ReactNode;
}) {
  return (
    <section className="scene" aria-label={title}>
      <div className="scene-top">
        <button id="back-to-map" type="button" className="back-link" onClick={onBack}>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M15 5 L7 12 L15 19" fill="none" stroke="currentColor" strokeWidth="2.4" />
          </svg>
          Back to map
        </button>
        <TimeSwitch />
      </div>
      {children}
    </section>
  );
}
