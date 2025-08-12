"use client";

import Plausible from "plausible-tracker";

const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "";

const client = Plausible({
  domain,
  apiHost: "/stats", // first‑party proxy path; set in vercel rewrites later
  trackLocalhost: false,
});
export const { trackEvent, trackPageview, enableAutoOutboundTracking, enableAutoPageviews } = client;

export type EventMap = {
  resume_download: undefined | Record<string, never>;
  contact_submit: { success: boolean };
  project_view: { slug: string };
};

export function track<E extends keyof EventMap>(event: E, data?: EventMap[E]) {
  try {
    const props = (data ?? {}) as Record<string, string | number | boolean>;
    trackEvent(event as string, { props });
  } catch {}
}


