
import React from 'react';
import Navigation from '../components/Navigation';
import { PieChart, BarChart3, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Portfolio Management</h1>
          <p className="text-slate-400">Track and analyze your trading performance</p>
        </div>

        <div className="text-center py-20">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <PieChart className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Premium Feature</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Portfolio management is available to registered users. Sign up to track your investments and performance.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
            Register Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
