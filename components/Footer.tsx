export default function Footer() {
  const version = process.env.NEXT_PUBLIC_APP_VERSION || "0.1.0";
  const env = process.env.VERCEL_ENV || "development";
  return (
    <div className="flex items-center justify-between h-16 text-sm text-slate-600">
      <div>© {new Date().getFullYear()} Anthony Chou</div>
      <div>
        v{version} — {env}
      </div>
    </div>
  );
}


