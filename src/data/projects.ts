import type { ProjectRecord } from "../types/portfolio";

/**
 * Replace with the DBAgnosticProject repository URL when it is public.
 * Leave empty until then — the GitHub button stays inactive.
 */
export const GITHUB_PROJECT_URL = "";

/** Optional live demo. No demo URL was provided. */
export const PROJECT_DEMO_URL = "";

export const project: ProjectRecord = {
  name: "DBAgnosticProject",
  tagline:
    "Database-switchable application demonstrating compatibility across multiple relational databases.",
  description:
    "Built a full-stack application with an abstracted database layer, enabling seamless switching between relational databases with minimal code changes.",
  technologies: [".NET Web API", "React", "PostgreSQL", "MySQL", "MS SQL"],
  databases: [
    {
      id: "postgres",
      label: "PostgreSQL",
      snippet: "SELECT id, name\nFROM vendors\nWHERE active = $1;",
    },
    {
      id: "mysql",
      label: "MySQL",
      snippet: "SELECT id, name\nFROM vendors\nWHERE active = ?;",
    },
    {
      id: "mssql",
      label: "MS SQL",
      snippet: "SELECT id, name\nFROM vendors\nWHERE active = @active;",
    },
  ],
  githubUrl: GITHUB_PROJECT_URL,
  demoUrl: PROJECT_DEMO_URL,
};
