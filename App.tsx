
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AIDemo from './components/AIDemo';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        <section id="features" className="py-24 px-6 md:px-12 bg-slate-950">
          <Features />
        </section>

        <section id="demo" className="py-24 px-6 md:px-12 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">See Lumina in Action</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Lumina understands complex creative directions. Test our engine below by generating a high-level creative brief for your next project.
              </p>
            </div>
            <AIDemo />
          </div>
        </section>

        <section id="pricing" className="py-24 px-6 md:px-12">
          <SocialProof />
        </section>

        <section id="cta" className="py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-indigo-600 p-12 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Ready to redefine your creative workflow?
            </h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Join 10,000+ designers and developers who are already building the future with Lumina. 14-day free trial, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto">
                Get Started for Free
              </button>
              <button className="px-8 py-4 bg-indigo-700 text-white font-bold rounded-xl hover:bg-indigo-800 transition-all border border-indigo-400/30 w-full sm:w-auto">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
