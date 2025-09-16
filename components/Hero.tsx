import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";

export default function Hero() {
  return (
    <Section noGap>
      <div className="mt-8 mb-10 grid gap-8 md:grid-cols-[auto,1fr] items-center">
        <div className="relative w-[220px] h-[220px] mx-auto md:mx-0">
          <div className="absolute -inset-6 rounded-3xl bg-[radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.12),transparent_60%)]" />
          <div className="relative rounded-full overflow-hidden bg-white shadow-md">
            <Image src="/avatar.png" alt="Anthony Chou" width={220} height={220} />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Backend & Quantitative Developer</h1>
          <p className="text-slate-700">
            CS + Math @ UMich. I build reliable and low-latency trading and data systems, and I research LLM/NLP.
          </p>
          <div className="flex gap-3">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition">Contact</Link>
            <a href="/resume.pdf" className="inline-flex items-center justify-center rounded-xl border border-blue-600 text-blue-600 px-4 py-2 hover:bg-blue-50" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}


