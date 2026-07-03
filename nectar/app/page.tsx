import React from 'react';

export default function App() {
  const heroTexts = [
    "Creative Lab that crafts powerful stories and visual effects.",
    "Breathtaking visuals and storytelling that make your brand impossible to forget.",
    "Powering music videos and independent films with visual effects and world-building."
  ];

  return (
    <div className="antialiased selection:bg-[#e63946] selection:text-white min-h-screen flex flex-col bg-[#0f1014] text-[#f1faee] font-sans overflow-x-hidden">
      {/* Global & Custom Styles Injection */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Syne:wght@400;700;800&display=swap');
        
        body {
          background-color: #0f1014;
          font-family: 'Montserrat', sans-serif;
        }
        
        .font-display {
          font-family: 'Syne', sans-serif;
        }

        /* Custom scrollbar for webkit */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0f1014; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #555; }

        .glass-nav {
          background: rgba(15, 16, 20, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }

        /* Video/Showreel container styling */
        .video-container {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .video-container img, .video-container iframe, .video-container video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .alternating-text-container {
          position: relative;
          min-height: 180px; 
        }
        
        .alt-text-anim {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          animation: textCycle 18s infinite ease-in-out;
        }

        .alt-text-anim:nth-child(1) { animation-delay: 0s; }
        .alt-text-anim:nth-child(2) { animation-delay: 6s; }
        .alt-text-anim:nth-child(3) { animation-delay: 12s; }

        @keyframes textCycle {
            0% { opacity: 0; transform: translateY(10px); pointer-events: none; }
            5% { opacity: 1; transform: translateY(0); pointer-events: auto; }
            28% { opacity: 1; transform: translateY(0); pointer-events: auto; }
            33% { opacity: 0; transform: translateY(-10px); pointer-events: none; }
            100% { opacity: 0; transform: translateY(-10px); pointer-events: none; }
        }

        .bg-blob {
          position: absolute;
          filter: blur(80px);
          z-index: 0;
          opacity: 0.4;
        }

        /* Animations */
        @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}} />

      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <img 
                className="h-12 w-auto object-contain" 
                src="nectar logo.jpg" 
                alt="Nectar Studios Logo" 
              />
            </div>
            
            {/* Right side action button */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="https://www.instagram.com/nectar_studios/" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-[#0f1014] px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors transform hover:scale-105 active:scale-95 duration-200"
              >
                Our Reel
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-[#f1faee] hover:text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow relative pt-24 md:pt-32 pb-16 md:pb-32 overflow-hidden">
        
        {/* Ambient Background Effects */}
        <div className="bg-blob bg-blue-900 w-96 h-96 rounded-full top-0 left-[-10%] animate-blob mix-blend-screen pointer-events-none"></div>
        <div className="bg-blob bg-purple-900 w-96 h-96 rounded-full bottom-0 right-[-10%] animate-blob animation-delay-2000 mix-blend-screen pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Alternating Text */}
            <div className="lg:col-span-6 flex flex-col justify-center animate-fade-in-up">
              <div className="alternating-text-container font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                {heroTexts.map((text, idx) => (
                  <h1 
                    key={idx}
                    className="alt-text-anim"
                  >
                    {text}
                  </h1>
                ))}
              </div>
            </div>

            {/* Right Column: Showreel/Video */}
            <div className="lg:col-span-6 animate-fade-in-up mt-12 lg:mt-0" style={{ animationDelay: '0.2s' }}>
              <a href="https://www.instagram.com/nectar_studios/" target="_blank" rel="noreferrer" className="video-container group cursor-pointer block">
                {/* Placeholder for the actual showreel */}
                <img 
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="Nectar Showreel Poster" 
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 border border-white/30">
                    <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </a>
              <div className="mt-4 flex justify-between items-center text-sm text-gray-500 font-semibold tracking-wide">
                <span>▶ 2026 Showreel</span>
                <span>01:45</span>
              </div>

              <p className="mt-6 text-lg text-gray-400">
                We are a crew of thoughtful creatives who’ve been crafting killer videos.
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* Services/Capabilities Text Section */}
      <section className="py-24 bg-[#1a1b21] border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">We Make Videos That Work</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Translating human feeling into visual art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Service Item 1 */}
            <div className="p-8 rounded-2xl bg-[#0f1014] border border-gray-800 hover:border-gray-600 transition-colors duration-300">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Animation</h3>
              <p className="text-gray-400 text-sm">From blank canvas to custom worlds. Driven by motion, text, and pure imagination.</p>
            </div>

            {/* Service Item 2 */}
            <div className="p-8 rounded-2xl bg-[#0f1014] border border-gray-800 hover:border-gray-600 transition-colors duration-300">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Live Action</h3>
              <p className="text-gray-400 text-sm">Let's get to set, roll cameras and make some video magic.</p>
            </div>

            {/* Service Item 3 */}
            <div className="p-8 rounded-2xl bg-[#0f1014] border border-gray-800 hover:border-gray-600 transition-colors duration-300">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Mixed Media</h3>
              <p className="text-gray-400 text-sm">Blend live action and Computer-generated imagery to achieve the impossible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <img 
              className="h-8 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              src="nectar logo.jpg" 
              alt="Nectar Studios Logo" 
            />
          </div>
          <div className="text-sm text-gray-600">
            &copy; 2026 Nectar Studios. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}