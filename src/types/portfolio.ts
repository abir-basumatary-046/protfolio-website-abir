export type LocationId =
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "contact";

export interface Profile {
  name: string;
  title: string;
  years: string;
  locationLabel: string;
  availability: string;
  stackLine: string;
  intro: string;
  about: string[];
  traits: string[];
  email: string;
  phone: string;
  githubHandle: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface Metric {
  display: string;
  caption: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  project: string;
  place: string;
  dates: string;
  timelineLabel: string;
  technologies: string[];
  overview: string;
  keyWork: string[];
  metrics: Metric[];
}

export interface ProjectRecord {
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  databases: { id: string; label: string; snippet: string }[];
  githubUrl: string;
  demoUrl: string;
}

export interface SkillItem {
  name: string;
  note: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  kind: "toolbox" | "cabinet" | "shelves" | "bench" | "lab";
  items: SkillItem[];
}

export interface EducationRecord {
  degree: string;
  institution: string;
  dates: string;
}

export interface WorldLocation {
  id: LocationId;
  label: string;
  x: number;
  y: number;
  tilt: number;
}
