import type { Metadata } from "next";
import { Manrope, Instrument_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abode — Building a more trusted future for domestic work",
  description:
    "Abode is building the infrastructure that helps households, domestic workers, and recruitment agencies work with greater trust, safety, and professionalism.",
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
