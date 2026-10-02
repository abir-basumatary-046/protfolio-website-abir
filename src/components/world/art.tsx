import type { ReactElement } from "react";

type Palette = Record<string, string>;

export function pixels(
  rows: string[],
  palette: Palette,
  scale = 4,
) {
  const rects: ReactElement[] = [];
  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x += 1) {
      const color = palette[row[x] ?? ""];
      if (!color) continue;
      rects.push(
        <rect
          key={`${x}-${y}`}
          x={x * scale}
          y={y * scale}
          width={scale}
          height={scale}
          fill={color}
        />,
      );
    }
  });
  return rects;
}

const person = [
  "......1111......",
  ".....1111111....",
  ".....1222121....",
  ".....1222221....",
  "......2222......",
  ".....3333333....",
  "....333444333...",
  "...3344444433...",
  "...3344444433...",
  "....33444333....",
  ".....33333......",
  "......5555......",
  ".....55..55.....",
  ".....55..55.....",
  ".....66..66.....",
];

const personPalette: Palette = {
  "1": "#2a241c",
  "2": "#e2b48e",
  "3": "#3d6f86",
  "4": "#c46b4a",
  "5": "#2c3548",
  "6": "#1a1e28",
};

const cat = ["..ooo...", ".oowoo..", ".oooooo.", "oooooooo", "..o..o.."];

const catPalette: Palette = {
  o: "#e09a5a",
  w: "#2a241c",
};

