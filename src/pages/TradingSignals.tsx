
import React from 'react';
import Navigation from '../components/Navigation';
import { Target, Zap, Bell } from 'lucide-react';

const TradingSignals = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Trading Signals</h1>
          <p className="text-slate-400">AI-powered trading signals and recommendations</p>
        </div>

        <div className="text-center py-20">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-yellow-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Smart Trading Signals</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Receive AI-generated trading signals based on whale activity and market patterns.
          </p>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold">
            Get Signals
          </button>
        </div>
      </main>
    </div>
  );
};

export default TradingSignals;
