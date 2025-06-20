
import React from 'react';
import Navigation from '../components/Navigation';
import { Newspaper, Clock, TrendingUp } from 'lucide-react';

const MarketNews = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Market News</h1>
          <p className="text-slate-400">Stay updated with the latest market-moving news</p>
        </div>

        <div className="text-center py-20">
          <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Newspaper className="w-8 h-8 text-orange-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Breaking Market News</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Get instant access to market-moving news and analysis. Register for personalized news feeds.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold">
            Get News Access
          </button>
        </div>
      </main>
    </div>
  );
};

export default MarketNews;
