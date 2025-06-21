
import React, { useState, useEffect } from 'react';
import { Flame, Eye, MessageCircle, Share } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

interface TrendingItem {
  id: string;
  title: string;
  description: string;
  views: number;
  comments: number;
  timestamp: Date;
  category: 'whale' | 'news' | 'analysis' | 'alert';
  trending: boolean;
}

const TrendingSection = () => {
  const { t } = useTranslation();
  const [trendingItems, setTrendingItems] = useState<TrendingItem[]>([]);

  const generateTrendingItem = (): TrendingItem => {
    const titles = [
      'Massive AAPL Call Sweep Detected - $50M Premium',
      'Tesla Whale Accumulating Before Earnings',
      'Unusual SPY Put Activity Suggests Market Downturn',
      'NVDA Dark Pool Print: $100M+ Block Trade',
      'Options Flow Alert: QQQ Bullish Divergence',
      'Whale Watch: Microsoft Insider Activity Spike',
      'Breaking: Amazon Unusual Options Volume 500% Above Average'
    ];

    const descriptions = [
      'Multiple large block trades detected across major strikes',
      'Institution-level activity suggests significant position building',
      'Pattern analysis indicates potential market rotation',
      'Cross-referenced with insider filing data',
      'Technical indicators align with options positioning',
      'Correlation with sector-wide institutional movements',
      'Real-time alerts triggered across multiple algorithms'
    ];

    const categories = ['whale', 'news', 'analysis', 'alert'] as const;

    return {
      id: Math.random().toString(36).substr(2, 9),
      title: titles[Math.floor(Math.random() * titles.length)],
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      views: Math.floor(Math.random() * 50000) + 1000,
      comments: Math.floor(Math.random() * 500) + 10,
      timestamp: new Date(Date.now() - Math.random() * 86400000),
      category: categories[Math.floor(Math.random() * categories.length)],
      trending: Math.random() > 0.6,
    };
  };

  useEffect(() => {
    const initialItems = Array.from({ length: 8 }, generateTrendingItem);
    setTrendingItems(initialItems);

    const interval = setInterval(() => {
      setTrendingItems(prev => [generateTrendingItem(), ...prev.slice(0, 7)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'whale': return '🐋';
      case 'news': return '📰';
      case 'analysis': return '📊';
      case 'alert': return '🚨';
      default: return '📈';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'whale': return 'bg-blue-500/20 text-blue-300';
      case 'news': return 'bg-green-500/20 text-green-300';
      case 'analysis': return 'bg-purple-500/20 text-purple-300';
      case 'alert': return 'bg-red-500/20 text-red-300';
      default: return 'bg-slate-500/20 text-slate-300';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <Flame className="w-8 h-8 text-orange-400 mr-3" />
            {t('trending.title')}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t('trending.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trendingItems.map((item, index) => (
            <div
              key={item.id}
              className="trading-card p-6 hover:scale-[1.02] transition-all duration-300 fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{getCategoryIcon(item.category)}</span>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getCategoryColor(item.category)}`}>
                    {item.category.toUpperCase()}
                  </span>
                  {item.trending && (
                    <div className="flex items-center space-x-1">
                      <Flame className="w-4 h-4 text-orange-400" />
                      <span className="text-xs text-orange-400 font-semibold">TRENDING</span>
                    </div>
                  )}
                </div>
                <div className="text-xs text-slate-400">
                  {item.timestamp.toLocaleTimeString()}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{item.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{item.comments}</span>
                  </div>
                </div>
                <button className="flex items-center space-x-1 hover:text-slate-300 transition-colors">
                  <Share className="w-4 h-4" />
                  <span>{t('trending.share')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200 glow-effect">
            {t('trending.viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
