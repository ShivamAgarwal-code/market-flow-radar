
import React from 'react';
import Navigation from '../components/Navigation';
import { Code, Zap, Database } from 'lucide-react';

const API = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">API Access</h1>
          <p className="text-slate-400">Integrate Whale Signal data into your applications</p>
        </div>

        <div className="text-center py-20">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Code className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Developer API</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Access our powerful API for institutional-grade market data and whale tracking.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold">
            Get API Access
          </button>
        </div>
      </main>
    </div>
  );
};

export default API;
