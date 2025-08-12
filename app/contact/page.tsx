import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import SocialLinks from "@/components/SocialLinks";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="I aim to reply within 48 hours.">
      <div className="mb-6">
        <SocialLinks />
      </div>
      <ContactForm />
    </Section>
  );
}


