import React from 'react';

const INSTAGRAM_URL = 'https://www.instagram.com/nectar_studios/';
const YT_EMBED_URL =
  'https://www.youtube.com/embed/1rGw4sCnt3A' +
  '?autoplay=1&mute=1&loop=1&playlist=1rGw4sCnt3A&rel=0&modestbranding=1&playsinline=1&controls=1';

const heroTexts = [
  'Our own IP. Short films and animated series built from pure creative vision.',
  'Breathtaking visuals and storytelling that make your brand impossible to forget.',
  'VFX collabs with indie filmmakers and musicians pushing creative limits.',
];

const segments = [
  {
    number: '01',
    tag: 'Passion Projects',
    title: 'Original IP',
    subtitle: 'Short Films and Animated Series',
    description:
      'We build worlds we believe in - our own scripts, characters, and creative direction. No brief, no client, just pure vision turned into animated reality.',
  },
  {
    number: '02',
    tag: 'Partnerships',
    title: 'Brand Videos',
    subtitle: 'For Brands That Excite Us',
    description:
      "We work with brands whose stories are worth telling - and we bring the same creative energy we'd give our own projects.",
  },
  {
    number: '03',
    tag: 'VFX and Animation',
    title: 'Creative Collabs',
    subtitle: 'Indie Filmmakers and Musicians',
    description:
      "VFX, animation, and mixed-media for indie directors and musicians who want to push the visual envelope. If your vision is bold, let's talk.",
  },
];

