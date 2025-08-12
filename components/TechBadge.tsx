export default function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-md bg-slate-100 text-slate-800 px-2 py-1 text-[11px] font-mono uppercase tracking-wider">
      {label}
    </span>
  );
}


