import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import SocialLinks from "@/components/SocialLinks";
import Callout from "@/components/Callout";
import { site, ogImageUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: `Get in touch with ${site.name}`,
  alternates: { canonical: `${site.url}/contact` },
  openGraph: {
    title: `Contact — ${site.name}`,
    description: `Get in touch with ${site.name}`,
    images: [ogImageUrl({ title: "Contact", subtitle: site.name })],
  },
};

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="I aim to reply within 48 hours.">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h3 className="text-lg font-semibold mb-3">Send a message</h3>
          <ContactForm />
        </div>
        <div className="space-y-4">
          <Callout title="Prefer email or social?">
            <div className="space-y-2">
              <p>Reach me via the links below, or use the form.</p>
              <SocialLinks />
            </div>
          </Callout>
        </div>
      </div>
    </Section>
  );
}


