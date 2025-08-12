import Section from "@/components/Section";

export const metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <Section title="Resume">
      <div className="flex flex-col gap-4">
        <iframe
          src="/resume.pdf#view=FitH"
          title="Resume PDF"
          className="w-full h-[80dvh] rounded-lg border border-slate-200"
        />
        <div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-lg border border-blue-600 text-blue-600 px-4 py-2 hover:bg-blue-50"
          >
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
}


