import { createContext, useContext, useState, type ReactNode } from "react";

export type TimeOfDay = "day" | "evening" | "night";

const options: { id: TimeOfDay; label: string }[] = [
  { id: "day", label: "Day" },
  { id: "evening", label: "Evening" },
  { id: "night", label: "Night" },
];

const TimeContext = createContext<{
  time: TimeOfDay;
  setTime: (time: TimeOfDay) => void;
} | null>(null);

export function TimeProvider({ children }: { children: ReactNode }) {
  const [time, setTime] = useState<TimeOfDay>("night");
  return <TimeContext.Provider value={{ time, setTime }}>{children}</TimeContext.Provider>;
}

export function useTimeOfDay() {
  const value = useContext(TimeContext);
  if (!value) throw new Error("useTimeOfDay must be used inside TimeProvider");
  return value;
}

export function TimeSwitch() {
  const { time, setTime } = useTimeOfDay();

  return (
    <div className="time-switch" role="group" aria-label="Time of day">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className={time === option.id ? "is-on" : ""}
          aria-pressed={time === option.id}
          onClick={() => setTime(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
