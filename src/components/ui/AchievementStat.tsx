import type { Metric } from "../../types/portfolio";
import { useCountUp } from "../../hooks/useCountUp";

export function AchievementStat({ metric }: { metric: Metric }) {
  const countable = metric.display.match(/^(~?)(\d+)([+%×])$/);
  const target = countable ? Number(countable[2]) : 0;
  const counted = useCountUp(target);

  const display = countable
    ? `${countable[1]}${counted}${countable[3]}`
    : metric.display;

  return (
    <article className="plaque">
      <strong>{display}</strong>
      <span>{metric.caption}</span>
    </article>
  );
}
