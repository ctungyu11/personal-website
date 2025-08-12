import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";
import Section from "@/components/Section";
import TechBadge from "@/components/TechBadge";

export const revalidate = 3600;

export async function generateStaticParams() {
  // Build-time ISR can be added later; dynamic for now
  return [];
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return notFound();
  return (
    <Section title={project.title}>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full border px-2 py-1 text-xs uppercase tracking-wide text-slate-700 border-slate-300 bg-slate-50">{t}</span>
        ))}
        {project.stack.map((s) => (
          <TechBadge key={s} label={s} />
        ))}
      </div>
      {project.problem && (
        <div className="prose max-w-none">
          <h3>Problem</h3>
          <p>{project.problem}</p>
        </div>
      )}
      {project.approach && (
        <div className="prose max-w-none mt-6">
          <h3>Approach</h3>
          <p>{project.approach}</p>
        </div>
      )}
      {project.results && project.results.length > 0 && (
        <div className="prose max-w-none mt-6">
          <h3>Results</h3>
          <ul>
            {project.results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-8 flex gap-4">
        {project.links.code && (
          <a className="text-blue-600 hover:underline" href={project.links.code} target="_blank" rel="noreferrer">Code</a>
        )}
        {project.links.writeup && (
          <a className="text-blue-600 hover:underline" href={project.links.writeup} target="_blank" rel="noreferrer">Writeup</a>
        )}
        {project.links.demo && (
          <a className="text-blue-600 hover:underline" href={project.links.demo} target="_blank" rel="noreferrer">Demo</a>
        )}
      </div>
      <div className="mt-10">
        <Link href="/projects" className="text-sm text-blue-600 hover:underline">← Back to Projects</Link>
      </div>
    </Section>
  );
}


