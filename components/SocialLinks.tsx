import Link from "next/link";
import { site } from "@/lib/seo";

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link href={site.linkedin} className="text-slate-700 hover:text-blue-600 underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
        LinkedIn
      </Link>
      <Link href={site.github} className="text-slate-700 hover:text-blue-600 underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
        GitHub
      </Link>
      <a href={site.email} className="text-slate-700 hover:text-blue-600 underline-offset-4 hover:underline">
        Email
      </a>
    </div>
  );
}