const services = [
  {
    title: 'Animation',
    description: 'From blank canvas to custom worlds. Driven by motion, text, and pure imagination.',
    imageUrl:
      'https://images.unsplash.com/photo-1598153346810-860daa814c4b?auto=format&fit=crop&w=800&q=80',
    iconPath:
      'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z',
  },
  {
    title: 'Stop Motion',
    description: 'Bringing inanimate objects to life, frame by frame. Patient craft meets raw creativity.',
    imageUrl:
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80',
    iconPath:
      'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
  },
  {
    title: 'VFX',
    description:
      "Visual wizardry that blurs the line between real and impossible. We make scenes that can't be filmed.",
    imageUrl:
      'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80',
    iconPath:
      'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
];

const workSteps = [
  {
    step: '01',
    title: 'Brief',
    description: 'You tell us the vision',
  },
  {
    step: '02',
    title: 'Concept',
    description: 'We develop a creative direction that is unexpected, honest, and distinctly ours.',
  },
  {
    step: '03',
    title: 'Production',
    description: 'Frame by frame, render by render. The magic happens here.',
  },
  {
    step: '04',
    title: 'Deliver',
    description: 'Polished, ready-to-launch content that hits different every time.',
  },
];

export default function App() {
  return (
    <div className="antialiased selection:bg-[#c8f542] selection:text-[#0f1014] min-h-screen flex flex-col bg-[#0f1014] text-[#f1faee] overflow-x-hidden">
      <nav className="fixed w-full z-50 glass-nav" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-3 h-18 sm:h-20">
            <div className="shrink-0 flex items-center">
              <img
                className="h-8 sm:h-12 w-auto object-contain"
                src="nectar logo.png"
                alt="Nectar Studios"
                width="120"
                height="48"
                style={{ mixBlendMode: 'screen', background: 'transparent' }}
              />
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our work on Instagram"
              className="shrink-0 bg-white text-[#0f1014] px-4 py-2 text-xs sm:px-5 sm:text-sm md:px-6 md:text-base rounded-full font-bold hover:bg-[#c8f542] transition-colors duration-200 transform hover:scale-105 active:scale-95"
            >
              Our Work
            </a>
          </div>
        </div>
      </nav>

      <main className="grow relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-linear-to-br from-[#4c4390] via-[#1d2031] to-[#5ecaae]">
        <div
          className="bg-blob w-104 h-104 rounded-full top-[-5%] left-[-10%] animate-blob mix-blend-screen pointer-events-none"
          style={{ background: '#6d5df0', opacity: 0.36 }}
        />
        <div
          className="bg-blob w-md h-112 rounded-full bottom-[-8%] right-[-10%] animate-blob animation-delay-2000 mix-blend-screen pointer-events-none"
          style={{ background: '#67dcb8', opacity: 0.34 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.09),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(103,220,184,0.1),transparent_30%)] pointer-events-none" />

        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center lg:min-h-[calc(100vh-9rem)]">
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center animate-fade-in-up">
              <p className="text-[#c8f542] text-xs font-bold tracking-[0.25em] uppercase mb-6">
                Nectar Studios
              </p>
              <div className="alternating-text-container font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                {heroTexts.map((text, idx) => (
                  <h1 key={idx} className="alt-text-anim">
                    {text}
                  </h1>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c8f542] text-[#0f1014] px-8 py-3 rounded-full font-bold text-sm hover:bg-white transition-colors duration-200 transform hover:scale-105 active:scale-95"
                >
                  See Our Work -&gt;
                </a>
                <a
                  href="#what-we-do"
                  className="border border-gray-700 text-gray-300 px-8 py-3 rounded-full font-bold text-sm hover:border-[#c8f542] hover:text-[#c8f542] transition-colors duration-200"
                >
                  What We Do
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 xl:col-span-7 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="video-container">
                <iframe
                  src={YT_EMBED_URL}
                  title="Nectar Studios 2026 Showreel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 font-semibold tracking-wide">
                <span>Play 2026 Showreel</span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#c8f542] transition-colors duration-200"
                  aria-label="More on Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                  More on Instagram
                </a>
              </div>
              <p className="mt-4 text-base text-gray-400 leading-relaxed">
                We are a crew of creatives who craft videos using the magic of VFX and animation.
              </p>
            </div>
          </div>
        </div>
      </main>

      <section className="py-24 bg-[#09090f] border-t border-gray-900 relative z-10" aria-labelledby="segments-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[#c8f542] text-xs font-bold tracking-[0.25em] uppercase mb-4">Who We Create For</p>
            <h2 id="segments-heading" className="font-display text-3xl md:text-4xl font-bold text-white max-w-xl leading-tight">
              Three crafts. All impactful.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800 border border-gray-800">
            {segments.map((seg) => (
              <div key={seg.number} className="p-8 md:p-10 group hover:bg-[#0f1014] transition-colors duration-300">
                <span className="font-display text-5xl font-bold text-[#c8f542] opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                  {seg.number}
                </span>
                <div className="mt-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-600">{seg.tag}</span>
                  <h3 className="font-display text-2xl font-bold text-white mt-2">{seg.title}</h3>
                  <p className="text-[#c8f542] text-sm mt-1 font-medium">{seg.subtitle}</p>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">{seg.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-do" className="py-24 bg-[#c8f542] border-t border-[#b0d93c] relative z-10" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#1a1b21]/50 text-xs font-bold tracking-[0.25em] uppercase mb-4">Our Craft</p>
            <h2 id="services-heading" className="font-display text-3xl md:text-4xl font-bold text-[#0f1014]">
              Translating human feeling into visual art.
            </h2>
            <p className="text-[#1a1b21]/70 text-lg mt-4 font-medium">Animation. Stop Motion. VFX.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 relative overflow-hidden group"
                style={{ backgroundImage: `url("${svc.imageUrl}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-black/75 group-hover:bg-black/60 transition-colors duration-300" />
                <div className="relative z-10 p-8">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#c8f542]/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={svc.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{svc.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{svc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0f1014] border-t border-gray-900 relative z-10" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[#c8f542] text-xs font-bold tracking-[0.25em] uppercase mb-4">The Process</p>
            <h2 id="process-heading" className="font-display text-3xl md:text-4xl font-bold text-white">
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-800 border border-gray-800">
            {workSteps.map((stepItem) => (
              <div key={stepItem.step} className="p-8 group hover:bg-[#09090f] transition-colors duration-300">
                <span className="font-display text-5xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                  {stepItem.step}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-4">{stepItem.title}</h3>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">{stepItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#c8f542] relative z-10 overflow-hidden" aria-label="Contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#1a1b21]/50 text-xs font-bold tracking-[0.25em] uppercase mb-6">Let's Create Together</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-[#0f1014] leading-tight mb-8">
            Have a project<br className="hidden sm:block" /> in mind?
          </h2>
          <p className="text-[#1a1b21]/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Whether it's a short film, a brand video, or a wild VFX collab - if it excites us, we're in.
            Slide into our DMs.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0f1014] text-white px-10 py-4 rounded-full font-bold text-base hover:bg-[#1a1b21] transition-colors duration-200 transform hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
            DM Us on Instagram
          </a>
        </div>
      </section>

      <footer className="bg-black py-12 border-t border-gray-900 relative z-10" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <img
                className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
                src="nectar logo.jpg"
                alt="Nectar Studios"
                width="80"
                height="32"
              />
              <p className="text-gray-700 text-xs">Animation / Stop Motion / VFX</p>
            </div>
            <p className="text-sm text-gray-700 text-center">
              &copy; {new Date().getFullYear()} Nectar Studios. All rights reserved.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#c8f542] transition-colors duration-200"
              aria-label="Nectar Studios on Instagram"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
