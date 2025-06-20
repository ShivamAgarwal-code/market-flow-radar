
import React from 'react';
import Navigation from '../components/Navigation';
import { BookOpen, Play, Users } from 'lucide-react';

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Trading Education</h1>
          <p className="text-slate-400">Learn from the best traders and market experts</p>
        </div>

        <div className="text-center py-20">
          <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Master Trading</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Access premium educational content, webinars, and expert analysis to improve your trading.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold">
            Start Learning
          </button>
        </div>
      </main>
    </div>
  );
};

export default Education;
