
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import TickerTape from '../components/TickerTape';
import RedirectionLogic from '../components/RedirectionLogic';
import { TrendingUp, TrendingDown, Filter, Search, Calendar, DollarSign, Activity, Settings, Download, RefreshCw, AlertCircle } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

interface OptionsFlow {
  id: string;
  ticker: string;
  type: 'call' | 'put';
  strike: number;
  expiry: string;
  size: number;
  premium: number;
  iv: number;
  sentiment: 'bullish' | 'bearish';
  timestamp: string;
  openInterest: number;
  volume: number;
  bid: number;
  ask: number;
  delta: number;
  gamma: number;
  theta: number;
  vega: number;
  isUnusual: boolean;
}

const OptionsFlow = () => {
  const { t } = useTranslation();
  const [flows, setFlows] = useState<OptionsFlow[]>([]);
  const [filter, setFilter] = useState<'all' | 'calls' | 'puts' | 'unusual'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [minPremium, setMinPremium] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'timestamp' | 'premium' | 'volume' | 'iv'>('timestamp');
  const [isAutoRefresh, setIsAutoRefresh] = useState(true);

  const generateFlow = (): OptionsFlow => {
    const tickers = ['AAPL', 'TSLA', 'NVDA', 'SPY', 'QQQ', 'MSFT', 'AMZN', 'GOOGL', 'META', 'AMD', 'CRM', 'NFLX'];
    const type = Math.random() > 0.6 ? 'call' : 'put';
    const premium = Math.random() * 1000000 + 5000;
    const volume = Math.floor(Math.random() * 10000) + 100;
    const openInterest = Math.floor(Math.random() * 50000) + 1000;

    return {
      id: Math.random().toString(36).substr(2, 9),
      ticker: tickers[Math.floor(Math.random() * tickers.length)],
      type,
      strike: Math.floor(Math.random() * 500) + 100,
      expiry: new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      size: Math.floor(Math.random() * 5000) + 100,
      premium,
      iv: Math.random() * 200 + 20,
      sentiment: type === 'call' ? 'bullish' : 'bearish',
      timestamp: new Date().toLocaleTimeString(),
      openInterest,
      volume,
      bid: Math.random() * 10 + 0.5,
      ask: Math.random() * 10 + 0.6,
      delta: Math.random() * (type === 'call' ? 1 : -1),
      gamma: Math.random() * 0.1,
      theta: -Math.random() * 0.5,
      vega: Math.random() * 2,
      isUnusual: premium > 500000 || volume > 5000,
    };
  };

  useEffect(() => {
    const initialFlows = Array.from({ length: 20 }, generateFlow);
    setFlows(initialFlows);

    const interval = setInterval(() => {
      setFlows(prev => [generateFlow(), ...prev.slice(0, 29)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const filteredFlows = flows
    .filter(flow => {
      const matchesSearch = flow.ticker.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter === 'all' ||
        (filter === 'unusual' && flow.isUnusual) ||
        flow.type === filter.slice(0, -1);
      const matchesPremium = flow.premium >= minPremium;

      return matchesSearch && matchesFilter && matchesPremium;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'premium':
          return b.premium - a.premium;
        case 'volume':
          return b.volume - a.volume;
        case 'iv':
          return b.iv - a.iv;
        default:
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      <TickerTape />

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Advanced Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 space-y-4 lg:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2 flex items-center">
              <Activity className="mr-3 text-blue-400" />
              {t('optionsFlow.title')}
            </h1>
            <p className="text-sm sm:text-base text-slate-400">
              {t('optionsFlow.subtitle')} • <span className="text-green-400">{flows.length} active flows</span>
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsAutoRefresh(!isAutoRefresh)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isAutoRefresh ? 'bg-green-500/20 text-green-300' : 'bg-slate-700 text-slate-300'
                }`}
            >
              <RefreshCw size={14} className={isAutoRefresh ? 'animate-spin' : ''} />
              <span>Auto Refresh</span>
            </button>

            <button className="flex items-center space-x-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm font-medium transition-colors">
              <Download size={14} />
              <span>Export</span>
            </button>

            <button className="flex items-center space-x-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm font-medium transition-colors">
              <Settings size={14} />
              <span>Settings</span>
            </button>
          </div>
        </div>

        {/* Advanced Filters Bar */}
        <div className="bg-slate-800/50 rounded-xl p-3 sm:p-4 mb-6 border border-slate-700/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
            {/* Search - full width on mobile */}
            <div className="relative sm:col-span-2 lg:col-span-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search tickers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            {/* Filter Type */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <option value="all">All Options</option>
                <option value="calls">Calls Only</option>
                <option value="puts">Puts Only</option>
                <option value="unusual">🔥 Unusual Only</option>
              </select>
            </div>

            {/* Min Premium */}
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="number"
                placeholder="Min Premium"
                value={minPremium}
                onChange={(e) => setMinPremium(Number(e.target.value))}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <option value="timestamp">🕒 Latest</option>
              <option value="premium">💰 Premium</option>
              <option value="volume">📊 Volume</option>
              <option value="iv">📈 IV</option>
            </select>

            {/* Quick Filters */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 sm:col-span-2 lg:col-span-1">
              <button
                onClick={() => setMinPremium(100000)}
                className="px-3 py-2 bg-yellow-500/20 text-yellow-300 rounded-lg text-xs font-medium hover:bg-yellow-500/30 transition-colors"
              >
                $100K+
              </button>
              <button
                onClick={() => setMinPremium(500000)}
                className="px-3 py-2 bg-red-500/20 text-red-300 rounded-lg text-xs font-medium hover:bg-red-500/30 transition-colors"
              >
                $500K+
              </button>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-center lg:justify-start">
              <span className="text-sm text-slate-400">
                {filteredFlows.length} results
              </span>
            </div>
          </div>
        </div>

        {/* Advanced Options Flow Table */}
        <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1400px]">
              <thead>
                <tr className="bg-slate-800/50 border-b border-slate-700">
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold text-sm">Symbol</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold text-sm">Type</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold text-sm">Strike</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold text-sm">Expiry</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold text-sm">Volume</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold text-sm">OI</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold text-sm">Premium</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold text-sm">Bid/Ask</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold text-sm">IV</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold text-sm">Greeks</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold text-sm">Time</th>
                </tr>
              </thead>
              <tbody>
                {filteredFlows.map((flow, index) => (
                  <tr
                    key={flow.id}
                    className={`border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors ${flow.isUnusual ? 'bg-gradient-to-r from-yellow-500/5 to-transparent' : ''
                      }`}
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-slate-100">{flow.ticker}</span>
                        {flow.isUnusual && <AlertCircle size={14} className="text-yellow-400" />}
                        {flow.sentiment === 'bullish' ?
                          <TrendingUp size={14} className="text-emerald-400" /> :
                          <TrendingDown size={14} className="text-red-400" />
                        }
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${flow.type === 'call'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                        }`}>
                        {flow.type.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-slate-200 font-medium">${flow.strike.toFixed(2)}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-slate-400 text-sm">{flow.expiry}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-col">
                        <span className="text-slate-200 font-medium">{flow.volume.toLocaleString()}</span>
                        <span className="text-xs text-slate-500">vol</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-col">
                        <span className="text-slate-200 font-medium">{flow.openInterest.toLocaleString()}</span>
                        <span className="text-xs text-slate-500">oi</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-col">
                        <span className="text-slate-100 font-bold">${(flow.premium / 1000).toFixed(0)}K</span>
                        <span className="text-xs text-slate-500">${flow.size.toLocaleString()} size</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-col">
                        <span className="text-slate-300 text-sm">${flow.bid.toFixed(2)} / ${flow.ask.toFixed(2)}</span>
                        <span className="text-xs text-slate-500">bid/ask</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className={`text-sm font-medium ${flow.iv > 100 ? 'text-red-400' : flow.iv > 50 ? 'text-yellow-400' : 'text-emerald-400'
                        }`}>
                        {flow.iv.toFixed(1)}%
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        <div className="text-slate-400">Δ: <span className="text-slate-300">{flow.delta.toFixed(3)}</span></div>
                        <div className="text-slate-400">Γ: <span className="text-slate-300">{flow.gamma.toFixed(3)}</span></div>
                        <div className="text-slate-400">Θ: <span className="text-slate-300">{flow.theta.toFixed(3)}</span></div>
                        <div className="text-slate-400">ν: <span className="text-slate-300">{flow.vega.toFixed(2)}</span></div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-slate-400 text-sm">{flow.timestamp}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredFlows.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="mx-auto w-12 h-12 text-slate-500 mb-4" />
              <p className="text-slate-400">No options flow matches your current filters</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default OptionsFlow;
