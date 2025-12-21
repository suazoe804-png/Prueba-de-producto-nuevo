
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-52 md:pb-40 px-6 md:px-12 overflow-hidden">
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
          <button className="px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl hover:bg-indigo-50 transition-all flex items-center gap-2 shadow-2xl hover:scale-105">
            Start Building
          </button>
          <button className="px-8 py-4 bg-slate-900/80 text-white font-bold rounded-2xl border border-slate-700 hover:bg-slate-800 transition-all backdrop-blur-sm">
            Watch Concept Video
          </button>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="glass-panel rounded-3xl p-4 md:p-6 shadow-2xl border border-white/5">
            <img src="https://picsum.photos/seed/lumina-hero/1200/600" alt="Platform" className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
