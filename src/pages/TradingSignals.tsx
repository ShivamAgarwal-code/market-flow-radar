
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import LoginModal from '../components/LoginModal';
import RedirectionLogic from '../components/RedirectionLogic';
import { Target, Zap, Bell, TrendingUp, TrendingDown, Activity, Clock } from 'lucide-react';

const TradingSignals = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const mockSignals = [
    { 
      symbol: 'AAPL', 
      signal: 'BUY', 
      confidence: 87, 
      price: 182.30, 
      target: 195.50, 
      timeframe: '1-2 weeks',
      reasoning: 'Strong institutional buying detected'
    },
    { 
      symbol: 'TSLA', 
      signal: 'SELL', 
      confidence: 92, 
      price: 238.90, 
      target: 220.00, 
      timeframe: '3-5 days',
      reasoning: 'Whale dumping pattern identified'
    },
    { 
      symbol: 'NVDA', 
      signal: 'BUY', 
      confidence: 78, 
      price: 435.20, 
      target: 465.00, 
      timeframe: '1-3 weeks',
      reasoning: 'AI sector momentum building'
    }
  ];

  const signalStats = {
    totalSignals: 156,
    accuracy: 84.3,
    activeSignals: 23,
    avgReturn: 12.7
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">Trading Signals</h1>
          <p className="text-slate-400">AI-powered trading signals based on whale activity</p>
        </div>

        {/* Signal Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Total Signals</h3>
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{signalStats.totalSignals}</div>
            <div className="text-sm text-slate-400 mt-2">This month</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Accuracy</h3>
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{signalStats.accuracy}%</div>
            <div className="text-sm text-green-400 flex items-center mt-2">
              <TrendingUp className="w-4 h-4 mr-1" />
              +2.1% vs last month
            </div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Active Signals</h3>
              <Activity className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{signalStats.activeSignals}</div>
            <div className="text-sm text-slate-400 mt-2">Currently active</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Avg Return</h3>
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{signalStats.avgReturn}%</div>
            <div className="text-sm text-slate-400 mt-2">Per signal</div>
          </div>
        </div>

        {/* Latest Signals */}
        <div className="trading-card p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Latest AI Signals</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-400">Updated in real-time</span>
              </div>
            </div>
            <button 
              onClick={() => setShowLoginModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold mt-4 sm:mt-0"
            >
              <Bell className="w-4 h-4 mr-2 inline" />
              Get Instant Alerts
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-slate-400 pb-3">Symbol</th>
                  <th className="text-left text-slate-400 pb-3 hidden sm:table-cell">Signal</th>
                  <th className="text-left text-slate-400 pb-3">Confidence</th>
                  <th className="text-left text-slate-400 pb-3 hidden md:table-cell">Target</th>
                  <th className="text-left text-slate-400 pb-3 hidden lg:table-cell">Timeframe</th>
                </tr>
              </thead>
              <tbody>
                {mockSignals.map((signal, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-slate-800 hover:bg-slate-800/50 cursor-pointer" 
                    onClick={() => setShowLoginModal(true)}
                  >
                    <td className="py-4 text-white font-semibold">{signal.symbol}</td>
                    <td className="py-4 hidden sm:table-cell">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        signal.signal === 'BUY' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {signal.signal}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="w-12 bg-slate-700 rounded-full h-2 mr-2">
                          <div 
                            className="bg-green-400 h-2 rounded-full" 
                            style={{ width: `${signal.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-slate-300 text-sm">{signal.confidence}%</span>
                      </div>
                    </td>
                    <td className="py-4 text-slate-300 hidden md:table-cell">${signal.target}</td>
                    <td className="py-4 text-slate-400 text-sm hidden lg:table-cell">{signal.timeframe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Signal Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center"
          >
            <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Whale Signals</h3>
            <p className="text-slate-400 text-sm">Signals based on institutional whale activity</p>
            <div className="mt-4 text-blue-400 font-semibold">12 Active</div>
          </button>
          
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center"
          >
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Momentum Signals</h3>
            <p className="text-slate-400 text-sm">Catch breakouts and momentum shifts early</p>
            <div className="mt-4 text-yellow-400 font-semibold">8 Active</div>
          </button>
          
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center md:col-span-2 lg:col-span-1"
          >
            <Clock className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Swing Signals</h3>
            <p className="text-slate-400 text-sm">Medium-term swing trading opportunities</p>
            <div className="mt-4 text-green-400 font-semibold">3 Active</div>
          </button>
        </div>
      </main>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
};

export default TradingSignals;
