import { Suspense } from "react";
import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import FilterChips from "@/components/FilterChips";
import Section from "@/components/Section";

export const revalidate = 3600;

type Tag = "Backend" | "Quant" | "AI" | "All" | undefined;

function isProjectTag(value: unknown): value is Exclude<Tag, "All" | undefined> {
  return value === "Backend" || value === "Quant" || value === "AI";
}

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ tag?: Tag }> }) {
  const { tag } = await searchParams;
  const projects = await getAllProjects();
  const filtered = isProjectTag(tag) ? projects.filter((p) => p.tags.includes(tag)) : projects;
  return (
    <>
      <Section title="Projects" subtitle="Browse by focus area">
        <FilterChips selected={tag || "All"} />
        <Suspense>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} clickable />
            ))}
          </div>
        </Suspense>
      </Section>
    </>
  );
}


