import { PixelCat, PixelPerson } from "./art";

export function WorldCharacter({ onCat }: { onCat: () => void }) {
  return (
    <>
      <div className="character-wrap" aria-hidden="true">
        <PixelPerson scale={4} />
      </div>
      <button type="button" className="cat-btn" aria-label="Cat" onClick={onCat}>
        <PixelCat scale={4} />
      </button>
    </>
  );
}
