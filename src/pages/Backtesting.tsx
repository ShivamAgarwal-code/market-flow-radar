
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import LoginModal from '../components/LoginModal';
import RedirectionLogic from '../components/RedirectionLogic';
import { BarChart3, Clock, Target, TrendingUp, TrendingDown, Play, Settings } from 'lucide-react';

const Backtesting = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const backtestResults = {
    totalReturn: 23.7,
    sharpeRatio: 1.64,
    maxDrawdown: 8.9,
    winRate: 67.3,
    totalTrades: 247,
    avgHoldTime: '4.2 days'
  };

  const strategies = [
    {
      name: "Whale Following Strategy",
      description: "Follow institutional whale movements with 5% position sizing",
      period: "2022-2024",
      return: "+45.2%",
      sharpe: 1.78,
      maxDD: "12.3%",
      status: "completed"
    },
    {
      name: "Options Flow Momentum",
      description: "Trade based on unusual options activity patterns",
      period: "2023-2024",
      return: "+32.1%",
      sharpe: 1.52,
      maxDD: "9.7%",
      status: "running"
    },
    {
      name: "Dark Pool Detection",
      description: "Identify and trade dark pool accumulation patterns",
      period: "2023-2024",
      return: "+28.8%",
      sharpe: 1.43,
      maxDD: "11.2%",
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">Strategy Backtesting</h1>
          <p className="text-slate-400">Test and validate your trading strategies with historical data</p>
        </div>

        {/* Backtest Performance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Total Return</h3>
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-green-400">+{backtestResults.totalReturn}%</div>
            <div className="text-sm text-slate-400 mt-2">2-year backtest</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Sharpe Ratio</h3>
              <BarChart3 className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{backtestResults.sharpeRatio}</div>
            <div className="text-sm text-blue-400 mt-2">Risk-adjusted</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Max Drawdown</h3>
              <TrendingDown className="w-6 h-6 text-red-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{backtestResults.maxDrawdown}%</div>
            <div className="text-sm text-red-400 mt-2">Worst period</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Win Rate</h3>
              <Target className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{backtestResults.winRate}%</div>
            <div className="text-sm text-slate-400 mt-2">Profitable trades</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Total Trades</h3>
              <BarChart3 className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{backtestResults.totalTrades}</div>
            <div className="text-sm text-slate-400 mt-2">Executed</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Avg Hold Time</h3>
              <Clock className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{backtestResults.avgHoldTime}</div>
            <div className="text-sm text-slate-400 mt-2">Per position</div>
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="trading-card p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white mb-4 sm:mb-0">Strategy Performance</h3>
            <div className="flex space-x-3">
              <button 
                onClick={() => setShowLoginModal(true)}
                className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-semibold"
              >
                <Settings className="w-4 h-4 mr-2 inline" />
                Parameters
              </button>
              <button 
                onClick={() => setShowLoginModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
              >
                <Play className="w-4 h-4 mr-2 inline" />
                Run Backtest
              </button>
            </div>
          </div>
          <div className="h-64 bg-slate-800/50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">Interactive performance charts available with premium access</p>
            </div>
          </div>
        </div>

        {/* Strategy Library */}
        <div className="trading-card p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white mb-4 sm:mb-0">Strategy Library</h3>
            <button 
              onClick={() => setShowLoginModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
            >
              <Play className="w-4 h-4 mr-2 inline" />
              Create New Strategy
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {strategies.map((strategy, index) => (
              <div 
                key={index} 
                className="p-6 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 cursor-pointer transition-colors"
                onClick={() => setShowLoginModal(true)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-white font-semibold text-lg">{strategy.name}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        strategy.status === 'completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {strategy.status}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">{strategy.description}</p>
                    <p className="text-slate-400 text-xs">{strategy.period}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-green-400 font-semibold">{strategy.return}</div>
                    <div className="text-slate-400 text-xs">Return</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-semibold">{strategy.sharpe}</div>
                    <div className="text-slate-400 text-xs">Sharpe</div>
                  </div>
                  <div>
                    <div className="text-red-400 font-semibold">{strategy.maxDD}</div>
                    <div className="text-slate-400 text-xs">Max DD</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backtest Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center"
          >
            <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Monte Carlo</h3>
            <p className="text-slate-400 text-sm">Run thousands of simulations to test robustness</p>
          </button>
          
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center"
          >
            <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Walk Forward</h3>
            <p className="text-slate-400 text-sm">Test strategy performance across different periods</p>
          </button>
          
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center"
          >
            <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Paper Trading</h3>
            <p className="text-slate-400 text-sm">Test strategies in real-time without risk</p>
          </button>
        </div>
      </main>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
};

export default Backtesting;
