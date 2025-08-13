import type { Metadata } from "next";
import Section from "@/components/Section";
import { site, ogImageUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: site.description,
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title: `About — ${site.name}`,
    description: site.description,
    images: [ogImageUrl({ title: "About", subtitle: site.name })],
  },
};

export default function AboutPage() {
  return (
    <Section title="About">
      <div className="prose max-w-none">
        <h3 className="font-semibold">Bio</h3>
        <p>
          I focus on building reliable backend and data systems for trading and analytics. I enjoy
          designing clear contracts, measuring performance, and making systems easy to operate.
        </p>
        <p>
          Interests include exchange connectivity, efficient data formats, and applied LLM/NLP for
          role-aware analysis.
        </p>
        <h3 className="font-semibold">Currently exploring</h3>
        <ul className="list-disc list-inside text-slate-700">
          <li>Podcast role-guest graph analysis</li>
          <li>Crypto arbitrage microservices</li>
          <li>US equities quant trading system</li>
        </ul>
      </div>
      <h3 className="mt-10 font-semibold">Skills</h3>
      <div className="mt-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Languages & Frameworks</h4>
          <ul className="list-disc list-inside text-slate-700">
            <li>Python, TypeScript, Go</li>
            <li>Next.js, React</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Infra & Cloud</h4>
          <ul className="list-disc list-inside text-slate-700">
            <li>GCP, Kafka, BigQuery</li>
            <li>Docker, Grafana, Prometheus</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Data & AI</h4>
          <ul className="list-disc list-inside text-slate-700">
            <li>NumPy, Pandas, PyTorch</li>
            <li>Transformers</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}


