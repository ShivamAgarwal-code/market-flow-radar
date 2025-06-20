
import React from 'react';
import Navigation from '../components/Navigation';
import { Eye, Shield, Activity } from 'lucide-react';

const DarkPool = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Dark Pool Tracking</h1>
          <p className="text-slate-400">Monitor institutional trading activity in dark pools</p>
        </div>

        <div className="text-center py-20">
          <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Exclusive Access Required</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Dark pool data is our most premium feature. Register to access institutional-grade trading intelligence.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold">
            Get Premium Access
          </button>
        </div>
      </main>
    </div>
  );
};

export default DarkPool;
