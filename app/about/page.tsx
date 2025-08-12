import Section from "@/components/Section";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Section title="About">
      <div className="prose max-w-none">
        <p>
          I focus on building reliable backend and data systems for trading and analytics. I enjoy
          designing clear contracts, measuring performance, and making systems easy to operate.
        </p>
        <p>
          Interests include exchange connectivity, efficient data formats, and applied LLM/NLP for
          role-aware analysis.
        </p>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Languages & Frameworks</h3>
          <ul className="list-disc list-inside text-slate-700">
            <li>Python, TypeScript, Go</li>
            <li>Next.js, React</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Infra & Cloud</h3>
          <ul className="list-disc list-inside text-slate-700">
            <li>GCP, Kafka, BigQuery</li>
            <li>Docker, Grafana, Prometheus</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Data & AI</h3>
          <ul className="list-disc list-inside text-slate-700">
            <li>NumPy, Pandas, PyTorch</li>
            <li>Transformers</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}


