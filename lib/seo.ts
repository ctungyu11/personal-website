import type { Metadata } from "next";

export const site = {
  name: "Anthony Chou",
  title: "Backend Engineer & Quant Developer",
  description:
    "CS + Math @ UMich. I build reliable trading and data systems, and I research LLM/NLP for role-aware speaker analysis.",
  url: "https://anthonychou.dev",
  twitter: "",
  github: "https://github.com/ctungyu11",
  linkedin: "https://www.linkedin.com/in/ctungyu11",
  email: "mailto:ctungyu11@gmail.com",
};

export function baseMetadata(overrides?: Partial<Metadata>): Metadata {
  const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.title} — ${site.name}`,
      template: `%s — ${site.name}`,
    },
    description: site.description,
    applicationName: site.name,
    openGraph: {
      type: "website",
      url: site.url,
      siteName: site.name,
      title: `${site.title} — ${site.name}`,
      description: site.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.title} — ${site.name}`,
      description: site.description,
    },
    alternates: {
      canonical: site.url,
    },
  };
  return { ...metadata, ...overrides };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    headline: site.title,
    url: site.url,
    email: site.email,
    sameAs: [site.github, site.linkedin].filter(Boolean),
  };
}

export function ogImageUrl({ title, subtitle }: { title: string; subtitle?: string }) {
  const url = new URL("/og", site.url);
  url.searchParams.set("title", title);
  if (subtitle) url.searchParams.set("subtitle", subtitle);
  return url.toString();
}


