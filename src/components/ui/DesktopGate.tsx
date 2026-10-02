import { PixelPerson } from "../world/art";

export function DesktopGate() {
  return (
    <div className="gate">
      <div className="gate-card">
        <PixelPerson scale={5} />
        <h1>This world was built for a large screen.</h1>
        <p>
          This portfolio is designed as a large-screen interactive experience.
          Please open Abir&apos;s portfolio on a desktop or laptop for the full
          experience.
        </p>
      </div>
    </div>
  );
}
