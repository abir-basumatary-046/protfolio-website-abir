import type { SkillCategory } from "../types/portfolio";

export const skills: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    kind: "toolbox",
    items: [
      {
        name: "React",
        note: "Primary UI library. Also the base of a shared component library with 15+ components.",
      },
      {
        name: "TypeScript",
        note: "Type-safe UI on the vendor platform and modular components on the audit platform.",
      },
      {
        name: "JavaScript",
        note: "The language underneath the React codebases.",
      },
      {
        name: "HTML",
        note: "Semantic structure for the interfaces.",
      },
      {
        name: "CSS",
        note: "Layout and visual styling alongside the component libraries.",
      },
      {
        name: "Tailwind",
        note: "Utility styling for interface work.",
      },
      {
        name: "Ant Design",
        note: "Component system on the vendor lifecycle platform, including the shared library.",
      },
      {
        name: "Redux",
        note: "Client state for React interfaces.",
      },
      {
        name: "TanStack",
        note: "Server state on the audit analytics platform.",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    kind: "cabinet",
    items: [
      { name: "C#", note: "Primary backend language." },
      {
        name: ".NET Framework",
        note: "Part of the .NET backend toolkit.",
      },
      {
        name: ".NET 8",
        note: "Web API backend for the vendor platform and the audit services.",
      },
      {
        name: "Web API",
        note: "REST APIs with authentication, authorization, and pagination.",
      },
      {
        name: "Entity Framework",
        note: "Data access, including the provider abstraction on the PostgreSQL migration PoC.",
      },
    ],
  },
  {
    id: "database",
    title: "Database",
    kind: "shelves",
    items: [
      {
        name: "MS SQL Server",
        note: "Primary relational store. Listing queries were reworked with indexing to cut response time.",
      },
      {
        name: "PostgreSQL",
        note: "Target of the MS-SQL migration proof of concept.",
      },
      {
        name: "MongoDB",
        note: "Persistence on the audit analytics platform, alongside SQL Server.",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    kind: "bench",
    items: [
      { name: "Git", note: "Day-to-day version control." },
      { name: "SSMS", note: "SQL Server inspection and query work." },
      {
        name: "Azure DevOps",
        note: "Delivery workflow on the audit platform.",
      },
      { name: "Postman", note: "Checking APIs while building them." },
      { name: "Swagger", note: "API documentation alongside the services." },
    ],
  },
  {
    id: "ai",
    title: "AI / AI-assisted engineering",
    kind: "lab",
    items: [
      {
        name: "Cursor",
        note: "Used for planning, bug fixing, refactoring, SQL, API scaffolding, tests, and docs — then reviewed by hand.",
      },
      {
        name: "Claude",
        note: "Part of the same reviewed, AI-assisted engineering workflow.",
      },
      {
        name: "OpenRouter",
        note: "Part of the AI-assisted engineering toolkit.",
      },
      {
        name: "AI Agent Design",
        note: "Reusable AI personas and agents on the audit analytics platform.",
      },
      {
        name: "LangChain",
        note: "Toolkit piece for AI-assisted engineering workflows.",
      },
      {
        name: "LangGraph",
        note: "Graph-style flows in the same AI toolkit.",
      },
      {
        name: "AI Agents",
        note: "Reusable personas and agents, reviewed before they are trusted in the work.",
      },
    ],
  },
];

export const aiWorkflow = {
  title: "AI-assisted engineering workflows",
  uses: [
    "architecture planning",
    "bug fixing",
    "refactoring",
    "SQL optimization",
    "API scaffolding",
    "unit testing",
    "documentation",
  ],
  review: "Production-quality code through manual engineering review.",
  toolsLine: "Cursor, Claude, and Composer in daily engineering — not as a substitute for reading the diff.",
};
