
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Activity, Zap } from 'lucide-react';

const MarketSentimentWidget = () => {
  const [sentiment, setSentiment] = useState({
    fearGreed: 72,
    putCallRatio: 0.68,
    vixLevel: 18.45,
    bullishPercent: 65,
    whaleActivity: 78,
    institutionalFlow: 2.4,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSentiment(prev => ({
        fearGreed: Math.max(0, Math.min(100, prev.fearGreed + (Math.random() - 0.5) * 4)),
        putCallRatio: Math.max(0.3, Math.min(2.0, prev.putCallRatio + (Math.random() - 0.5) * 0.1)),
        vixLevel: Math.max(10, Math.min(50, prev.vixLevel + (Math.random() - 0.5) * 2)),
        bullishPercent: Math.max(20, Math.min(90, prev.bullishPercent + (Math.random() - 0.5) * 6)),
        whaleActivity: Math.max(0, Math.min(100, prev.whaleActivity + (Math.random() - 0.5) * 8)),
        institutionalFlow: Math.max(-5, Math.min(10, prev.institutionalFlow + (Math.random() - 0.5) * 0.5)),
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getFearGreedLabel = (value: number) => {
    if (value >= 75) return { label: 'Extreme Greed', color: 'text-red-400' };
    if (value >= 55) return { label: 'Greed', color: 'text-orange-400' };
    if (value >= 45) return { label: 'Neutral', color: 'text-yellow-400' };
    if (value >= 25) return { label: 'Fear', color: 'text-blue-400' };
    return { label: 'Extreme Fear', color: 'text-purple-400' };
  };

  const getVixColor = (value: number) => {
    if (value > 30) return 'text-red-400';
    if (value > 20) return 'text-yellow-400';
    return 'text-emerald-400';
  };

  const fearGreedData = getFearGreedLabel(sentiment.fearGreed);

  return (
    <div className="trading-card p-6">
      <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center">
        <Activity className="w-5 h-5 mr-2 text-blue-400" />
        Market Sentiment
      </h3>
      
      <div className="space-y-4">
        <div className="p-3 bg-slate-700/30 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-400 text-sm">Fear & Greed Index</span>
            <span className={`font-semibold ${fearGreedData.color}`}>
              {sentiment.fearGreed.toFixed(0)} ({fearGreedData.label})
            </span>
          </div>
          <div className="w-full bg-slate-600 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 via-blue-500 via-yellow-500 via-orange-500 to-red-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${sentiment.fearGreed}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-slate-700/30 rounded-lg">
            <div className="text-xs text-slate-400 mb-1">Put/Call Ratio</div>
            <div className="text-lg font-semibold text-slate-300">
              {sentiment.putCallRatio.toFixed(2)}
            </div>
            <div className="text-xs text-slate-500">
              {sentiment.putCallRatio > 1 ? 'Bearish' : 'Bullish'}
            </div>
          </div>

          <div className="p-3 bg-slate-700/30 rounded-lg">
            <div className="text-xs text-slate-400 mb-1">VIX Level</div>
            <div className={`text-lg font-semibold ${getVixColor(sentiment.vixLevel)}`}>
              {sentiment.vixLevel.toFixed(2)}
            </div>
            <div className="text-xs text-slate-500">
              {sentiment.vixLevel > 30 ? 'High Fear' : sentiment.vixLevel > 20 ? 'Elevated' : 'Low Fear'}
            </div>
          </div>
        </div>

        <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Whale Activity</span>
            </div>
            <span className="text-blue-300 font-semibold">{sentiment.whaleActivity}%</span>
          </div>
          <div className="w-full bg-blue-900/30 rounded-full h-2">
            <div 
              className="bg-blue-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${sentiment.whaleActivity}%` }}
            ></div>
          </div>
        </div>

        <div className="p-3 bg-slate-700/30 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-400 text-sm">Institutional Flow</span>
            <span className={`font-semibold flex items-center ${
              sentiment.institutionalFlow > 0 ? 'text-emerald-400' : 'text-red-400'
            }`}>
              {sentiment.institutionalFlow > 0 ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
              ${Math.abs(sentiment.institutionalFlow).toFixed(1)}B
            </span>
          </div>
          <div className="text-xs text-slate-500">
            {sentiment.institutionalFlow > 0 ? 'Net Buying' : 'Net Selling'}
          </div>
        </div>

        <div className="text-center pt-2">
          <div className="text-xs text-slate-500">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSentimentWidget;
