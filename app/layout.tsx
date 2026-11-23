import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hemanth Dadi | AI Systems Architect & Industrial Tech Founder",
  description:
    "Architecting deterministic AI for heavy industry, global trade compliance, and enterprise ERPs. Signature Axiom: 'AI reads. People confirm. Rules decide.' Based in Hyderabad, India (17.3850° N, 78.4867° E).",
  keywords: [
    "Hemanth Dadi",
    "AI Systems Architect",
    "Industrial Tech Founder",
    "CImEx Compliance",
    "EU CBAM",
    "Deterministic AI",
    "Predictive Maintenance",
    "Conformal Prediction",
    "Forward Deployed AI",
    "Hyderabad",
  ],
  authors: [{ name: "Hemanth Dadi", url: "https://github.com/HemanthDadi1" }],
  creator: "Hemanth Dadi",
  openGraph: {
    title: "Hemanth Dadi | AI Systems Architect & Industrial Tech Founder",
    description:
      "Deterministic AI for Heavy Industry & Global Trade. Creator of CImEx Compliance (EU CBAM trade compliance engine).",
    url: "https://hemanthdadi.vercel.app",
    siteName: "Hemanth Dadi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemanth Dadi — AI Systems Architect",
    description: "AI reads. People confirm. Rules decide. Zero-hallucination industrial intelligence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#07080A] text-slate-100 antialiased selection:bg-[#00F0FF]/30 selection:text-[#00F0FF]">
        {children}
      </body>
    </html>
  );
}
