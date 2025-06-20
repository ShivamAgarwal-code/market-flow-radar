
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import LoginModal from '../components/LoginModal';
import RedirectionLogic from '../components/RedirectionLogic';
import { Newspaper, Clock, TrendingUp, TrendingDown, Eye, Filter } from 'lucide-react';

const MarketNews = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const mockNews = [
    {
      title: "Federal Reserve Hints at Rate Cut in Next Meeting",
      summary: "Fed officials suggest monetary policy adjustments amid economic indicators...",
      impact: "HIGH",
      category: "Economic",
      timestamp: "2 mins ago",
      sentiment: "positive"
    },
    {
      title: "NVIDIA Reports Record Q4 Earnings, Beats Estimates",
      summary: "AI chip demand drives revenue growth beyond Wall Street expectations...",
      impact: "HIGH",
      category: "Earnings",
      timestamp: "15 mins ago",
      sentiment: "positive"
    },
    {
      title: "Major Bank Downgrades Tesla Stock Rating",
      summary: "Citing production concerns and increasing competition in EV market...",
      impact: "MEDIUM",
      category: "Analyst",
      timestamp: "32 mins ago",
      sentiment: "negative"
    },
    {
      title: "Oil Prices Surge Following Supply Chain Disruption",
      summary: "Geopolitical tensions affect global energy markets...",
      impact: "MEDIUM",
      category: "Commodities",
      timestamp: "1 hour ago",
      sentiment: "negative"
    }
  ];

  const newsStats = {
    todayNews: 247,
    highImpact: 23,
    marketMoving: 8,
    accuracy: 94.2
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">Market News</h1>
          <p className="text-slate-400">Stay ahead with market-moving news and analysis</p>
        </div>

        {/* News Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Today's News</h3>
              <Newspaper className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{newsStats.todayNews}</div>
            <div className="text-sm text-slate-400 mt-2">Articles tracked</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">High Impact</h3>
              <TrendingUp className="w-6 h-6 text-red-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{newsStats.highImpact}</div>
            <div className="text-sm text-red-400 flex items-center mt-2">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12% vs yesterday
            </div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Market Moving</h3>
              <Eye className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{newsStats.marketMoving}</div>
            <div className="text-sm text-slate-400 mt-2">Active alerts</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Accuracy</h3>
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{newsStats.accuracy}%</div>
            <div className="text-sm text-slate-400 mt-2">Prediction rate</div>
          </div>
        </div>

        {/* News Feed */}
        <div className="trading-card p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Breaking News</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-400">Live updates</span>
              </div>
            </div>
            <div className="flex space-x-3 mt-4 sm:mt-0">
              <button 
                onClick={() => setShowLoginModal(true)}
                className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-semibold"
              >
                <Filter className="w-4 h-4 mr-2 inline" />
                Filter
              </button>
              <button 
                onClick={() => setShowLoginModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
              >
                <Eye className="w-4 h-4 mr-2 inline" />
                Watch All
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {mockNews.map((article, index) => (
              <div 
                key={index} 
                className="p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 cursor-pointer transition-colors"
                onClick={() => setShowLoginModal(true)}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        article.impact === 'HIGH' 
                          ? 'bg-red-500/20 text-red-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {article.impact} IMPACT
                      </span>
                      <span className="text-slate-400 text-xs">{article.category}</span>
                      <span className="text-slate-500 text-xs">{article.timestamp}</span>
                    </div>
                    <h4 className="text-white font-semibold text-lg mb-2">{article.title}</h4>
                    <p className="text-slate-300 text-sm">{article.summary}</p>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-4">
                    {article.sentiment === 'positive' ? 
                      <TrendingUp className="w-6 h-6 text-green-400" /> : 
                      <TrendingDown className="w-6 h-6 text-red-400" />
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <button 
              onClick={() => setShowLoginModal(true)}
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Load More News
            </button>
          </div>
        </div>

        {/* News Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center"
          >
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Earnings News</h3>
            <p className="text-slate-400 text-sm">Company earnings reports and analysis</p>
            <div className="mt-4 text-green-400 font-semibold">34 Today</div>
          </button>
          
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center"
          >
            <Newspaper className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Economic Data</h3>
            <p className="text-slate-400 text-sm">GDP, inflation, employment reports</p>
            <div className="mt-4 text-blue-400 font-semibold">12 Today</div>
          </button>
          
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center md:col-span-2 lg:col-span-1"
          >
            <Eye className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Analyst Reports</h3>
            <p className="text-slate-400 text-sm">Upgrades, downgrades, and price targets</p>
            <div className="mt-4 text-purple-400 font-semibold">18 Today</div>
          </button>
        </div>
      </main>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
};

export default MarketNews;
