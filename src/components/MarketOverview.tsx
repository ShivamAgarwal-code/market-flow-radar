
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MarketOverview = () => {
  const [marketData, setMarketData] = useState({
    spy: { price: 428.50, change: 2.15, volume: '89.2M' },
    qqq: { price: 368.92, change: -1.23, volume: '42.8M' },
    vix: { price: 18.45, change: -0.87, volume: '1.2M' },
    bitcoin: { price: 43250, change: 1250, volume: '2.1B' },
  });

  const [whaleStats, setWhaleStats] = useState({
    totalFlow: 2847000000,
    callPutRatio: 1.23,
    darkPoolPrint: 892000000,
    unusualActivity: 147,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => ({
        spy: { ...prev.spy, price: prev.spy.price + (Math.random() - 0.5) * 2 },
        qqq: { ...prev.qqq, price: prev.qqq.price + (Math.random() - 0.5) * 2 },
        vix: { ...prev.vix, price: prev.vix.price + (Math.random() - 0.5) * 1 },
        bitcoin: { ...prev.bitcoin, price: prev.bitcoin.price + (Math.random() - 0.5) * 500 },
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (value: number) => {
    if (value >= 1000000000) return `$${(value / 1000000000).toFixed(1)}B`;
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Market Indices */}
      <div className="trading-card p-6">
        <h3 className="text-lg font-semibold text-slate-100 mb-4">Market Overview</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(marketData).map(([key, data]) => (
            <div key={key} className="p-3 bg-slate-700/30 rounded-lg">
              <div className="text-xs text-slate-400 uppercase">{key}</div>
              <div className="text-lg font-semibold text-slate-100">
                ${data.price.toLocaleString()}
              </div>
              <div className={`text-sm flex items-center space-x-1 ${
                data.change >= 0 ? 'text-emerald-400' : 'text-red-400'
              }`}>
                {data.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                <span>{data.change >= 0 ? '+' : ''}{data.change.toFixed(2)}</span>
              </div>
              <div className="text-xs text-slate-500">Vol: {data.volume}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Whale Stats */}
      <div className="trading-card p-6">
        <h3 className="text-lg font-semibold text-slate-100 mb-4">Whale Activity</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <div className="text-xs text-blue-400">Total Flow</div>
            <div className="text-lg font-semibold text-slate-100">
              {formatCurrency(whaleStats.totalFlow)}
            </div>
          </div>
          <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
            <div className="text-xs text-emerald-400">Call/Put Ratio</div>
            <div className="text-lg font-semibold text-slate-100">
              {whaleStats.callPutRatio.toFixed(2)}
            </div>
          </div>
          <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
            <div className="text-xs text-purple-400">Dark Pool</div>
            <div className="text-lg font-semibold text-slate-100">
              {formatCurrency(whaleStats.darkPoolPrint)}
            </div>
          </div>
          <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
            <div className="text-xs text-orange-400">Unusual Activity</div>
            <div className="text-lg font-semibold text-slate-100">
              {whaleStats.unusualActivity}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;
