
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
      <div className="p-8 md:p-12">
        <form onSubmit={handleSubmit} className="mb-8">
          <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wider">Project Concept</label>
          <div className="relative">
            <input 
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="e.g. A futuristic eco-friendly coffee brand"
              className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            />
            <button type="submit" disabled={isLoading} className="absolute right-2 top-2 bottom-2 px-6 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold rounded-xl transition-all">
              {isLoading ? 'Thinking...' : 'Generate'}
            </button>
          </div>
        </form>
        <div className="min-h-[200px] rounded-2xl bg-slate-950/50 border border-slate-800 p-8 font-mono text-slate-300">
          {result || (isLoading ? 'Generating brief...' : 'Waiting for your creative prompt...')}
        </div>
      </div>
    </div>
  );
};

export default AIDemo;
