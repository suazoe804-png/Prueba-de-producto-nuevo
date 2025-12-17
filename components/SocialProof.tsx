
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-4">Trusted by industry giants</h2>
        <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-40">
          <div className="text-2xl font-black text-white">TECHFLOW</div>
          <div className="text-2xl font-black text-white">VELOCITY</div>
          <div className="text-2xl font-black text-white">SYNAPSE</div>
          <div className="text-2xl font-black text-white">NEXUS</div>
          <div className="text-2xl font-black text-white">QUANTUM</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            quote: "Lumina has completely changed how we pitch to clients. We can generate moodboards and visual directions in minutes rather than days.",
            author: "Sarah Jenkins",
            role: "Design Lead at TechFlow"
          },
          {
            quote: "The fidelity of the AI suggestions is unmatched. It feels less like a tool and more like an incredibly talented partner.",
            author: "Marcus Aurelius",
            role: "CDO at velocity.io"
          },
          {
            quote: "Production-ready exports alone saved us 15 hours of manual Figma work last week. A must-have for modern teams.",
            author: "Chen Wei",
            role: "Product Designer at Synapse"
          }
        ].map((testimonial, i) => (
          <div key={i} className="p-8 glass-panel rounded-3xl relative">
            <div className="absolute top-0 right-8 -translate-y-1/2 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.3137 7.33066 21 4.017 21H1.017Z"/></svg>
            </div>
            <p className="text-slate-300 italic mb-8">"{testimonial.quote}"</p>
            <div>
              <div className="font-bold text-white">{testimonial.author}</div>
              <div className="text-slate-500 text-sm">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;
