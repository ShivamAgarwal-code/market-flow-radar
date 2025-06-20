
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import LoginModal from '../components/LoginModal';
import RedirectionLogic from '../components/RedirectionLogic';
import { Activity, Target, Zap, TrendingUp, TrendingDown, Eye } from 'lucide-react';

const WhaleTracker = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const mockWhaleActivity = [
    { 
      symbol: 'AAPL', 
      action: 'BUY', 
      volume: 500000, 
      price: 182.30, 
      value: 91150000, 
      timestamp: '2 mins ago',
      confidence: 95 
    },
    { 
      symbol: 'TSLA', 
      action: 'SELL', 
      volume: 350000, 
      price: 238.90, 
      value: 83615000, 
      timestamp: '5 mins ago',
      confidence: 87 
    },
    { 
      symbol: 'NVDA', 
      action: 'BUY', 
      volume: 200000, 
      price: 435.20, 
      value: 87040000, 
      timestamp: '8 mins ago',
      confidence: 92 
    },
    { 
      symbol: 'MSFT', 
      action: 'BUY', 
      volume: 280000, 
      price: 348.75, 
      value: 97650000, 
      timestamp: '12 mins ago',
      confidence: 89 
    }
  ];

  const totalWhaleVolume = mockWhaleActivity.reduce((sum, activity) => sum + activity.value, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">Whale Tracker</h1>
          <p className="text-slate-400">Follow the biggest market movers in real-time</p>
        </div>

        {/* Whale Activity Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Total Whale Volume</h3>
              <Activity className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">${(totalWhaleVolume / 1000000).toFixed(0)}M</div>
            <div className="text-sm text-green-400 flex items-center mt-2">
              <TrendingUp className="w-4 h-4 mr-1" />
              +23.7% vs yesterday
            </div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Active Whales</h3>
              <Target className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">47</div>
            <div className="text-sm text-slate-400 mt-2">Tracked entities</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Avg Confidence</h3>
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">91%</div>
            <div className="text-sm text-slate-400 mt-2">Signal accuracy</div>
          </div>
        </div>

        {/* Live Whale Activity */}
        <div className="trading-card p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Live Whale Activity</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-400">Real-time updates</span>
              </div>
            </div>
            <button 
              onClick={() => setShowLoginModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold mt-4 sm:mt-0"
            >
              <Eye className="w-4 h-4 mr-2 inline" />
              Track All Whales
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-slate-400 pb-3">Symbol</th>
                  <th className="text-left text-slate-400 pb-3 hidden sm:table-cell">Action</th>
                  <th className="text-left text-slate-400 pb-3">Volume</th>
                  <th className="text-left text-slate-400 pb-3 hidden md:table-cell">Value</th>
                  <th className="text-left text-slate-400 pb-3 hidden lg:table-cell">Confidence</th>
                  <th className="text-left text-slate-400 pb-3">Time</th>
                </tr>
              </thead>
              <tbody>
                {mockWhaleActivity.map((activity, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-slate-800 hover:bg-slate-800/50 cursor-pointer" 
                    onClick={() => setShowLoginModal(true)}
                  >
                    <td className="py-4 text-white font-semibold">{activity.symbol}</td>
                    <td className="py-4 hidden sm:table-cell">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        activity.action === 'BUY' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {activity.action}
                      </span>
                    </td>
                    <td className="py-4 text-slate-300">{(activity.volume / 1000).toFixed(0)}K</td>
                    <td className="py-4 text-slate-300 hidden md:table-cell">${(activity.value / 1000000).toFixed(1)}M</td>
                    <td className="py-4 hidden lg:table-cell">
                      <div className="flex items-center">
                        <div className="w-12 bg-slate-700 rounded-full h-2 mr-2">
                          <div 
                            className="bg-green-400 h-2 rounded-full" 
                            style={{ width: `${activity.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-slate-300 text-sm">{activity.confidence}%</span>
                      </div>
                    </td>
                    <td className="py-4 text-slate-400 text-sm">{activity.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Whale Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="trading-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Top Whale Targets</h3>
            <div className="space-y-4">
              {['AAPL', 'NVDA', 'TSLA', 'MSFT'].map((symbol, index) => (
                <div key={symbol} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-400 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-white font-semibold">{symbol}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-semibold">+{(Math.random() * 5 + 1).toFixed(1)}%</div>
                    <div className="text-slate-400 text-sm">Whale activity</div>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setShowLoginModal(true)}
              className="w-full mt-4 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg font-semibold"
            >
              View All Targets
            </button>
          </div>

          <div className="trading-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Whale Alert Settings</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">Minimum Volume</span>
                  <span className="text-blue-400">$50M+</span>
                </div>
                <div className="text-sm text-slate-400">Get alerts for trades above this threshold</div>
              </div>
              
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">Confidence Level</span>
                  <span className="text-green-400">85%+</span>
                </div>
                <div className="text-sm text-slate-400">Only high-confidence whale signals</div>
              </div>
              
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">Real-time Alerts</span>
                  <span className="text-yellow-400">Enabled</span>
                </div>
                <div className="text-sm text-slate-400">Instant notifications for whale activity</div>
              </div>
            </div>
            <button 
              onClick={() => setShowLoginModal(true)}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
            >
              Customize Alerts
            </button>
          </div>
        </div>
      </main>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
};

export default WhaleTracker;
