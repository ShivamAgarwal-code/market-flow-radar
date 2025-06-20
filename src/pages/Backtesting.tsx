
import React from 'react';
import Navigation from '../components/Navigation';
import { BarChart3, Clock, Target } from 'lucide-react';

const Backtesting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Strategy Backtesting</h1>
          <p className="text-slate-400">Test your trading strategies against historical data</p>
        </div>

        <div className="text-center py-20">
          <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Backtest Strategies</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Validate your trading strategies with comprehensive backtesting tools and historical data.
          </p>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold">
            Start Backtesting
          </button>
        </div>
      </main>
    </div>
  );
};

export default Backtesting;
