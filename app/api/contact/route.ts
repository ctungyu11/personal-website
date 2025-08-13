import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Simple in-memory rate limiter (per instance). Good enough for low volume.
const RATE_WINDOW_MS = 60_000; // 1 minute window
const RATE_MAX = 3; // max 3 requests per window per key
const recentRequests = new Map<string, number[]>();

function getClientKey(request: Request): string {
  const ipHeader = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
  const ip = ipHeader.split(",")[0].trim();
  const ua = request.headers.get("user-agent") || "unknown";
  return `${ip}:${ua}`;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const from = now - RATE_WINDOW_MS;
  const hits = (recentRequests.get(key) || []).filter((t) => t > from);
  hits.push(now);
  recentRequests.set(key, hits);
  return hits.length > RATE_MAX;
}

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().max(320).email({ message: "Invalid email" }),
  message: z.string().trim().min(10, "Message is too short").max(2000, "Message is too long"),
  company: z.string().optional(), // honeypot
});

export async function POST(request: Request) {
  try {
    // Rate limit by IP/UA
    const key = getClientKey(request);
    if (isRateLimited(key)) {
      return NextResponse.json({ ok: false }, { status: 429 });
    }

    const json = await request.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    const { name, email, message, company } = parsed.data;
    if (company && company.trim().length > 0) {
      // Honeypot triggered
      return NextResponse.json({ ok: true }, { status: 200 });
    }
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY env for contact handler");
      return NextResponse.json({ ok: false }, { status: 500 });
    }
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM || "onboarding@resend.dev";
    const result = await resend.emails.send({
      from,
      to: "ctungyu11@gmail.com",
      subject: `Contact form: ${name}`,
      replyTo: email,
      text: message,
    });
    if (result.error) {
      console.error("Resend error", result.error);
      return NextResponse.json({ ok: false }, { status: 500 });
    }
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("/api/contact error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}


