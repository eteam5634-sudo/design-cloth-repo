import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import { Footer } from "@/components/Footer";
import { MainShell } from "@/components/MainShell";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ÉLANE — Timeless Luxury Fashion",
    template: "%s — ÉLANE",
  },
  description:
    "Discover ÉLANE, a modern luxury fashion label offering timeless clothing and accessories designed for effortless elegance.",
};

export const viewport: Viewport = {
  themeColor: "#f7f4ef",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${jost.variable}`}>
      <body className="flex min-h-screen flex-col bg-ivory font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-ivory focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <noscript>
          <style>{`.reveal-item{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Providers>
          <Navbar />
          <MainShell>{children}</MainShell>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
