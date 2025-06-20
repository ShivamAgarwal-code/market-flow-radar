
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import LoginModal from '../components/LoginModal';
import RedirectionLogic from '../components/RedirectionLogic';
import { Eye, Shield, Activity, Lock, TrendingUp } from 'lucide-react';

const DarkPool = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const mockDarkPoolData = [
    { symbol: 'AAPL', volume: 2450000, price: 182.30, timestamp: '14:32:15', venue: 'Credit Suisse CrossFinder' },
    { symbol: 'TSLA', volume: 1850000, price: 238.90, timestamp: '14:31:42', venue: 'Goldman Sachs Sigma X' },
    { symbol: 'MSFT', volume: 3200000, price: 348.75, timestamp: '14:30:58', venue: 'Morgan Stanley MS Pool' },
    { symbol: 'NVDA', volume: 1650000, price: 435.20, timestamp: '14:29:33', venue: 'UBS ATS' }
  ];

  const totalDarkVolume = mockDarkPoolData.reduce((sum, trade) => sum + trade.volume, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">Dark Pool Tracking</h1>
          <p className="text-slate-400">Monitor institutional trading activity in dark pools</p>
        </div>

        {/* Dark Pool Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Total Dark Volume</h3>
              <Activity className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{(totalDarkVolume / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-green-400 flex items-center mt-2">
              <TrendingUp className="w-4 h-4 mr-1" />
              +15.3% vs yesterday
            </div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Active Venues</h3>
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">12</div>
            <div className="text-sm text-slate-400 mt-2">Major dark pools</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Market Share</h3>
              <Eye className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">38.2%</div>
            <div className="text-sm text-slate-400 mt-2">Of total volume</div>
          </div>
        </div>

        {/* Premium Access Required */}
        <div className="trading-card p-8 text-center mb-8">
          <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Premium Feature</h2>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Dark pool data is our most exclusive feature. Get institutional-grade trading intelligence.
          </p>
          <button 
            onClick={() => setShowLoginModal(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Get Premium Access
          </button>
        </div>

        {/* Recent Dark Pool Activity (Preview) */}
        <div className="trading-card p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white mb-4 sm:mb-0">Recent Dark Pool Activity</h3>
            <div className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
              Premium Preview
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-slate-400 pb-3">Symbol</th>
                  <th className="text-left text-slate-400 pb-3 hidden sm:table-cell">Volume</th>
                  <th className="text-left text-slate-400 pb-3">Price</th>
                  <th className="text-left text-slate-400 pb-3 hidden md:table-cell">Venue</th>
                  <th className="text-left text-slate-400 pb-3 hidden lg:table-cell">Time</th>
                </tr>
              </thead>
              <tbody>
                {mockDarkPoolData.map((trade, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-slate-800 hover:bg-slate-800/50 cursor-pointer" 
                    onClick={() => setShowLoginModal(true)}
                  >
                    <td className="py-4 text-white font-semibold">{trade.symbol}</td>
                    <td className="py-4 text-slate-300 hidden sm:table-cell">{(trade.volume / 1000000).toFixed(1)}M</td>
                    <td className="py-4 text-slate-300">${trade.price}</td>
                    <td className="py-4 text-slate-300 hidden md:table-cell">{trade.venue}</td>
                    <td className="py-4 text-slate-400 hidden lg:table-cell">{trade.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-center">
            <button 
              onClick={() => setShowLoginModal(true)}
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-semibold"
            >
              View All Dark Pool Data
            </button>
          </div>
        </div>
      </main>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
};

export default DarkPool;
