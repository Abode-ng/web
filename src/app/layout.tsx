import type { Metadata, Viewport } from "next";
import { Manrope, Instrument_Sans } from "next/font/google";

import { siteUrl } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const TITLE = "Abode — Building a more trusted future for domestic work";
const DESCRIPTION =
  "Abode is building the infrastructure that helps households, domestic workers, and recruitment agencies work with greater trust, safety, and professionalism.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: TITLE,
    template: "%s — Abode",
  },
  description: DESCRIPTION,
  applicationName: "Abode",
  keywords: [
    "domestic workers",
    "Nigeria",
    "verified workers",
    "recruitment agencies",
    "household staffing",
    "trust infrastructure",
  ],
  openGraph: {
    type: "website",
    siteName: "Abode",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fbf6ee",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div id="page" className="flex min-h-full flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
