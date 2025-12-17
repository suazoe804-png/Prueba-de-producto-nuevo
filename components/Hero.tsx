
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-52 md:pb-40 px-6 md:px-12 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/50 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-8">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
          New: Gemini 3 Integration Live
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8 tracking-tighter">
          The Intelligence Layer <br />
          <span className="text-gradient">For Your Creativity.</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Lumina combines generative power with institutional design knowledge to help your team ship high-fidelity visual concepts 10x faster.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
          <button className="group relative px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl hover:bg-indigo-50 transition-all flex items-center gap-2 shadow-2xl hover:scale-105">
            Start Building 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="px-8 py-4 bg-slate-900/80 text-white font-bold rounded-2xl border border-slate-700 hover:bg-slate-800 transition-all backdrop-blur-sm">
            Watch Concept Video
          </button>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] -z-10 scale-95"></div>
          <div className="glass-panel rounded-3xl p-4 md:p-6 shadow-2xl overflow-hidden border border-white/5 group">
            <img 
              src="https://picsum.photos/seed/lumina-hero/1200/600" 
              alt="Platform Interface" 
              className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay UI elements for flair */}
            <div className="absolute top-12 left-12 p-4 glass-panel rounded-xl shadow-xl hidden md:block animate-float">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-rose-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    </div>
                    <div>
                        <div className="text-white text-sm font-bold">Engagement Optimized</div>
                        <div className="text-slate-400 text-xs">+24% conversion lift</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
