import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="I aim to reply within 48 hours.">
      <ContactForm />
    </Section>
  );
}


