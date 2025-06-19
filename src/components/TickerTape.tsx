
import React, { useState, useEffect } from 'react';

const TickerTape = () => {
  const [tickers, setTickers] = useState([
    { symbol: 'SPY', price: 428.50, change: 2.15 },
    { symbol: 'QQQ', price: 368.92, change: -1.23 },
    { symbol: 'AAPL', price: 189.25, change: 3.45 },
    { symbol: 'TSLA', price: 248.87, change: -5.67 },
    { symbol: 'NVDA', price: 725.43, change: 12.89 },
    { symbol: 'MSFT', price: 378.91, change: 2.34 },
    { symbol: 'AMZN', price: 145.67, change: -2.11 },
    { symbol: 'GOOGL', price: 138.45, change: 1.78 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickers(prev => prev.map(ticker => ({
        ...ticker,
        price: ticker.price + (Math.random() - 0.5) * 2,
        change: ticker.change + (Math.random() - 0.5) * 0.5,
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-800/30 border-y border-slate-700/50 py-2 overflow-hidden">
      <div className="ticker-scroll flex space-x-8 whitespace-nowrap">
        {[...tickers, ...tickers].map((ticker, index) => (
          <div key={`${ticker.symbol}-${index}`} className="flex items-center space-x-2 text-sm">
            <span className="font-semibold text-slate-200">{ticker.symbol}</span>
            <span className="text-slate-300">${ticker.price.toFixed(2)}</span>
            <span className={ticker.change >= 0 ? 'text-emerald-400' : 'text-red-400'}>
              {ticker.change >= 0 ? '+' : ''}{ticker.change.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerTape;
