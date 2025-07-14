
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import TickerTape from '../components/TickerTape';
import RedirectionLogic from '../components/RedirectionLogic';
import { Search, Filter, TrendingUp, TrendingDown, Volume2 } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

interface Stock {
  id: string;
  ticker: string;
  company: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: string;
  whaleActivity: number;
  sentiment: 'bullish' | 'bearish' | 'neutral';
}

const Screener = () => {
  const { t } = useTranslation();
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [filter, setFilter] = useState<'all' | 'whale' | 'volume' | 'movers'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Check for URL search parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, []);

  const generateStock = (): Stock => {
    const tickers = [
      { symbol: 'AAPL', company: 'Apple Inc.' },
      { symbol: 'TSLA', company: 'Tesla Inc.' },
      { symbol: 'NVDA', company: 'NVIDIA Corporation' },
      { symbol: 'MSFT', company: 'Microsoft Corporation' },
      { symbol: 'AMZN', company: 'Amazon.com Inc.' },
      { symbol: 'GOOGL', company: 'Alphabet Inc.' },
      { symbol: 'META', company: 'Meta Platforms Inc.' },
      { symbol: 'NFLX', company: 'Netflix Inc.' },
      { symbol: 'AMD', company: 'Advanced Micro Devices' },
      { symbol: 'CRM', company: 'Salesforce Inc.' }
    ];
    
    const stock = tickers[Math.floor(Math.random() * tickers.length)];
    const price = Math.random() * 500 + 50;
    const change = (Math.random() - 0.5) * 20;
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      ticker: stock.symbol,
      company: stock.company,
      price,
      change,
      changePercent: (change / price) * 100,
      volume: Math.floor(Math.random() * 50000000) + 1000000,
      marketCap: `$${(Math.random() * 2000 + 100).toFixed(0)}B`,
      whaleActivity: Math.floor(Math.random() * 100),
      sentiment: change > 5 ? 'bullish' : change < -5 ? 'bearish' : 'neutral'
    };
  };

  useEffect(() => {
    const initialStocks = Array.from({ length: 50 }, generateStock);
    setStocks(initialStocks);

    const interval = setInterval(() => {
      setStocks(prev => prev.map(stock => ({
        ...stock,
        price: stock.price + (Math.random() - 0.5) * 2,
        change: stock.change + (Math.random() - 0.5) * 0.5,
        volume: stock.volume + Math.floor((Math.random() - 0.5) * 1000000),
        whaleActivity: Math.max(0, Math.min(100, stock.whaleActivity + (Math.random() - 0.5) * 10))
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredStocks = stocks.filter(stock => {
    const matchesSearch = stock.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stock.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;
    
    switch (filter) {
      case 'whale':
        return stock.whaleActivity > 70;
      case 'volume':
        return stock.volume > 20000000;
      case 'movers':
        return Math.abs(stock.changePercent) > 3;
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      <TickerTape />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">
              {t('screener.title')}
            </h1>
            <p className="text-sm sm:text-base text-slate-400">
              {t('screener.subtitle')}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-6 sm:mb-8">
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder={t('screener.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && searchTerm.trim()) {
                    // Trigger search animation or action
                    const input = e.target as HTMLInputElement;
                    input.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                      input.style.transform = 'scale(1)';
                    }, 150);
                  }
                }}
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-150"
              />
          </div>
          
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <Filter size={16} className="text-slate-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="w-full md:w-auto bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <option value="all">{t('screener.allStocks')}</option>
              <option value="whale">{t('screener.highWhaleActivity')}</option>
              <option value="volume">{t('screener.highVolume')}</option>
              <option value="movers">{t('screener.bigMovers')}</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="trading-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">{t('screener.stock')}</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">{t('screener.price')}</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">{t('screener.change')}</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">{t('screener.volume')}</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">{t('screener.marketCap')}</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">{t('screener.whaleActivity')}</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">{t('screener.sentiment')}</th>
                </tr>
              </thead>
              <tbody>
                {filteredStocks.map((stock, index) => (
                  <tr 
                    key={stock.id} 
                    className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-all duration-200 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <td className="py-3 sm:py-4 px-3 sm:px-4">
                      <div>
                        <div className="font-semibold text-slate-100 text-sm sm:text-base">{stock.ticker}</div>
                        <div className="text-xs sm:text-sm text-slate-400 truncate max-w-[120px] sm:max-w-none">{stock.company}</div>
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">
                      ${stock.price.toFixed(2)}
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4">
                      <div className={`flex items-center space-x-1 text-sm ${
                        stock.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                      }`}>
                        {stock.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                        <span>${stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)</span>
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4">
                      <div className="flex items-center space-x-2">
                        <Volume2 size={14} className="text-slate-400" />
                        <span className="text-slate-300 text-sm">{(stock.volume / 1000000).toFixed(1)}M</span>
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-slate-300 text-sm">{stock.marketCap}</td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-12 sm:w-16 bg-slate-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              stock.whaleActivity > 70 ? 'bg-emerald-400' : 
                              stock.whaleActivity > 40 ? 'bg-yellow-400' : 'bg-slate-500'
                            }`}
                            style={{ width: `${stock.whaleActivity}%` }}
                          ></div>
                        </div>
                        <span className="text-xs sm:text-sm text-slate-400">{stock.whaleActivity}%</span>
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        stock.sentiment === 'bullish' ? 'bg-emerald-500/20 text-emerald-300' :
                        stock.sentiment === 'bearish' ? 'bg-red-500/20 text-red-300' :
                        'bg-slate-500/20 text-slate-300'
                      }`}>
                        {stock.sentiment.toUpperCase()}
                      </span>
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