export function PixelPerson({ scale = 4 }: { scale?: number }) {
  return (
    <svg
      width={16 * scale}
      height={15 * scale}
      viewBox={`0 0 ${16 * scale} ${15 * scale}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {pixels(person, personPalette, scale)}
    </svg>
  );
}

export function PixelCat({ scale = 4 }: { scale?: number }) {
  return (
    <svg
      width={8 * scale}
      height={5 * scale}
      viewBox={`0 0 ${8 * scale} ${5 * scale}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <g className="tail">
        <rect x={0} y={scale * 2} width={scale} height={scale} fill="#c9844a" />
        <rect x={scale} y={scale} width={scale} height={scale} fill="#e09a5a" />
      </g>
      {pixels(cat, catPalette, scale)}
    </svg>
  );
}

export function Moon() {
  return (
    <svg className="moon" width="74" height="74" viewBox="0 0 74 74" aria-hidden="true">
      <g className="moon-night">
        <circle cx="34" cy="36" r="26" fill="#f3e6c4" />
        <circle cx="44" cy="30" r="4" fill="#e4d3a4" />
        <circle cx="28" cy="42" r="3" fill="#e4d3a4" />
        <circle cx="38" cy="48" r="2" fill="#e4d3a4" />
      </g>
      <g className="moon-sun">
        <circle cx="37" cy="37" r="16" fill="#f6d56a" />
        <rect x="34" y="6" width="6" height="8" fill="#f2c572" />
        <rect x="34" y="60" width="6" height="8" fill="#f2c572" />
        <rect x="6" y="34" width="8" height="6" fill="#f2c572" />
        <rect x="60" y="34" width="8" height="6" fill="#f2c572" />
      </g>
    </svg>
  );
}

export function Cloud({ className }: { className?: string }) {
  return (
    <svg className={className} width="120" height="42" viewBox="0 0 120 42" aria-hidden="true" shapeRendering="crispEdges">
      <rect x="24" y="16" width="64" height="16" fill="rgba(214,226,236,0.28)" />
      <rect x="36" y="8" width="40" height="12" fill="rgba(214,226,236,0.28)" />
      <rect x="16" y="20" width="16" height="10" fill="rgba(214,226,236,0.22)" />
      <rect x="84" y="18" width="20" height="12" fill="rgba(214,226,236,0.22)" />
    </svg>
  );
}

const heights = [42, 78, 54, 96, 36, 70, 120, 48, 84, 40, 64, 100, 32, 76, 52, 88, 44, 60];

export function Skyline() {
  let x = 16;
  return (
    <svg className="skyline" viewBox="0 0 1440 150" width="1440" height="150" aria-hidden="true" shapeRendering="crispEdges">
      {heights.map((h, i) => {
        const w = i % 3 === 0 ? 54 : 40;
        const node = (
          <g key={i}>
            <rect x={x} y={150 - h} width={w - 8} height={h} fill={i % 2 === 0 ? "#121c2c" : "#182536"} />
            {h > 60 && (
              <rect className={i === 6 ? "window-glow city-light" : "city-light"} x={x + 8} y={150 - h + 12} width="6" height="6" fill={i % 4 === 0 ? "#f2c572" : "#8fb4cc"} opacity="0.8" />
            )}
          </g>
        );
        x += w;
        return node;
      })}
    </svg>
  );
}

export function IslandAbout() {
  return (
    <svg width="188" height="132" viewBox="0 0 188 132" aria-hidden="true" shapeRendering="crispEdges">
      <path d="M18 78c22-22 48-16 62-12 22-16 58-10 92 8-8 28-46 36-78 32-28 6-66 2-76-28z" fill="#4a3428" />
      <path d="M26 80c20-16 42-12 58-10 18-12 52-8 78 6-18 10-70 12-136 4z" fill="#3d6844" />
      <rect x="34" y="48" width="8" height="28" fill="#6b4a32" />
      <rect x="18" y="36" width="40" height="16" fill="#2f6a3e" />
      <rect x="22" y="28" width="32" height="12" fill="#3e7d4c" />
      <rect x="28" y="22" width="20" height="10" fill="#4e8a56" />
      <rect x="92" y="46" width="52" height="32" fill="#8d6244" />
      <polygon points="86,48 118,28 150,48" fill="#6e3b38" />
      <rect className="window-glow" x="104" y="56" width="12" height="10" fill="#f2c572" />
      <rect x="124" y="58" width="10" height="20" fill="#4a3028" />
    </svg>
  );
}

export function IslandExperience() {
  return (
    <svg width="210" height="128" viewBox="0 0 210 128" aria-hidden="true" shapeRendering="crispEdges">
      <path d="M12 74c30-18 70-20 96-8 28-16 70-6 96 10-10 26-50 32-96 28-40 6-86 4-96-30z" fill="#3e322c" />
      <path d="M20 76c28-12 64-14 92-6 24-12 58-4 78 8-24 8-90 10-170-2z" fill="#3f6846" />
      <rect x="62" y="28" width="78" height="50" fill="#243044" />
      <rect x="70" y="36" width="10" height="8" fill="#8fb4cc" />
      <rect x="86" y="36" width="10" height="8" fill="#8fb4cc" />
      <rect className="window-glow" x="102" y="36" width="10" height="8" fill="#f2c572" />
      <rect x="118" y="36" width="10" height="8" fill="#8fb4cc" />
      <rect x="70" y="50" width="10" height="8" fill="#8fb4cc" />
      <rect x="86" y="50" width="10" height="8" fill="#6f93ab" />
      <rect x="102" y="50" width="10" height="8" fill="#8fb4cc" />
      <rect x="118" y="50" width="10" height="8" fill="#8fb4cc" />
      <rect x="96" y="18" width="6" height="12" fill="#9aa8b8" />
    </svg>
  );
}

export function IslandProjects() {
  return (
    <svg width="176" height="124" viewBox="0 0 176 124" aria-hidden="true" shapeRendering="crispEdges">
      <path d="M14 70c24-16 50-14 70-8 20-14 48-6 74 10-12 24-46 30-74 26-30 6-64 2-70-28z" fill="#46342c" />
      <path d="M22 72c22-12 48-10 66-6 16-10 40-4 60 8-20 8-70 10-126-2z" fill="#456b48" />
      <rect x="48" y="40" width="70" height="34" fill="#6d5138" />
      <polygon points="44,42 83,22 122,42" fill="#5c4030" />
      <rect x="70" y="50" width="28" height="18" fill="#10241c" />
      <rect className="window-glow" x="76" y="54" width="16" height="8" fill="#7dcea8" />
      <rect x="128" y="28" width="4" height="36" fill="#8a9098" />
      <rect x="120" y="28" width="18" height="4" fill="#e09a5a" />
    </svg>
  );
}

export function IslandSkills() {
  return (
    <svg width="168" height="110" viewBox="0 0 168 110" aria-hidden="true" shapeRendering="crispEdges">
      <path d="M16 64c26-16 52-12 70-8 18-12 42-4 62 12-8 22-40 28-66 24-28 4-58 0-66-28z" fill="#4a382e" />
      <path d="M24 66c22-10 46-8 64-6 14-8 36-2 50 8-18 8-60 8-114-2z" fill="#4a704c" />
      <rect x="46" y="58" width="22" height="12" fill="#8a5a34" />
      <rect x="92" y="60" width="18" height="10" fill="#6d5438" />
      <rect x="78" y="36" width="4" height="28" fill="#6b4a32" />
      <rect x="70" y="34" width="22" height="8" fill="#d7c7a4" />
    </svg>
  );
}

export function IslandEducation() {
  return (
    <svg width="188" height="140" viewBox="0 0 188 140" aria-hidden="true" shapeRendering="crispEdges">
      <path d="M20 96c24-10 50-12 70-4 22-12 52-4 74 12-16 22-48 24-74 20-30 6-58 2-70-28z" fill="#3d342e" />
      <polygon points="94,18 148,92 40,92" fill="#66768c" />
      <polygon points="94,18 122,58 70,56" fill="#e7eef4" />
      <polygon points="78,70 110,70 100,88 70,86" fill="#7f8ea0" />
      <g className="edu-flag">
        <rect x="92" y="14" width="2" height="22" fill="#f3e6c8" />
        <polygon points="94,14 112,20 94,26" fill="#d4a0a8" />
      </g>
    </svg>
  );
}

export function IslandContact() {
  return (
    <svg width="160" height="116" viewBox="0 0 160 116" aria-hidden="true" shapeRendering="crispEdges">
      <path d="M12 68c22-14 46-12 64-6 16-12 40-4 66 12-10 22-40 26-66 22-26 6-56 2-64-28z" fill="#3a302c" />
      <path d="M20 70c18-10 40-8 58-4 12-8 34-2 52 8-16 8-58 8-110-4z" fill="#3d6544" />
      <rect x="48" y="40" width="58" height="28" fill="#5c4638" />
      <polygon points="44,42 77,24 112,42" fill="#6e3b38" />
      <rect className="window-glow" x="70" y="50" width="12" height="10" fill="#f2c572" />
      <rect x="28" y="62" width="10" height="16" fill="#1a2434" />
      <rect x="122" y="58" width="14" height="20" fill="#1a2434" />
    </svg>
  );
}

export function Bridge() {
  return (
    <svg className="bridge" width="86" height="28" viewBox="0 0 86 28" aria-hidden="true" shapeRendering="crispEdges" style={{ left: 820, top: 590 }}>
      <path d="M4 6 C 30 16, 54 4, 82 10" stroke="#cbb48a" strokeWidth="2" fill="none" />
      <rect x="10" y="14" width="14" height="4" fill="#8a5a34" transform="rotate(-6 17 16)" />
      <rect x="30" y="16" width="14" height="4" fill="#7a4e2e" />
      <rect x="50" y="14" width="14" height="4" fill="#8a5a34" transform="rotate(5 57 16)" />
    </svg>
  );
}

export function DeskRoom() {
  return (
    <svg viewBox="0 0 460 520" width="100%" height="100%" aria-hidden="true" shapeRendering="crispEdges">
      <rect className="room-sky" width="460" height="520" fill="#121a28" />
      <rect className="room-window" x="36" y="36" width="180" height="120" fill="#0c1422" stroke="#d7c7a4" strokeWidth="6" />
      <rect x="48" y="100" width="18" height="40" fill="#1c2c40" />
      <rect x="74" y="86" width="28" height="54" fill="#24384e" />
      <rect x="112" y="70" width="22" height="70" fill="#1a3044" />
      <rect x="142" y="92" width="16" height="48" fill="#2a241c" />
      <rect className="window-glow" x="148" y="100" width="6" height="6" fill="#f2c572" />
      <rect x="0" y="300" width="460" height="220" fill="#1a140f" />
      <rect x="40" y="250" width="300" height="16" fill="#6b4a32" />
      <rect x="56" y="266" width="12" height="70" fill="#5a3d2a" />
      <rect x="312" y="266" width="12" height="70" fill="#5a3d2a" />
      <rect x="78" y="168" width="86" height="64" fill="#101820" stroke="#8aa0b4" strokeWidth="4" />
      <rect x="176" y="180" width="78" height="52" fill="#101820" stroke="#8aa0b4" strokeWidth="4" />
      <rect x="90" y="180" width="60" height="6" fill="#7dcea8" />
      <rect x="90" y="192" width="40" height="4" fill="#8fb4cc" />
      <rect x="188" y="192" width="48" height="4" fill="#e09a5a" />
      <rect x="188" y="202" width="30" height="4" fill="#7dcea8" />
      <rect x="150" y="246" width="90" height="8" fill="#2a241c" />
      <rect x="250" y="214" width="16" height="22" fill="#f3e6c8" />
      <rect x="254" y="206" width="8" height="8" fill="#6b4a32" />
      <rect x="246" y="232" width="22" height="6" fill="#c46b4a" />
      <rect x="300" y="196" width="10" height="40" fill="#8a5a34" />
      <rect className="window-glow" x="294" y="184" width="22" height="14" fill="#f2c572" />
      <rect x="24" y="210" width="28" height="8" fill="#6e3b38" />
      <rect x="28" y="198" width="20" height="12" fill="#7a3d3a" />
      <rect x="20" y="218" width="22" height="6" fill="#5c4030" />
      <rect x="338" y="220" width="18" height="22" fill="#3d6b45" />
      <rect x="332" y="238" width="30" height="10" fill="#8a5a34" />
      <g transform="translate(118,292)">
        {pixels(person, personPalette, 5)}
      </g>
      <g transform="translate(300,330)">
        {pixels(cat, catPalette, 4)}
      </g>
    </svg>
  );
}

export function OfficeWash() {
  return (
    <svg viewBox="0 0 1440 180" width="100%" height="120" aria-hidden="true" shapeRendering="crispEdges" preserveAspectRatio="none">
      <rect className="room-sky" width="1440" height="180" fill="#101826" />
      <rect x="80" y="40" width="90" height="140" fill="#1a2638" />
      <rect x="200" y="70" width="70" height="110" fill="#162232" />
      <rect x="1100" y="30" width="120" height="150" fill="#1a2638" />
      <rect x="1240" y="60" width="80" height="120" fill="#142033" />
      <rect className="window-glow" x="100" y="56" width="10" height="8" fill="#f2c572" />
      <rect x="120" y="56" width="10" height="8" fill="#8fb4cc" />
      <rect x="1120" y="48" width="10" height="8" fill="#8fb4cc" />
      <rect x="1140" y="48" width="10" height="8" fill="#f2c572" />
    </svg>
  );
}

export function WorkshopArt() {
  return (
      <svg className="desk" viewBox="0 0 420 460" width="100%" height="100%" aria-hidden="true" shapeRendering="crispEdges">
      <rect className="room-sky" width="420" height="460" fill="#101820" />
      <rect x="40" y="36" width="8" height="70" fill="#6b4a32" />
      <rect className="window-glow" x="24" y="28" width="40" height="16" fill="#f2c572" />
      <rect x="48" y="250" width="300" height="14" fill="#6b4a32" />
      <rect x="70" y="264" width="10" height="60" fill="#5a3d2a" />
      <rect x="320" y="264" width="10" height="60" fill="#5a3d2a" />
      <rect x="250" y="300" width="36" height="50" fill="#243044" />
      <rect x="258" y="310" width="8" height="8" fill="#7dcea8" />
      <rect x="270" y="318" width="8" height="8" fill="#8fb4cc" />
      <rect x="36" y="300" width="40" height="8" fill="#8a5a34" />
      <rect x="40" y="308" width="32" height="8" fill="#6b4a32" />
      <rect x="44" y="316" width="24" height="8" fill="#5c4030" />
    </svg>
  );
}

export function MountainScene() {
  return (
    <svg viewBox="0 0 520 520" width="100%" height="100%" aria-hidden="true">
      <rect className="room-sky" width="520" height="520" fill="#0d1726" />
      <circle className="scene-moon" cx="400" cy="80" r="28" fill="#f3e6c4" />
      <polygon points="260,40 470,420 50,420" fill="#5d6e84" />
      <polygon points="260,40 340,150 190,146" fill="#e7eef4" />
      <polygon points="150,250 300,250 270,340 120,330" fill="#7d8da2" />
      <rect x="70" y="360" width="120" height="70" fill="#6b5344" />
      <polygon points="60,360 130,310 200,360" fill="#6e3b38" />
      <rect x="118" y="390" width="16" height="28" fill="#3a2418" />
      <g className="edu-flag">
        <rect x="256" y="36" width="3" height="36" fill="#f3e6c8" />
        <polygon points="259,36 300,50 259,64" fill="#d4a0a8" />
      </g>
    </svg>
  );
}

export function RooftopScene() {
  return (
    <svg viewBox="0 0 520 520" width="100%" height="100%" aria-hidden="true" shapeRendering="crispEdges">
      <rect className="room-sky" width="520" height="520" fill="#0c1524" />
      <rect x="0" y="300" width="520" height="220" fill="#14110f" />
      <rect x="40" y="250" width="70" height="90" fill="#1a2636" />
      <rect x="130" y="210" width="50" height="130" fill="#182433" />
      <rect x="360" y="230" width="90" height="110" fill="#1a2636" />
      <rect className="window-glow" x="380" y="250" width="8" height="8" fill="#f2c572" />
      <rect x="400" y="266" width="8" height="8" fill="#8fb4cc" />
      <rect x="60" y="270" width="8" height="8" fill="#f2c572" />
      <g transform="translate(180,250)">
        {pixels(person, personPalette, 6)}
      </g>
      <g transform="translate(300,310)">
        {pixels(cat, catPalette, 5)}
      </g>
    </svg>
  );
}
