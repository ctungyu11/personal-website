import Link from "next/link";
import { site } from "@/lib/seo";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <Link
        href={site.linkedin}
        aria-label="LinkedIn"
        className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 underline-offset-4 hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin size={18} aria-hidden />
        <span>LinkedIn</span>
      </Link>
      <Link
        href={site.github}
        aria-label="GitHub"
        className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 underline-offset-4 hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        <Github size={18} aria-hidden />
        <span>GitHub</span>
      </Link>
      <a
        href={site.email}
        aria-label="Email"
        className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 underline-offset-4 hover:underline"
      >
        <Mail size={18} aria-hidden />
        <span>Email</span>
      </a>
    </div>
  );
}


