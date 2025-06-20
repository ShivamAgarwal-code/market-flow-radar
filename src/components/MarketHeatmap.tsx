
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

interface HeatmapStock {
  ticker: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: string;
  sector: string;
}

const MarketHeatmap = () => {
  const { t } = useTranslation();
  const [stocks, setStocks] = useState<HeatmapStock[]>([]);

  const sectors = ['Technology', 'Healthcare', 'Financial', 'Energy', 'Consumer', 'Industrial'];
  
  const generateStock = (ticker: string, sector: string): HeatmapStock => {
    const price = Math.random() * 500 + 50;
    const change = (Math.random() - 0.5) * 20;
    
    return {
      ticker,
      price,
      change,
      changePercent: (change / price) * 100,
      volume: Math.floor(Math.random() * 50000000) + 1000000,
      marketCap: `$${(Math.random() * 2000 + 100).toFixed(0)}B`,
      sector,
    };
  };

  useEffect(() => {
    const stockData = [
      { ticker: 'AAPL', sector: 'Technology' },
      { ticker: 'TSLA', sector: 'Consumer' },
      { ticker: 'NVDA', sector: 'Technology' },
      { ticker: 'MSFT', sector: 'Technology' },
      { ticker: 'AMZN', sector: 'Consumer' },
      { ticker: 'GOOGL', sector: 'Technology' },
      { ticker: 'META', sector: 'Technology' },
      { ticker: 'JNJ', sector: 'Healthcare' },
      { ticker: 'JPM', sector: 'Financial' },
      { ticker: 'XOM', sector: 'Energy' },
      { ticker: 'PFE', sector: 'Healthcare' },
      { ticker: 'BAC', sector: 'Financial' },
      { ticker: 'WMT', sector: 'Consumer' },
      { ticker: 'HD', sector: 'Consumer' },
      { ticker: 'PG', sector: 'Consumer' },
      { ticker: 'DIS', sector: 'Consumer' },
    ];

    const initialStocks = stockData.map(({ ticker, sector }) => generateStock(ticker, sector));
    setStocks(initialStocks);
  }, []);

  const getHeatColor = (changePercent: number) => {
    if (changePercent > 3) return 'bg-emerald-500/80 text-white';
    if (changePercent > 1) return 'bg-emerald-500/50 text-emerald-100';
    if (changePercent > 0) return 'bg-emerald-500/20 text-emerald-300';
    if (changePercent > -1) return 'bg-red-500/20 text-red-300';
    if (changePercent > -3) return 'bg-red-500/50 text-red-100';
    return 'bg-red-500/80 text-white';
  };

  const getSize = (volume: number) => {
    if (volume > 30000000) return 'col-span-2 row-span-2';
    if (volume > 20000000) return 'col-span-2';
    return '';
  };

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Live Market Heatmap
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Static snapshot of market performance - upgrade to see real-time data
          </p>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 auto-rows-fr">
          {stocks.map((stock, index) => (
            <div
              key={stock.ticker}
              className={`trading-card p-3 sm:p-4 transition-all duration-300 hover:scale-105 cursor-pointer ${getHeatColor(stock.changePercent)} ${getSize(stock.volume)}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-sm sm:text-base">{stock.ticker}</div>
                {stock.changePercent > 0 ? 
                  <TrendingUp size={14} /> : 
                  <TrendingDown size={14} />
                }
              </div>
              <div className="text-xs opacity-75 mb-1">{stock.sector}</div>
              <div className="text-lg sm:text-xl font-bold">${stock.price.toFixed(2)}</div>
              <div className="text-xs sm:text-sm font-semibold">
                {stock.changePercent > 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
              </div>
              <div className="text-xs opacity-60 mt-1">
                Vol: {(stock.volume / 1000000).toFixed(1)}M
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-emerald-500 rounded"></div>
            <span className="text-slate-400">Gainers</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-slate-400">Losers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketHeatmap;
