import type { ExperienceEntry } from "../types/portfolio";

export const experience: ExperienceEntry[] = [
  {
    id: "vendor",
    role: "Full-Stack Developer",
    company: "PwC India",
    project: "Enterprise Vendor Lifecycle Platform",
    place: "Kolkata, India",
    dates: "Jul 2023 – Present",
    timelineLabel: "Vendor Lifecycle",
    technologies: [
      "React",
      "TypeScript",
      "Ant Design",
      ".NET 8",
      "SQL Server",
      "PostgreSQL",
    ],
    overview:
      "Architected end-to-end features across the React/TypeScript frontend and .NET 8 backend, owning database schema design, REST API development, and UI delivery.",
    keyWork: [
      "Designed and implemented REST APIs in .NET 8 with Entity Framework, including authentication, authorization, and pagination.",
      "Optimized data access by refactoring view models, eliminating N+1 queries, and restructuring multi-join SQL with indexing.",
      "Reduced average response time on key listing APIs from 2.5 seconds to 0.5 seconds — a 5× improvement.",
      "Delivered an MS-SQL to PostgreSQL migration proof of concept: schema translation, data migration scripts, and an EF provider abstraction. Estimated ~30% infrastructure cost savings.",
      "Resolved 40+ production-critical bugs and reduced recurring defects by approximately 20%.",
      "Built a reusable React, TypeScript, and Ant Design component library covering 15+ components.",
      "Used Cursor, Claude, and Composer for architecture planning, bug fixing, refactoring, SQL optimization, API scaffolding, unit testing, and documentation — with manual engineering review before anything shipped.",
    ],
    metrics: [
      { display: "2.5s → 0.5s", caption: "API response time" },
      { display: "5×", caption: "Faster data retrieval" },
      { display: "40+", caption: "Production-critical bugs resolved" },
      { display: "~20%", caption: "Fewer recurring defects" },
      {
        display: "~30%",
        caption: "Projected infrastructure savings from the migration PoC",
      },
    ],
  },
  {
    id: "audit",
    role: "Full-Stack Developer",
    company: "PwC India",
    project: "Audit Analytics and Materiality Platform",
    place: "Kolkata, India",
    dates: "Same consulting role",
    timelineLabel: "Audit Analytics",
    technologies: [
      "React",
      "TanStack",
      "Fluent UI",
      ".NET 8",
      "MongoDB",
      "SQL Server",
      "Microservices",
      "Azure DevOps",
      "GitHub",
    ],
    overview:
      "Full-stack work on a second platform during the same PwC role: microservices, a React and Fluent UI frontend, and .NET 8 services backed by MongoDB and SQL Server.",
    keyWork: [
      "Built full-stack features across a microservices architecture.",
      "Shipped React and Fluent UI screens against .NET 8 backend services.",
      "Worked with MongoDB and SQL Server, and integrated REST APIs.",
      "Built reusable AI personas and agents, plus modular type-safe React components.",
      "Used TanStack for server state and kept Fluent UI consistent across the interface.",
      "Wrote technical documentation, joined code reviews, and paid attention to accessibility.",
      "Delivered in Agile / Scrum. Average feature delivery moved from about 5 days to about 3.5 days — roughly 30% faster.",
    ],
    metrics: [
      { display: "~5 days → ~3.5 days", caption: "Average feature delivery" },
      { display: "~30%", caption: "Faster feature delivery" },
    ],
  },
];
