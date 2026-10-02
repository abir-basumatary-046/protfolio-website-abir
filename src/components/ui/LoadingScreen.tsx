import { PixelPerson } from "../world/art";

export function LoadingScreen() {
  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="loader-card">
        <PixelPerson scale={5} />
        <p>Loading world...</p>
        <div className="load-track" aria-hidden="true">
          <div className="load-fill" />
        </div>
      </div>
    </div>
  );
}
