import type { ButtonHTMLAttributes } from "react";

type Tone = "cream" | "wood" | "ghost";

export function PixelButton({
  tone = "cream",
  className = "",
  type = "button",
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { tone?: Tone }) {
  return (
    <button type={type} className={`px-btn px-btn-${tone} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function PixelAnchor({
  href,
  children,
  tone = "ghost",
  pendingLabel = "Add the URL in src/data before this link can open.",
}: {
  href?: string;
  children: string;
  tone?: Tone;
  pendingLabel?: string;
}) {
  if (!href) {
    return (
      <button type="button" className={`px-btn px-btn-${tone}`} disabled title={pendingLabel}>
        {children}
      </button>
    );
  }

  const external = href.startsWith("http");
  return (
    <a
      className={`px-btn px-btn-${tone}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
