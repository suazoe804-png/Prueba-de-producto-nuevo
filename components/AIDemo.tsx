
import React, { useState } from 'react';
import { generateCreativeBrief } from '../services/gemini';

const AIDemo: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setIsLoading(true);
    setResult('');
    const res = await generateCreativeBrief(userInput);
    setResult(res);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto glass-panel rounded-[2rem] overflow-hidden border border-white/10 shadow-3xl">
      <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-slate-900/40">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
        </div>
        <div className="flex-1 text-center text-xs font-mono text-slate-500 uppercase tracking-widest">
          Lumina Brief Engine v2.4
        </div>
      </div>

      <div className="p-8 md:p-12">
        <form onSubmit={handleSubmit} className="mb-8">
          <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wider">
            Project Concept
          </label>
          <div className="relative">
            <input 
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="e.g. A futuristic eco-friendly coffee brand for urban commuters"
              className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-lg"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="absolute right-2 top-2 bottom-2 px-6 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Thinking...
                </div>
              ) : 'Generate Brief'}
            </button>
          </div>
        </form>

        <div className="min-h-[200px] rounded-2xl bg-slate-950/50 border border-slate-800 p-8 font-mono text-slate-300 relative overflow-hidden">
          {!result && !isLoading && (
            <div className="absolute inset-0 flex items-center justify-center text-slate-600 text-center px-4">
              Enter a prompt above to see the AI generate a high-level creative direction.
            </div>
          )}
          
          {isLoading && (
            <div className="animate-pulse flex flex-col gap-4">
              <div className="h-4 bg-slate-800 rounded w-3/4"></div>
              <div className="h-4 bg-slate-800 rounded w-1/2"></div>
              <div className="h-4 bg-slate-800 rounded w-2/3"></div>
              <div className="h-4 bg-slate-800 rounded w-1/4"></div>
            </div>
          )}

          {result && (
            <div className="whitespace-pre-wrap leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="mb-4 flex items-center gap-2 text-indigo-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.9L9.03 1.703a2 2 0 011.94 0L17.834 4.9a1 1 0 010 1.79L11 9.885V17.5a1 1 0 11-2 0V9.885L2.166 6.69a1 1 0 010-1.79z" clipRule="evenodd" /></svg>
                <span className="font-bold">Lumina Creative Analysis Output</span>
              </div>
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIDemo;
