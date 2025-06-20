
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import LoginModal from '../components/LoginModal';
import RedirectionLogic from '../components/RedirectionLogic';
import { PieChart, BarChart3, TrendingUp, TrendingDown, DollarSign, Plus } from 'lucide-react';

const Portfolio = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const mockPositions = [
    { symbol: 'AAPL', shares: 50, avgPrice: 175.50, currentPrice: 182.30, change: 3.87 },
    { symbol: 'TSLA', shares: 25, avgPrice: 245.80, currentPrice: 238.90, change: -2.81 },
    { symbol: 'MSFT', shares: 30, avgPrice: 335.20, currentPrice: 348.75, change: 4.04 },
    { symbol: 'NVDA', shares: 15, avgPrice: 420.60, currentPrice: 435.20, change: 3.47 }
  ];

  const totalValue = mockPositions.reduce((sum, pos) => sum + (pos.shares * pos.currentPrice), 0);
  const totalGain = mockPositions.reduce((sum, pos) => sum + (pos.shares * (pos.currentPrice - pos.avgPrice)), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">Portfolio Management</h1>
          <p className="text-slate-400">Track and analyze your trading performance</p>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Total Value</h3>
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">${totalValue.toLocaleString()}</div>
            <div className={`text-sm ${totalGain >= 0 ? 'text-green-400' : 'text-red-400'} flex items-center mt-2`}>
              {totalGain >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
              ${Math.abs(totalGain).toLocaleString()} ({((totalGain / (totalValue - totalGain)) * 100).toFixed(2)}%)
            </div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Positions</h3>
              <BarChart3 className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">{mockPositions.length}</div>
            <div className="text-sm text-slate-400 mt-2">Active holdings</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Performance</h3>
              <PieChart className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-green-400">+12.4%</div>
            <div className="text-sm text-slate-400 mt-2">This month</div>
          </div>
        </div>

        {/* Holdings Table */}
        <div className="trading-card p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white mb-4 sm:mb-0">Current Holdings</h3>
            <button 
              onClick={() => setShowLoginModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Position
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-slate-400 pb-3">Symbol</th>
                  <th className="text-left text-slate-400 pb-3 hidden sm:table-cell">Shares</th>
                  <th className="text-left text-slate-400 pb-3">Current Price</th>
                  <th className="text-left text-slate-400 pb-3 hidden md:table-cell">Avg Price</th>
                  <th className="text-left text-slate-400 pb-3">P&L</th>
                </tr>
              </thead>
              <tbody>
                {mockPositions.map((position, index) => {
                  const totalPL = position.shares * (position.currentPrice - position.avgPrice);
                  return (
                    <tr key={index} className="border-b border-slate-800 hover:bg-slate-800/50 cursor-pointer" onClick={() => setShowLoginModal(true)}>
                      <td className="py-4 text-white font-semibold">{position.symbol}</td>
                      <td className="py-4 text-slate-300 hidden sm:table-cell">{position.shares}</td>
                      <td className="py-4 text-slate-300">${position.currentPrice}</td>
                      <td className="py-4 text-slate-300 hidden md:table-cell">${position.avgPrice}</td>
                      <td className={`py-4 font-semibold ${totalPL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {totalPL >= 0 ? '+' : ''}${totalPL.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center"
          >
            <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Performance Analytics</h3>
            <p className="text-slate-400 text-sm">View detailed performance metrics</p>
          </button>
          
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center"
          >
            <PieChart className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Risk Analysis</h3>
            <p className="text-slate-400 text-sm">Analyze portfolio risk metrics</p>
          </button>
          
          <button 
            onClick={() => setShowLoginModal(true)}
            className="trading-card p-6 hover:bg-slate-800/70 transition-colors text-center sm:col-span-2 lg:col-span-1"
          >
            <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Export Data</h3>
            <p className="text-slate-400 text-sm">Download portfolio reports</p>
          </button>
        </div>
      </main>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
};

export default Portfolio;
