import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import AnimatedNavbar from "@/components/Navbar";
import WelcomeScreen from "@/components/WelcomeScreen"; // Add this import
import TrailingCursor from "@/components/TrailingCursor";

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

const SITE_URL = "https://saurav190.vercel.app/";
const TWITTER_HANDLE = "@yourhandle";

export const metadata: Metadata = {
  title: {
    default: "Saurav - Full Stack Developer & Creative Problem Solver",
    template: "%s | Saurav's Portfolio"
  },
  description: "Full Stack Developer specializing in Next.js, React, and modern web technologies. Transforming complex ideas into seamless digital experiences.",
  keywords: ["Full Stack Developer", "Next.js", "React", "Web Development", "Portfolio", "JavaScript", "TypeScript"],
  authors: [{ name: "Saurav" }],
  creator: "Saurav",
  publisher: "Saurav",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Saurav - Full Stack Developer & Creative Problem Solver",
    description: "Full Stack Developer specializing in Next.js, React, and modern web technologies.",
    siteName: "Saurav's Portfolio",
    images: [
      {
        url: "/images/dashboard.png",
        width: 1200,
        height: 630,
        alt: "Saurav - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: "Saurav - Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React, and modern web technologies.",
    images: ["/twitter-image.jpg"],
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
  verification: {},
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Saurav",
              "url": SITE_URL,
              "image": `${SITE_URL}/profile-image.jpg`,
              "sameAs": [
                "https://github.com/Sauravsingh1719",
                "www.linkedin.com/in/saurav-kumar-262219337",
                "https://twitter.com/yourusername"
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Your Company or Freelance"
              }
            })
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WelcomeScreen /> {/* Add WelcomeScreen here */}
        <TrailingCursor />
        <AnimatedNavbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}