import type { ReactNode } from "react";

type Variant = "glass" | "paper" | "wood" | "crt";

export function PixelPanel({
  variant,
  className = "",
  children,
}: {
  variant: Variant;
  className?: string;
  children: ReactNode;
}) {
  return <div className={`panel panel-${variant} ${className}`}>{children}</div>;
}
