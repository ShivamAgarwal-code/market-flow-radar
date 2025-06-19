
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import TickerTape from '../components/TickerTape';
import RedirectionLogic from '../components/RedirectionLogic';
import { TrendingUp, TrendingDown, Filter } from 'lucide-react';
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
}

const OptionsFlow = () => {
  const { t } = useTranslation();
  const [flows, setFlows] = useState<OptionsFlow[]>([]);
  const [filter, setFilter] = useState<'all' | 'calls' | 'puts'>('all');

  const generateFlow = (): OptionsFlow => {
    const tickers = ['AAPL', 'TSLA', 'NVDA', 'SPY', 'QQQ', 'MSFT', 'AMZN', 'GOOGL', 'META'];
    const type = Math.random() > 0.6 ? 'call' : 'put';
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      ticker: tickers[Math.floor(Math.random() * tickers.length)],
      type,
      strike: Math.floor(Math.random() * 500) + 100,
      expiry: new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      size: Math.floor(Math.random() * 2000) + 100,
      premium: Math.random() * 500000 + 10000,
      iv: Math.random() * 100 + 20,
      sentiment: type === 'call' ? 'bullish' : 'bearish',
      timestamp: new Date().toLocaleTimeString(),
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

  const filteredFlows = flows.filter(flow => 
    filter === 'all' || flow.type === filter.slice(0, -1)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      <TickerTape />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 sm:mb-8 space-y-4 lg:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">
              {t('optionsFlow.title')}
            </h1>
            <p className="text-sm sm:text-base text-slate-400">
              {t('optionsFlow.subtitle')}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter size={16} className="text-slate-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <option value="all">{t('optionsFlow.allOptions')}</option>
                <option value="calls">{t('optionsFlow.callsOnly')}</option>
                <option value="puts">{t('optionsFlow.putsOnly')}</option>
              </select>
            </div>
          </div>
        </div>

        <div className="trading-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">{t('optionsFlow.ticker')}</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">{t('optionsFlow.type')}</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">{t('optionsFlow.strike')}</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">{t('optionsFlow.expiry')}</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">{t('optionsFlow.size')}</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">{t('optionsFlow.premium')}</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">IV</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-slate-300 font-semibold text-sm sm:text-base">{t('optionsFlow.time')}</th>
                </tr>
              </thead>
              <tbody>
                {filteredFlows.map((flow) => (
                  <tr key={flow.id} className="data-row border-b border-slate-700/30">
                    <td className="py-2 sm:py-3 px-3 sm:px-4">
                      <div className="flex items-center space-x-2">
                        <span className="ticker-badge text-xs sm:text-sm">{flow.ticker}</span>
                        {flow.sentiment === 'bullish' ? 
                          <TrendingUp size={12} className="text-emerald-400 sm:w-4 sm:h-4" /> :
                          <TrendingDown size={12} className="text-red-400 sm:w-4 sm:h-4" />
                        }
                      </div>
                    </td>
                    <td className="py-2 sm:py-3 px-3 sm:px-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        flow.type === 'call' 
                          ? 'bg-emerald-500/20 text-emerald-300' 
                          : 'bg-red-500/20 text-red-300'
                      }`}>
                        {flow.type.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-2 sm:py-3 px-3 sm:px-4 text-slate-300 text-sm">${flow.strike}</td>
                    <td className="py-2 sm:py-3 px-3 sm:px-4 text-slate-400 text-xs sm:text-sm">{flow.expiry}</td>
                    <td className="py-2 sm:py-3 px-3 sm:px-4 text-slate-300 text-sm">{flow.size.toLocaleString()}</td>
                    <td className="py-2 sm:py-3 px-3 sm:px-4 text-slate-300 text-sm">${flow.premium.toLocaleString()}</td>
                    <td className="py-2 sm:py-3 px-3 sm:px-4 text-slate-300 text-sm">{flow.iv.toFixed(1)}%</td>
                    <td className="py-2 sm:py-3 px-3 sm:px-4 text-slate-400 text-xs sm:text-sm">{flow.timestamp}</td>
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

export default OptionsFlow;
