import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticleBackground from "./components/ui/ParticleBackground";
import Preloader from "./components/ui/Preloader";
import InteractiveTerminal from "./components/ui/InteractiveTerminal";
import CustomCursor from "./components/ui/CustomCursor";
import GsapAnimationProvider from "./components/providers/GsapAnimationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shazzed | Full-Stack Developer • MERN & Next.js Specialist",
  description:
    "MD. SHAZZED HOSSEN SHUVO - Building Scalable Web Apps with Clean Code and High-Impact UI. Specializing in React, Next.js, Node.js, Express, and MongoDB.",
  keywords: [
    "Shazzed Shuvo",
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "softvence.agency"
  ],
  authors: [{ name: "MD. SHAZZED HOSSEN SHUVO", url: "https://shazzedshuvo.vercel.app" }],
  openGraph: {
    title: "MD. SHAZZED HOSSEN SHUVO | Full-Stack Developer",
    description:
      "Full-Stack MERN & Next.js Developer specializing in building scalable web applications, responsive user interfaces, and robust APIs.",
    url: "https://shazzedshuvo.vercel.app",
    siteName: "Shazzed Shuvo Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#edf0f5] text-slate-900 dark:bg-[#080808] dark:text-white selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black"
      >
        <GsapAnimationProvider>
          <CustomCursor />
          <Preloader />
          <ParticleBackground />
          {children}
          <InteractiveTerminal />
        </GsapAnimationProvider>
      </body>
    </html>
  );
}
