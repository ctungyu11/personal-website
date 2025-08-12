import { z } from "zod";
import fs from "node:fs/promises";
import path from "node:path";

export const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  tags: z.array(z.enum(["Backend", "Quant", "AI"])),
  stack: z.array(z.string()),
  summary: z.string(),
  outcomes: z.array(z.string()).optional(),
  links: z.object({ code: z.string().url().optional(), writeup: z.string().url().optional(), demo: z.string().url().optional() }),
  hero: z.string().optional(),
  featured: z.boolean().optional(),
  problem: z.string().optional(),
  approach: z.string().optional(),
  results: z.array(z.string()).optional(),
});

export type Project = z.infer<typeof ProjectSchema>;

const projectsFile = path.join(process.cwd(), "content", "projects.json");

export async function getAllProjects(): Promise<Project[]> {
  const raw = await fs.readFile(projectsFile, "utf8");
  const data = JSON.parse(raw);
  const parsed = z.array(ProjectSchema).safeParse(data);
  if (!parsed.success) {
    // Avoid leaking details; log server side
    console.error("Invalid projects.json", parsed.error.flatten());
    throw new Error("Invalid project content");
  }
  return parsed.data;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getAllProjects();
  return all.filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const all = await getAllProjects();
  return all.find((p) => p.slug === slug);
}

export async function getProjectSlugs(): Promise<string[]> {
  const all = await getAllProjects();
  return all.map((p) => p.slug);
}


