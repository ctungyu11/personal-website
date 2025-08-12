export default function Section({
  title,
  subtitle,
  children,
  noGap = false,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  noGap?: boolean;
}) {
  return (
    <section className={`py-10 ${noGap ? "" : "space-y-4"}`}>
      {title && <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>}
      {subtitle && <p className="text-slate-700">{subtitle}</p>}
      {children}
    </section>
  );
}


