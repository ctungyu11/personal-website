import type { Metadata } from "next";
import { getFeaturedProjects } from "@/lib/projects";
import { site, ogImageUrl } from "@/lib/seo";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

export default async function HomePage() {
  const featured = await getFeaturedProjects();
  const exactlyThree = featured.slice(0, 3);
  return (
    <>
      <Hero />
      <Section title="Featured Projects">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exactlyThree.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
    </>
  );
}

export const metadata: Metadata = {
  title: `${site.title} — ${site.name}`,
  description: site.description,
  alternates: { canonical: site.url },
  openGraph: {
    title: `${site.title} — ${site.name}`,
    description: site.description,
    images: [ogImageUrl({ title: site.name, subtitle: site.title })],
  },
};
