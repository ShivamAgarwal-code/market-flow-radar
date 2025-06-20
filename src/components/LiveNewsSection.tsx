
import React, { useState, useEffect } from 'react';
import { Clock, ExternalLink, TrendingUp } from 'lucide-react';

interface NewsItem {
  id: string;
  headline: string;
  summary: string;
  timestamp: Date;
  impact: 'high' | 'medium' | 'low';
  relatedTickers: string[];
}

const LiveNewsSection = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  const generateNews = (): NewsItem => {
    const headlines = [
      'Federal Reserve Signals Potential Rate Changes Following Latest CPI Data',
      'Tech Sector Rebounds as NVDA Reports Strong Q4 Earnings Beat',
      'Oil Prices Surge 3% on Middle East Supply Concerns',
      'Apple Announces Revolutionary AI Integration Across Product Line',
      'Tesla Delivers Record Quarter Despite Economic Headwinds',
      'Banking Sector Under Pressure as Credit Concerns Mount',
      'Biotech Rally Continues with FDA Approval Wave',
      'Cryptocurrency Market Rallies on Institutional Adoption News'
    ];

    const summaries = [
      'Market participants are closely watching for implications on monetary policy.',
      'Strong earnings results are driving renewed investor confidence in technology.',
      'Geopolitical tensions continue to impact energy commodity pricing.',
      'Innovation announcements are supporting premium valuation multiples.',
      'Operational excellence amid challenging conditions impresses analysts.',
      'Credit quality concerns are weighing on financial sector performance.',
      'Regulatory approvals are catalyzing significant sector rotation.',
      'Institutional adoption is validating digital asset investment thesis.'
    ];

    const tickerGroups = [
      ['SPY', 'QQQ'],
      ['NVDA', 'AMD', 'INTC'],
      ['XOM', 'CVX', 'USO'],
      ['AAPL', 'MSFT'],
      ['TSLA', 'F', 'GM'],
      ['JPM', 'BAC', 'WFC'],
      ['GILD', 'MRNA', 'PFE'],
      ['BTC', 'ETH', 'COIN']
    ];

    const impacts = ['high', 'medium', 'low'] as const;
    const headlineIndex = Math.floor(Math.random() * headlines.length);

    return {
      id: Math.random().toString(36).substr(2, 9),
      headline: headlines[headlineIndex],
      summary: summaries[headlineIndex],
      timestamp: new Date(Date.now() - Math.random() * 3600000),
      impact: impacts[Math.floor(Math.random() * impacts.length)],
      relatedTickers: tickerGroups[headlineIndex] || ['SPY']
    };
  };

  useEffect(() => {
    const initialNews = Array.from({ length: 6 }, generateNews);
    setNews(initialNews);

    const interval = setInterval(() => {
      setNews(prev => [generateNews(), ...prev.slice(0, 5)]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-500/20 text-red-300';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300';
      case 'low': return 'bg-green-500/20 text-green-300';
      default: return 'bg-slate-500/20 text-slate-300';
    }
  };

  return (
    <div className="trading-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-100">Market News</h2>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-slate-400">LIVE</span>
        </div>
      </div>

      <div className="space-y-4">
        {news.map((item, index) => (
          <div
            key={item.id}
            className="border-l-4 border-blue-500/30 pl-4 pb-4 border-b border-slate-700/30 last:border-b-0 fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${getImpactColor(item.impact)}`}>
                  {item.impact.toUpperCase()}
                </span>
                <div className="flex items-center space-x-1 text-xs text-slate-400">
                  <Clock size={12} />
                  <span>{item.timestamp.toLocaleTimeString()}</span>
                </div>
              </div>
              <ExternalLink size={14} className="text-slate-400 hover:text-slate-300 cursor-pointer" />
            </div>

            <h3 className="font-semibold text-slate-100 mb-2 text-sm leading-snug">
              {item.headline}
            </h3>
            <p className="text-slate-400 text-xs mb-3">
              {item.summary}
            </p>

            <div className="flex items-center space-x-2">
              <TrendingUp size={12} className="text-blue-400" />
              <div className="flex space-x-1">
                {item.relatedTickers.map(ticker => (
                  <span key={ticker} className="ticker-badge text-xs">
                    {ticker}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveNewsSection;
