import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrailingCursor from "@/components/TrailingCursor";
import MacDock from "@/components/MacDock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const SITE_URL = "https://saurav190.vercel.app";
const FULL_NAME = "Saurav Kumar";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Saurav | Full Stack Engineer & Digital Architect",
    template: "%s | Saurav"
  },
  description: "Full Stack Engineer specializing in Next.js, TypeScript, and Scalable Web Architecture. Architecting high-performance digital experiences with modern design.",
  keywords: [
    "Full Stack Engineer", 
    "Saurav Kumar",
    "Next.js Developer", 
    "React Specialist", 
    "Web Architecture", 
    "Aceternity UI", 
    "Framer Motion",
    "TypeScript",
    "Frontend Engineering"
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Saurav - Architecting Scalable Digital Experiences",
    description: "Full Stack Engineer building accessible, pixel-perfect, and performant web applications.",
    siteName: "Saurav's Portfolio",
    images: [
      {
        url: "/images/dashboard.png",
        width: 1200,
        height: 630,
        alt: "Saurav - Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurav - Full Stack Engineer",
    description: "Architecting scalable digital experiences with Next.js and Modern Tech.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": FULL_NAME,
              "url": SITE_URL,
              "image": `${SITE_URL}/images/profile.png`,
              "jobTitle": "Full Stack Engineer",
              "description": "Architecting scalable digital experiences with Next.js.",
              "sameAs": [
                "https://github.com/Sauravsingh1719",
                "https://www.linkedin.com/in/saurav-kumar-262219337",
              ],
              "knowsAbout": ["Next.js", "React", "TypeScript", "Tailwind CSS", "System Design"]
            })
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white selection:bg-blue-500/30 selection:text-white`}
      >
        <TrailingCursor />
        
        <Navbar />

        <main className="relative z-10 flex flex-col min-h-screen">
          {children}
        </main>

        <MacDock />

        <Footer />
      </body>
    </html>
  );
}