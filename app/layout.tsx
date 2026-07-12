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
    default: 'Nectar Studios | Ad Films, Corporate Videos & Music Video Production in Mumbai',
    template: '%s | Nectar Studios',
  },
  description:
    'Nectar Studios - Ad film production house, web series producer, and corporate video makers in Mumbai and Pune. OTT content production, music video directors, affordable promo videos, product shoots, animation, VFX, and professional video production services. Line production for OTT and short films.',
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
    'music video directors in Mumbai',
    'low budget music video production Mumbai',
    'rap song video shoot Pune',
    'freelance videographer for reels Pune',
    'best studio for youtube video shoot Mumbai',
    'music video production house',
    'how to shoot a music video on a budget in Mumbai',
    'music video director',
    'youtube video production',
    'reels production',
    'music video shoot',
    'video production house Mumbai',
    'freelance videographer Mumbai',
    'video shoot studio',
    'indie music videos',
    'ad film production house in Mumbai',
    'corporate video makers Pune',
    'affordable promo video makers Mumbai',
    'product video shoot Pune',
    'social media ad film agency Mumbai',
    'how much does an ad film cost in India',
    'corporate video production house Baner',
    'corporate video production house Andheri',
    'ad film maker',
    'promotional video production',
    'product video production',
    'corporate video production',
    'social media video advertising',
    'ad film agency',
    'video production services Mumbai',
    'video production services Pune',
    'web series production house Mumbai',
    'turnkey web series production Pune',
    'regional OTT content producers Maharashtra',
    'low budget web series makers Mumbai',
    'line production services for OTT Mumbai',
    'short film production for OTT',
    'OTT content production',
    'web series maker',
    'OTT producer',
    'digital content production',
    'streaming content production',
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
    title: 'Nectar Studios | Web Series, Ad Films, Corporate Videos & Music Production Mumbai',
    description:
      'Web series production house and OTT content producers in Mumbai and Pune. Ad films, corporate videos, music videos, short films for streaming platforms. Affordable production, animation, VFX, and line production services.'
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
