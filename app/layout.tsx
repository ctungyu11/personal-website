import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { baseMetadata, personJsonLd } from "@/lib/seo";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbm" });

export const metadata: Metadata = baseMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} antialiased min-h-dvh flex flex-col bg-white text-slate-900`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:text-blue-700 focus:ring-2 focus:ring-blue-600 focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
          <div className="container mx-auto px-4">
            <Nav />
          </div>
        </header>
        <main id="main" className="flex-1 container mx-auto px-4">
          {children}
        </main>
        <footer className="border-t border-slate-200">
          <div className="container mx-auto px-4">
            <Footer />
          </div>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
