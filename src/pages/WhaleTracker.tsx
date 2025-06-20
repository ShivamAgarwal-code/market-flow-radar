
import React from 'react';
import Navigation from '../components/Navigation';
import { Activity, Target, Zap } from 'lucide-react';

const WhaleTracker = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Whale Tracker</h1>
          <p className="text-slate-400">Follow the biggest market movers in real-time</p>
        </div>

        <div className="text-center py-20">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Activity className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Track the Whales</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Monitor large volume trades and institutional movements. Sign up to never miss a whale move.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
            Track Whales
          </button>
        </div>
      </main>
    </div>
  );
};

export default WhaleTracker;
