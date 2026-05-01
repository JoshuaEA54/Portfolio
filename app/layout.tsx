import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { Header, Footer, ThemeSwitch } from "@/components";
import { EXTRA_LINKS, OWNER_NAME } from "@/constants";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#CCD6E0",
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://joshuaelizondo.vercel.app";

export const metadata: Metadata = {
  title: `${OWNER_NAME} | Full-Stack Developer Portfolio`,
  description: `${OWNER_NAME} is a full-stack developer specializing in React, Next.js, TypeScript and modern web technologies. View my projects, skills, and experience.`,
  authors: [
    {
      name: OWNER_NAME,
      url: EXTRA_LINKS.github,
    },
  ],
  keywords: [
    OWNER_NAME,
    "Joshua Elizondo",
    "Joshua Elizondo Abarca",
    "Joshua Elizondo portfolio",
    "Joshua Elizondo developer",
    "full-stack developer",
    "frontend developer",
    "backend developer",
    "web developer",
    "reactjs",
    "nextjs",
    "typescript",
    "javascript",
    "tailwindcss",
    "portfolio",
    "node.js",
    "python",
    "html",
    "css",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${OWNER_NAME} | Full-Stack Developer Portfolio`,
    description: `${OWNER_NAME} is a full-stack developer specializing in React, Next.js, and TypeScript. View my projects, skills, and experience.`,
    siteName: `${OWNER_NAME} Portfolio`,
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: `${OWNER_NAME} - Full-Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${OWNER_NAME} | Full-Stack Developer Portfolio`,
    description: `${OWNER_NAME} is a full-stack developer specializing in React, Next.js, and TypeScript.`,
    images: ["/profile.png"],
  },
  manifest: "/manifest.json",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_KEY,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: OWNER_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/profile.png`,
    jobTitle: "Full-Stack Developer",
    sameAs: [
      EXTRA_LINKS.linkedin,
      EXTRA_LINKS.github,
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "Full-Stack Development",
    ],
  };

  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className="bg-[#fbe2e3] dark:bg-[#946263] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
        <div className="bg-[#dbd7fb] dark:bg-[#676394] absolute top-[-1rem] -z-10 left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <aside>
              <Toaster
                position="top-right"
                toastOptions={{
                  className: "dark:bg-white/10 dark:text-white/80",
                }}
              />
            </aside>
            <aside>
              <ThemeSwitch />
            </aside>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
