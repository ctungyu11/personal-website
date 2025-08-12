"use client";

import { useRouter, useSearchParams } from "next/navigation";

const options = ["All", "Backend", "Quant", "AI"] as const;
type Option = (typeof options)[number];

export default function FilterChips({ selected }: { selected: string }) {
  const sp = useSearchParams();
  const router = useRouter();
  const current = (selected as Option) || "All";

  function onSelect(next: Option) {
    const params = new URLSearchParams(sp?.toString());
    if (next === "All") params.delete("tag");
    else params.set("tag", next);
    router.push(`/projects${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <div role="radiogroup" aria-label="Filter projects" className="flex gap-2 flex-wrap">
      {options.map((o) => {
        const isSelected = o === current;
        return (
          <button
            key={o}
            role="radio"
            aria-checked={isSelected}
            onClick={() => onSelect(o)}
            className={`rounded-full px-3 py-1.5 text-sm border ${
              isSelected ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-800 border-slate-300 hover:bg-slate-50"
            } focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}


