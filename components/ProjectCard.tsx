"use client";

import Link from "next/link";
import { track } from "@/lib/plausible";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, clickable = false }: { project: Project; clickable?: boolean }) {
  const content = (
    <div className="group relative rounded-2xl border border-slate-200 p-5 bg-white shadow-sm hover:shadow-md transition will-change-transform">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
        <div className="flex gap-1">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 text-[10px] uppercase tracking-wide">{t}</span>
          ))}
        </div>
      </div>
      <p className="mt-2 text-slate-700">{project.summary}</p>
      {project.outcomes && project.outcomes.length > 0 && (
        <ul className="mt-3 text-sm text-slate-700 list-disc list-inside space-y-1">
          {project.outcomes.slice(0, 3).map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="rounded-md bg-slate-100 text-slate-800 px-2 py-1 text-[11px] font-mono uppercase tracking-wider">{s}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-4 text-sm">
        {project.links.code && (
          <a href={project.links.code} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Code</a>
        )}
        {project.links.writeup && (
          <a href={project.links.writeup} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Writeup</a>
        )}
        {project.links.demo && (
          <a href={project.links.demo} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Demo</a>
        )}
      </div>
    </div>
  );

  if (clickable) {
    return (
      <Link
        href={`/projects/${project.slug}`}
        onClick={() => track("project_view", { slug: project.slug })}
        className="block"
      >
        {content}
      </Link>
    );
  }
  return content;
}


