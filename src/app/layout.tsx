import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import ScrollProgress from "../components/ScrollProgress";
import Preloader from "../components/Preloader";
import Analytics from "../components/Analytics";
import { SITE_URL, EMAILS } from "../siteConfig";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

// The production domain is centralised in src/siteConfig.ts (SITE_URL) so it can
// be switched in one place once confirmed. Social share images are generated
// dynamically via src/app/opengraph-image.tsx and src/app/twitter-image.tsx.

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Limitless Trading Group — Learn First, Execute Second, Scale Forever | London, UK",
    template: "%s | Limitless Trading",
  },
  description:
    "Limitless Trading Group is a London-based systematic forex trading, education, and fund management group founded in 2023. We work with trusted, licensed partners and brokers — education first, disciplined execution, and risk management for serious traders worldwide.",
  keywords: [
    "systematic trading UK",
    "algorithmic forex trading",
    "managed forex fund",
    "automated trading London",
    "forex trading education",
    "funded trading",
    "forex fund management UK",
    "trading community membership",
  ],
  authors: [{ name: "Limitless Trading", url: SITE_URL }],
  creator: "Limitless Trading Ltd",
  publisher: "Limitless Trading Ltd",
  manifest: "/manifest.json",
  icons: {
    icon: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/Favicon2.svg",
    shortcut: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/Favicon2.svg",
    apple: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/Favicon2.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Limitless Trading",
  },
  openGraph: {
    title: "Limitless Trading Group — Learn First, Execute Second, Scale Forever",
    description:
      "Systematic forex trading, education, and fund management. Education first, disciplined execution, and risk management — by application only.",
    type: "website",
    url: SITE_URL,
    siteName: "Limitless Trading",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Limitless Trading Group — Learn First, Execute Second, Scale Forever",
    description:
      "Systematic forex trading, education, and fund management. Education first, disciplined execution, and risk management — by application only.",
    creator: "@limitlesstrading",
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
  alternates: {
    canonical: SITE_URL,
  },
  // Set GOOGLE_SITE_VERIFICATION in the environment to emit the Search Console
  // verification meta tag. Omitted automatically when unset.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

// JSON-LD Organization + WebSite schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Limitless Trading Group",
      alternateName: "LTG",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/logo3.svg",
      },
      description:
        "Limitless Trading Group is a London-based systematic forex trading, education, and fund management group founded in 2023. We work with trusted, licensed partners and brokers to deliver education, disciplined execution, and risk management to serious traders.",
      foundingDate: "2023",
      foundingLocation: {
        "@type": "Place",
        name: "London, United Kingdom",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "England",
        addressCountry: "GB",
      },
      email: EMAILS.general,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: EMAILS.general,
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: EMAILS.invest,
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
      ],
      slogan: "Learn first, execute second, scale forever.",
      areaServed: "Worldwide",
      knowsAbout: [
        "Systematic trading",
        "Algorithmic forex trading",
        "Managed forex funds",
        "Trading education",
        "Risk management",
        "Automated execution",
      ],
      sameAs: [
        "https://www.linkedin.com/company/limitlesstrading",
        "https://twitter.com/limitlesstrading",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Limitless Trading",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-GB",
    },
    {
      "@type": "FinancialService",
      "@id": `${SITE_URL}/#service`,
      name: "Limitless Trading — Systematic Forex Trading Services",
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: [
        "Automated Forex Execution",
        "Managed Capital",
        "Trading Education",
        "VIP Community Membership",
      ],
      areaServed: "Worldwide",
      url: SITE_URL,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://cpvmmxiiwlzkqapnimws.supabase.co" />
        <link rel="dns-prefetch" href="https://cpvmmxiiwlzkqapnimws.supabase.co" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {/* Analytics load only when their env-var IDs are configured */}
        <Analytics />
        <SmoothScroll>
          <Preloader />
          <ScrollProgress />
          <div id="main-content">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
