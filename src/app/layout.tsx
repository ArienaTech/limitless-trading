import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

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

const SITE_URL = "https://limitlesstrading.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Limitless — Systematic Forex Trading | London, UK | FCA Regulated",
    template: "%s | Limitless Trading",
  },
  description:
    "Limitless is a London-based systematic trading firm founded in 2014. FCA regulated. We provide automated forex execution, institutional education, and managed capital services to serious investors worldwide.",
  keywords: [
    "systematic trading UK",
    "algorithmic forex trading",
    "managed forex fund",
    "automated trading London",
    "FCA regulated trading",
    "systematic trading education",
    "forex fund management UK",
    "institutional trading membership",
  ],
  authors: [{ name: "Limitless Trading", url: SITE_URL }],
  creator: "Limitless Trading Ltd",
  publisher: "Limitless Trading Ltd",
  manifest: "/manifest.json",
  icons: {
    icon: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/Logo-white.svg",
    shortcut: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/Logo-white.svg",
    apple: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/Logo-white.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Limitless Trading",
  },
  openGraph: {
    title: "Limitless — Systematic Forex Trading | London, UK",
    description:
      "FCA regulated. Founded 2014. Automated forex execution, institutional education, and managed capital — by application only.",
    type: "website",
    url: SITE_URL,
    siteName: "Limitless Trading",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Limitless Trading — Systematic Forex Trading, London UK",
      },
    ],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Limitless — Systematic Forex Trading | London, UK",
    description:
      "FCA regulated. Founded 2014. Automated forex execution, institutional education, and managed capital — by application only.",
    images: [OG_IMAGE],
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
};

export const viewport: Viewport = {
  themeColor: "#000000",
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
      name: "Limitless Trading",
      alternateName: "LTG Trading",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/Logo-white.svg",
      },
      description:
        "Limitless is a London-based systematic trading firm founded in 2014. We provide automated forex execution, institutional-grade education, and managed capital services to serious investors. FCA authorised and regulated.",
      foundingDate: "2014",
      foundingLocation: {
        "@type": "Place",
        name: "London, United Kingdom",
      },
      areaServed: "Worldwide",
      knowsAbout: [
        "Systematic trading",
        "Algorithmic forex trading",
        "Managed forex funds",
        "Trading education",
        "Risk management",
        "Automated execution",
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Financial Services Regulation",
        recognizedBy: {
          "@type": "Organization",
          name: "Financial Conduct Authority",
          url: "https://www.fca.org.uk",
        },
      },
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
      <body>{children}</body>
    </html>
  );
}
