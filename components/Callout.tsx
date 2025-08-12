import { Mail } from "lucide-react";

export default function Callout({
  title,
  children,
  icon = <Mail size={18} aria-hidden />,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="relative rounded-2xl border border-blue-200 bg-blue-50/40 p-5">
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-blue-600" aria-hidden />
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-blue-700">{icon}</div>
        <div className="space-y-2">
          <h4 className="text-slate-900 font-semibold">{title}</h4>
          <div className="text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
}


