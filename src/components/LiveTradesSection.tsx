
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Zap, DollarSign } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

interface LiveTrade {
  id: string;
  ticker: string;
  type: 'call' | 'put' | 'equity' | 'sweep';
  price: number;
  volume: number;
  premium: number;
  timestamp: Date;
  sentiment: 'bullish' | 'bearish';
  isWhale: boolean;
}

const LiveTradesSection = () => {
  const { t } = useTranslation();
  const [trades, setTrades] = useState<LiveTrade[]>([]);

  const generateTrade = (): LiveTrade => {
    const tickers = ['AAPL', 'TSLA', 'NVDA', 'SPY', 'QQQ', 'MSFT', 'AMZN', 'GOOGL', 'META', 'AMD', 'CRM', 'NFLX'];
    const types = ['call', 'put', 'equity', 'sweep'] as const;
    const type = types[Math.floor(Math.random() * types.length)];
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      ticker: tickers[Math.floor(Math.random() * tickers.length)],
      type,
      price: Math.random() * 500 + 50,
      volume: Math.floor(Math.random() * 10000) + 100,
      premium: Math.random() * 2000000 + 50000,
      timestamp: new Date(),
      sentiment: Math.random() > 0.5 ? 'bullish' : 'bearish',
      isWhale: Math.random() > 0.7,
    };
  };

  useEffect(() => {
    const initialTrades = Array.from({ length: 8 }, generateTrade);
    setTrades(initialTrades);

    const interval = setInterval(() => {
      setTrades(prev => [generateTrade(), ...prev.slice(0, 7)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 hero-gradient bg-clip-text text-transparent">
            {t('landing.liveTrades.title') || 'Live Whale Trades'}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t('landing.liveTrades.subtitle') || 'Real-time whale activity and unusual options flow detection'}
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2"></div>
            <span className="text-emerald-400 text-sm font-semibold">LIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {trades.map((trade, index) => (
            <div 
              key={trade.id} 
              className="trading-card p-6 whale-pulse fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    trade.isWhale ? 'bg-blue-500/20' : 'bg-slate-700/50'
                  }`}>
                    {trade.isWhale ? <Zap className="w-5 h-5 text-blue-400" /> : <DollarSign className="w-5 h-5 text-slate-400" />}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="ticker-badge text-lg">{trade.ticker}</span>
                      {trade.isWhale && <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">WHALE</span>}
                    </div>
                    <div className="text-xs text-slate-400">{trade.timestamp.toLocaleTimeString()}</div>
                  </div>
                </div>
                
                <div className={`p-1 rounded ${
                  trade.sentiment === 'bullish' ? 'bg-emerald-500/20' : 'bg-red-500/20'
                }`}>
                  {trade.sentiment === 'bullish' ? 
                    <TrendingUp className="w-5 h-5 text-emerald-400" /> :
                    <TrendingDown className="w-5 h-5 text-red-400" />
                  }
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase">{trade.type}</div>
                  <div className="text-sm font-semibold text-slate-200">${trade.price.toFixed(2)}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Volume</div>
                  <div className="text-sm font-semibold text-slate-200">{trade.volume.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Premium</div>
                  <div className="text-sm font-semibold text-slate-200">${(trade.premium / 1000).toFixed(0)}K</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveTradesSection;
