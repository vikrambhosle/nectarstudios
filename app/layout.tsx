import type { Metadata } from 'next';
import { Montserrat, Syne } from 'next/font/google';
import './globals.css';

// ─── Fonts ────────────────────────────────────────────────────────────────────
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
});

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://nectarstudios.in'),
  title: {
    default: 'Nectar Studios | Animation, Stop Motion & VFX Production',
    template: '%s | Nectar Studios',
  },
  description:
    'Nectar Studios is a creative video production house specialising in animation, stop motion, and VFX. We craft powerful visual stories for brands, music videos, and films.',
  keywords: [
    'animation studio',
    'VFX production',
    'stop motion',
    'video production',
    'nectar studios',
    'visual effects',
    'motion graphics',
    'music video production',
    'creative studio',
  ],
  authors: [{ name: 'Nectar Studios', url: 'https://nectarstudios.in' }],
  creator: 'Nectar Studios',
  publisher: 'Nectar Studios',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nectarstudios.in',
    siteName: 'Nectar Studios',
    title: 'Nectar Studios | Animation, Stop Motion & VFX Production',
    description:
      'We are a crew of creatives who craft videos using the magic of VFX and animation. We make videos that work.',
    images: [
      {
        url: 'https://img.youtube.com/vi/1rGw4sCnt3A/maxresdefault.jpg',
        width: 1280,
        height: 720,
        alt: 'Nectar Studios 2026 Showreel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nectar Studios | Animation, Stop Motion & VFX',
    description:
      'We are a crew of creatives who craft videos using the magic of VFX and animation.',
    images: ['https://img.youtube.com/vi/1rGw4sCnt3A/maxresdefault.jpg'],
    creator: '@nectar_studios',
  },
};

// ─── Structured Data (JSON-LD) ─────────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nectar Studios',
  url: 'https://nectarstudios.in',
  logo: 'https://nectarstudios.in/nectar-logo.jpg',
  description:
    'Creative video production studio specialising in animation, stop motion, and VFX.',
  sameAs: ['https://www.instagram.com/nectar_studios/'],
  knowsAbout: [
    'Animation',
    'Stop Motion',
    'Visual Effects',
    'VFX',
    'Video Production',
    'Motion Graphics',
  ],
};

// ─── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${syne.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
