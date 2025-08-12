"use client";

import { track } from "@vercel/analytics";

export default function ResumeDownload() {
  return (
    <a
      href="/resume.pdf"
      download
      onClick={() => track("resume_download")}
      className="inline-flex items-center justify-center rounded-lg border border-blue-600 text-blue-600 px-4 py-2 hover:bg-blue-50"
    >
      Download Resume
    </a>
  );
}


