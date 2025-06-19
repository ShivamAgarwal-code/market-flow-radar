
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import TickerTape from '../components/TickerTape';
import RedirectionLogic from '../components/RedirectionLogic';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Stock {
  ticker: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  peRatio: number;
}

const Screener = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [sortBy, setSortBy] = useState<'change' | 'volume' | 'marketCap'>('change');

  useEffect(() => {
    const tickers = [
      'AAPL', 'TSLA', 'NVDA', 'MSFT', 'AMZN', 'GOOGL', 'META', 'NFLX',
      'CRM', 'AMD', 'INTC', 'PYPL', 'ADBE', 'ORCL', 'CSCO', 'IBM'
    ];

    const generatedStocks = tickers.map(ticker => ({
      ticker,
      price: Math.random() * 500 + 50,
      change: (Math.random() - 0.5) * 20,
      changePercent: (Math.random() - 0.5) * 10,
      volume: Math.floor(Math.random() * 50000000) + 1000000,
      marketCap: Math.floor(Math.random() * 2000000000000) + 10000000000,
      peRatio: Math.random() * 50 + 5,
    }));

    setStocks(generatedStocks);

    const interval = setInterval(() => {
      setStocks(prev => prev.map(stock => ({
        ...stock,
        price: stock.price + (Math.random() - 0.5) * 2,
        change: stock.change + (Math.random() - 0.5) * 0.5,
        changePercent: stock.changePercent + (Math.random() - 0.5) * 0.1,
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const sortedStocks = [...stocks].sort((a, b) => {
    if (sortBy === 'change') return b.changePercent - a.changePercent;
    if (sortBy === 'volume') return b.volume - a.volume;
    if (sortBy === 'marketCap') return b.marketCap - a.marketCap;
    return 0;
  });

  const formatMarketCap = (value: number) => {
    if (value >= 1000000000000) return `$${(value / 1000000000000).toFixed(1)}T`;
    if (value >= 1000000000) return `$${(value / 1000000000).toFixed(1)}B`;
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      <TickerTape />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-100 mb-2">
              Stock Screener
            </h1>
            <p className="text-slate-400">
              Advanced screening and analysis tools
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <label className="text-slate-400 text-sm">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <option value="change">% Change</option>
              <option value="volume">Volume</option>
              <option value="marketCap">Market Cap</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="trading-card p-4 text-center">
            <div className="text-2xl font-bold text-emerald-400">
              {stocks.filter(s => s.changePercent > 0).length}
            </div>
            <div className="text-slate-400 text-sm">Gainers</div>
          </div>
          <div className="trading-card p-4 text-center">
            <div className="text-2xl font-bold text-red-400">
              {stocks.filter(s => s.changePercent < 0).length}
            </div>
            <div className="text-slate-400 text-sm">Losers</div>
          </div>
          <div className="trading-card p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">
              {stocks.filter(s => s.volume > 10000000).length}
            </div>
            <div className="text-slate-400 text-sm">High Volume</div>
          </div>
          <div className="trading-card p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">
              {stocks.filter(s => Math.abs(s.changePercent) > 5).length}
            </div>
            <div className="text-slate-400 text-sm">Big Movers</div>
          </div>
        </div>

        <div className="trading-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">Ticker</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">Price</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">Change</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">% Change</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">Volume</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">Market Cap</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">P/E</th>
                </tr>
              </thead>
              <tbody>
                {sortedStocks.map((stock) => (
                  <tr key={stock.ticker} className="data-row border-b border-slate-700/30">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <span className="ticker-badge">{stock.ticker}</span>
                        {stock.changePercent >= 0 ? 
                          <TrendingUp size={14} className="text-emerald-400" /> :
                          <TrendingDown size={14} className="text-red-400" />
                        }
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-300 font-semibold">
                      ${stock.price.toFixed(2)}
                    </td>
                    <td className={`py-3 px-4 font-semibold ${
                      stock.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                    </td>
                    <td className={`py-3 px-4 font-semibold ${
                      stock.changePercent >= 0 ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                    </td>
                    <td className="py-3 px-4 text-slate-300">
                      {(stock.volume / 1000000).toFixed(1)}M
                    </td>
                    <td className="py-3 px-4 text-slate-300">
                      {formatMarketCap(stock.marketCap)}
                    </td>
                    <td className="py-3 px-4 text-slate-300">
                      {stock.peRatio.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Screener;
