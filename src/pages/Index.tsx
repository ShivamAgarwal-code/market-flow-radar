
import React from 'react';
import Navigation from '../components/Navigation';
import TickerTape from '../components/TickerTape';
import WhaleActivityFeed from '../components/WhaleActivityFeed';
import MarketOverview from '../components/MarketOverview';
import RedirectionLogic from '../components/RedirectionLogic';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      <TickerTape />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">
            Live Market Intelligence
          </h1>
          <p className="text-slate-400">
            Real-time whale activity, options flow, and market insights
          </p>
        </div>

        <MarketOverview />
        
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <WhaleActivityFeed />
          </div>
          
          <div className="space-y-6">
            <div className="trading-card p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-4">Top Movers</h3>
              <div className="space-y-3">
                {[
                  { ticker: 'NVDA', change: 8.45, volume: '2.1M' },
                  { ticker: 'TSLA', change: -3.21, volume: '1.8M' },
                  { ticker: 'AAPL', change: 2.15, volume: '1.5M' },
                  { ticker: 'META', change: 4.67, volume: '1.2M' },
                ].map((stock) => (
                  <div key={stock.ticker} className="flex items-center justify-between">
                    <span className="ticker-badge">{stock.ticker}</span>
                    <div className="text-right">
                      <div className={`text-sm font-semibold ${
                        stock.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                      }`}>
                        {stock.change >= 0 ? '+' : ''}{stock.change}%
                      </div>
                      <div className="text-xs text-slate-500">{stock.volume}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="trading-card p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-4">Market Sentiment</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Fear & Greed</span>
                  <span className="text-emerald-400">72 (Greed)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Put/Call Ratio</span>
                  <span className="text-slate-300">0.68</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">VIX Level</span>
                  <span className="text-yellow-400">18.45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
