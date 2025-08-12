import Section from "@/components/Section";
import ResumeDownload from "@/components/ResumeDownload";

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
          <ResumeDownload />
        </div>
      </div>
    </Section>
  );
}


