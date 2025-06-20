
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import LoginModal from '../components/LoginModal';
import RedirectionLogic from '../components/RedirectionLogic';
import { Shield, AlertTriangle, BarChart3, TrendingDown, Settings, Target } from 'lucide-react';

const RiskManagement = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const riskMetrics = {
    portfolioRisk: 'Medium',
    maxDrawdown: '12.3%',
    sharpeRatio: 1.47,
    volatility: '18.2%'
  };

  const riskAlerts = [
    {
      type: 'HIGH',
      message: 'Portfolio concentration risk detected in tech sector',
      action: 'Consider diversification',
      timestamp: '5 mins ago'
    },
    {
      type: 'MEDIUM',
      message: 'Position size exceeds 5% portfolio limit for NVDA',
      action: 'Reduce position or adjust limits',
      timestamp: '1 hour ago'
    },
    {
      type: 'LOW',
      message: 'Stop loss triggered for TSLA position',
      action: 'Review and adjust strategy',
      timestamp: '2 hours ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">Risk Management</h1>
          <p className="text-slate-400">Protect your capital with advanced risk monitoring and controls</p>
        </div>

        {/* Risk Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Portfolio Risk</h3>
              <Shield className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-400">{riskMetrics.portfolioRisk}</div>
            <div className="text-sm text-slate-400 mt-2">Current level</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Max Drawdown</h3>
              <TrendingDown className="w-6 h-6 text-red-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{riskMetrics.maxDrawdown}</div>
            <div className="text-sm text-red-400 mt-2">Last 30 days</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Sharpe Ratio</h3>
              <BarChart3 className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{riskMetrics.sharpeRatio}</div>
            <div className="text-sm text-green-400 mt-2">Risk-adjusted return</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Volatility</h3>
              <AlertTriangle className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{riskMetrics.volatility}</div>
            <div className="text-sm text-slate-400 mt-2">30-day average</div>
          </div>
        </div>

        {/* Risk Alerts */}
        <div className="trading-card p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white mb-4 sm:mb-0">Risk Alerts</h3>
            <button 
              onClick={() => setShowLoginModal(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
            >
              <Settings className="w-4 h-4 mr-2 inline" />
              Configure Alerts
            </button>
          </div>
          
          <div className="space-y-4">
            {riskAlerts.map((alert, index) => (
              <div 
                key={index} 
                className="p-4 bg-slate-800/50 rounded-lg border-l-4 border-red-500 hover:bg-slate-800/70 cursor-pointer transition-colors"
                onClick={() => setShowLoginModal(true)}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        alert.type === 'HIGH' ? 'bg-red-500/20 text-red-400' :
                        alert.type === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {alert.type} RISK
                      </span>
                      <span className="text-slate-500 text-xs">{alert.timestamp}</span>
                    </div>
                    <h4 className="text-white font-semibold mb-1">{alert.message}</h4>
                    <p className="text-slate-300 text-sm">{alert.action}</p>
                  </div>
                  <AlertTriangle className={`w-6 h-6 mt-2 sm:mt-0 sm:ml-4 ${
                    alert.type === 'HIGH' ? 'text-red-400' :
                    alert.type === 'MEDIUM' ? 'text-yellow-400' :
                    'text-blue-400'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Management Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="trading-card p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Position Sizing</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">Max Position Size</span>
                  <span className="text-blue-400">5% per stock</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <div className="text-xs text-slate-400 mt-1">Conservative allocation</div>
              </div>
              
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">Sector Concentration</span>
                  <span className="text-yellow-400">25% max per sector</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <div className="text-xs text-slate-400 mt-1">Tech: 15%, Finance: 10%</div>
              </div>
              
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">Cash Reserve</span>
                  <span className="text-green-400">15% minimum</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="text-xs text-slate-400 mt-1">Current: 18.5%</div>
              </div>
            </div>
            <button 
              onClick={() => setShowLoginModal(true)}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
            >
              Adjust Limits
            </button>
          </div>

          <div className="trading-card p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Stop Loss Management</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-white font-semibold">AAPL</h4>
                    <p className="text-slate-400 text-sm">Stop: $175.00 (-4.0%)</p>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-semibold">Active</div>
                    <div className="text-slate-400 text-sm">Trailing</div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-white font-semibold">TSLA</h4>
                    <p className="text-slate-400 text-sm">Stop: $220.00 (-7.9%)</p>
                  </div>
                  <div className="text-right">
                    <div className="text-red-400 font-semibold">Triggered</div>
                    <div className="text-slate-400 text-sm">2 hours ago</div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-white font-semibold">NVDA</h4>
                    <p className="text-slate-400 text-sm">Stop: $415.00 (-4.6%)</p>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-semibold">Active</div>
                    <div className="text-slate-400 text-sm">Fixed</div>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setShowLoginModal(true)}
              className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold"
            >
              Manage Stop Losses
            </button>
          </div>
        </div>

        {/* Risk Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center"
          >
            <BarChart3 className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">VaR Calculator</h3>
            <p className="text-slate-400 text-sm">Calculate Value at Risk for your portfolio</p>
          </button>
          
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center"
          >
            <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Correlation Matrix</h3>
            <p className="text-slate-400 text-sm">Analyze correlations between your holdings</p>
          </button>
          
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center"
          >
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Stress Testing</h3>
            <p className="text-slate-400 text-sm">Test portfolio under various market scenarios</p>
          </button>
        </div>
      </main>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
};

export default RiskManagement;
