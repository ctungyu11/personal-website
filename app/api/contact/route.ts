import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
  company: z.string().optional(), // honeypot
});

export async function POST(request: Request) {
  try {
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
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Anthony <noreply@anthonychou.dev>",
      to: "ctungyu11@gmail.com",
      subject: `Contact form: ${name}`,
      replyTo: email,
      text: message,
    });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("/api/contact error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}


