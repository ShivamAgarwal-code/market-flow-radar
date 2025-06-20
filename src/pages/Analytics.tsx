
import React from 'react';
import Navigation from '../components/Navigation';
import { BarChart3, LineChart, PieChart } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Advanced Analytics</h1>
          <p className="text-slate-400">Deep dive into market trends and trading patterns</p>
        </div>

        <div className="text-center py-20">
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Professional Analytics</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Access sophisticated analytics tools and market insights. Registration required for full access.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold">
            Start Analyzing
          </button>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
