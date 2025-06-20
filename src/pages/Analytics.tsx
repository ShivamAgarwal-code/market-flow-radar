
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import LoginModal from '../components/LoginModal';
import RedirectionLogic from '../components/RedirectionLogic';
import { BarChart3, LineChart, PieChart, TrendingUp, TrendingDown, Activity, Lock } from 'lucide-react';

const Analytics = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const mockAnalyticsData = {
    performanceMetrics: [
      { metric: 'Win Rate', value: '68.4%', change: '+2.1%', trend: 'up' },
      { metric: 'Average Return', value: '12.7%', change: '+0.8%', trend: 'up' },
      { metric: 'Sharpe Ratio', value: '1.85', change: '-0.05', trend: 'down' },
      { metric: 'Max Drawdown', value: '8.3%', change: '+1.2%', trend: 'down' }
    ],
    topPerformers: [
      { symbol: 'NVDA', return: '+24.3%', volume: '2.1M' },
      { symbol: 'AAPL', return: '+18.9%', volume: '3.8M' },
      { symbol: 'TSLA', return: '+15.2%', volume: '1.9M' },
      { symbol: 'MSFT', return: '+12.8%', volume: '2.7M' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">Advanced Analytics</h1>
          <p className="text-slate-400">Deep dive into market trends and trading patterns</p>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mockAnalyticsData.performanceMetrics.map((metric, index) => (
            <div key={index} className="trading-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{metric.metric}</h3>
                {metric.trend === 'up' ? 
                  <TrendingUp className="w-6 h-6 text-green-400" /> : 
                  <TrendingDown className="w-6 h-6 text-red-400" />
                }
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">{metric.value}</div>
              <div className={`text-sm ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'} flex items-center mt-2`}>
                {metric.trend === 'up' ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                {metric.change}
              </div>
            </div>
          ))}
        </div>

        {/* Chart Placeholder */}
        <div className="trading-card p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white mb-4 sm:mb-0">Portfolio Performance</h3>
            <button 
              onClick={() => setShowLoginModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
            >
              <LineChart className="w-4 h-4 mr-2 inline" />
              View Interactive Charts
            </button>
          </div>
          <div className="h-64 bg-slate-800/50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">Interactive charts available with premium access</p>
            </div>
          </div>
        </div>

        {/* Top Performers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="trading-card p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Top Performers</h3>
            <div className="space-y-4">
              {mockAnalyticsData.topPerformers.map((stock, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-400 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-white font-semibold">{stock.symbol}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-semibold">{stock.return}</div>
                    <div className="text-slate-400 text-sm">{stock.volume} vol</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="trading-card p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Risk Analysis</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">Portfolio Beta</span>
                  <span className="text-blue-400">1.23</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '61.5%' }}></div>
                </div>
              </div>
              
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">Volatility</span>
                  <span className="text-yellow-400">15.8%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '31.6%' }}></div>
                </div>
              </div>
              
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">Correlation</span>
                  <span className="text-green-400">0.78</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center group"
          >
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
              <Lock className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Advanced Metrics</h3>
            <p className="text-slate-400 text-sm">Access detailed analytics and custom indicators</p>
          </button>
          
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center group"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
              <PieChart className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Portfolio Analysis</h3>
            <p className="text-slate-400 text-sm">Deep dive into portfolio composition and allocation</p>
          </button>
          
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center group md:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
              <Activity className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Real-time Alerts</h3>
            <p className="text-slate-400 text-sm">Get notified of important market movements</p>
          </button>
        </div>
      </main>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
};

export default Analytics;
