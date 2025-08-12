import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://anthonychou.dev";
  const projects = await getAllProjects();
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/projects",
    "/about",
    "/resume",
    "/contact",
  ].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}


