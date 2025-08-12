import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import SocialLinks from "@/components/SocialLinks";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="I aim to reply within 48 hours.">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact information</h3>
          <p className="text-slate-700">Prefer email or social? Reach me here:</p>
          <SocialLinks />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Send a message</h3>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}


