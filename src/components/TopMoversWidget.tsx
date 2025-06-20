
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Volume2 } from 'lucide-react';

interface Mover {
  ticker: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  isGainer: boolean;
}

const TopMoversWidget = () => {
  const [movers, setMovers] = useState<Mover[]>([]);

  const generateMover = (isGainer: boolean): Mover => {
    const gainers = ['NVDA', 'TSLA', 'AAPL', 'META', 'GOOGL'];
    const losers = ['NFLX', 'UBER', 'SNAP', 'TWTR', 'ROKU'];
    const tickers = isGainer ? gainers : losers;
    
    const ticker = tickers[Math.floor(Math.random() * tickers.length)];
    const price = Math.random() * 500 + 50;
    const changePercent = isGainer ? 
      Math.random() * 8 + 2 : 
      -(Math.random() * 8 + 2);
    
    return {
      ticker,
      price,
      change: (price * changePercent) / 100,
      changePercent,
      volume: `${(Math.random() * 5 + 1).toFixed(1)}M`,
      isGainer
    };
  };

  useEffect(() => {
    const gainers = Array.from({ length: 4 }, () => generateMover(true));
    const losers = Array.from({ length: 4 }, () => generateMover(false));
    setMovers([...gainers, ...losers]);

    const interval = setInterval(() => {
      setMovers(prev => prev.map(mover => ({
        ...mover,
        price: mover.price + (Math.random() - 0.5) * 2,
        change: mover.change + (Math.random() - 0.5) * 0.5,
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const gainers = movers.filter(m => m.isGainer);
  const losers = movers.filter(m => !m.isGainer);

  return (
    <div className="trading-card p-6">
      <h3 className="text-lg font-semibold text-slate-100 mb-4">Top Movers</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-emerald-400 mb-3 flex items-center">
            <TrendingUp size={16} className="mr-2" />
            Gainers
          </h4>
          <div className="space-y-2">
            {gainers.map((stock, index) => (
              <div key={`${stock.ticker}-${index}`} className="flex items-center justify-between p-2 bg-emerald-500/5 rounded">
                <div className="flex items-center space-x-2">
                  <span className="ticker-badge text-xs">{stock.ticker}</span>
                  <Volume2 size={12} className="text-slate-400" />
                  <span className="text-xs text-slate-500">{stock.volume}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-emerald-400">
                    +{stock.changePercent.toFixed(2)}%
                  </div>
                  <div className="text-xs text-slate-500">${stock.price.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-red-400 mb-3 flex items-center">
            <TrendingDown size={16} className="mr-2" />
            Losers
          </h4>
          <div className="space-y-2">
            {losers.map((stock, index) => (
              <div key={`${stock.ticker}-${index}`} className="flex items-center justify-between p-2 bg-red-500/5 rounded">
                <div className="flex items-center space-x-2">
                  <span className="ticker-badge text-xs">{stock.ticker}</span>
                  <Volume2 size={12} className="text-slate-400" />
                  <span className="text-xs text-slate-500">{stock.volume}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-red-400">
                    {stock.changePercent.toFixed(2)}%
                  </div>
                  <div className="text-xs text-slate-500">${stock.price.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMoversWidget;
