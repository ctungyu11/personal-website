"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const nameError = !name && error ? "Name is required" : undefined;
  const emailError = !email && error ? "Email is required" : undefined;
  const messageError = !message && error ? "Message is required" : undefined;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });
      const ok = res.ok;
      setSuccess(ok);
      track("contact_submit", { success: ok });
      if (!ok) setError("Something went wrong. Please try again.");
      if (ok) {
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      setError("Network error. Try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-4" aria-describedby={error ? "form-error" : undefined} noValidate>
      <div>
        <label className="block text-sm font-medium" htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={Boolean(nameError)}
          aria-describedby={nameError ? "name-error" : undefined}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
          required
        />
        {nameError && <p id="name-error" className="mt-1 text-sm text-red-700">{nameError}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(emailError)}
          aria-describedby={emailError ? "email-error" : undefined}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
          required
        />
        {emailError && <p id="email-error" className="mt-1 text-sm text-red-700">{emailError}</p>}
      </div>
      <div className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          aria-invalid={Boolean(messageError)}
          aria-describedby={messageError ? "message-error" : undefined}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
          required
        />
        {messageError && <p id="message-error" className="mt-1 text-sm text-red-700">{messageError}</p>}
      </div>
      {error && (
        <div id="form-error" role="alert" className="text-sm text-red-700">
          {error}
        </div>
      )}
      {success && (
        <div className="text-sm text-green-700">Thanks! Your message was sent.</div>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 disabled:opacity-50"
      >
        {submitting ? "Sending…" : "Send"}
      </button>
    </form>
  );
}


