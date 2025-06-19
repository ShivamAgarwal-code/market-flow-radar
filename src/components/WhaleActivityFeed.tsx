
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface WhaleActivity {
  id: string;
  ticker: string;
  type: 'call' | 'put' | 'equity';
  size: number;
  price: number;
  premium: number;
  timestamp: string;
  sentiment: 'bullish' | 'bearish';
}

const WhaleActivityFeed = () => {
  const [activities, setActivities] = useState<WhaleActivity[]>([]);

  const generateActivity = (): WhaleActivity => {
    const tickers = ['AAPL', 'TSLA', 'NVDA', 'SPY', 'QQQ', 'MSFT', 'AMZN', 'GOOGL', 'META', 'NFLX'];
    const types = ['call', 'put', 'equity'] as const;
    const type = types[Math.floor(Math.random() * types.length)];
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      ticker: tickers[Math.floor(Math.random() * tickers.length)],
      type,
      size: Math.floor(Math.random() * 5000) + 100,
      price: Math.random() * 500 + 50,
      premium: Math.random() * 1000000 + 50000,
      timestamp: new Date().toLocaleTimeString(),
      sentiment: Math.random() > 0.5 ? 'bullish' : 'bearish',
    };
  };

  useEffect(() => {
    // Initial data
    const initialActivities = Array.from({ length: 10 }, generateActivity);
    setActivities(initialActivities);

    // Add new activities periodically
    const interval = setInterval(() => {
      setActivities(prev => [generateActivity(), ...prev.slice(0, 19)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trading-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-100">Live Whale Activity</h2>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-slate-400">LIVE</span>
        </div>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="data-row p-3 rounded-lg border border-slate-700/30 whale-pulse"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-1 rounded ${
                  activity.sentiment === 'bullish' ? 'bg-emerald-500/20' : 'bg-red-500/20'
                }`}>
                  {activity.sentiment === 'bullish' ? 
                    <TrendingUp size={16} className="text-emerald-400" /> :
                    <TrendingDown size={16} className="text-red-400" />
                  }
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="ticker-badge">{activity.ticker}</span>
                    <span className="text-xs text-slate-400 uppercase">{activity.type}</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{activity.timestamp}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm font-semibold text-slate-200">
                  {activity.size.toLocaleString()} contracts
                </div>
                <div className="text-xs text-slate-400">
                  ${activity.premium.toLocaleString()} premium
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhaleActivityFeed;
