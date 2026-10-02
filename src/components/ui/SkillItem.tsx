import { useState } from "react";
import type { SkillItem } from "../../types/portfolio";

export function SkillItemButton({
  item,
  selected,
  onSelect,
}: {
  item: SkillItem;
  selected: boolean;
  onSelect: (item: SkillItem) => void;
}) {
  const [hover, setHover] = useState(false);

  return (
    <button
      type="button"
      className={`skill${selected ? " is-on" : ""}`}
      aria-pressed={selected}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onClick={() => onSelect(item)}
    >
      {item.name}
      {hover && !selected && <span className="tip">{item.note}</span>}
    </button>
  );
}
