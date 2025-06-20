
import React, { useState, useEffect } from 'react';
import { Crown, TrendingUp, Calendar, DollarSign } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

interface WhaleData {
  id: string;
  ticker: string;
  whaleId: string;
  totalValue: number;
  trades: number;
  winRate: number;
  avgReturn: number;
  lastTrade: Date;
  specialty: string;
}

const WhaleSpotlight = () => {
  const { t } = useTranslation();
  const [whales, setWhales] = useState<WhaleData[]>([]);
  const [selectedWhale, setSelectedWhale] = useState<string>('');

  const specialties = ['Tech Options', 'SPY Calls', 'Earnings Plays', 'Dark Pool', 'Swing Trades'];

  const generateWhale = (): WhaleData => {
    const tickers = ['AAPL', 'TSLA', 'NVDA', 'SPY', 'QQQ', 'MSFT'];
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      ticker: tickers[Math.floor(Math.random() * tickers.length)],
      whaleId: `W${Math.floor(Math.random() * 9999)}`,
      totalValue: Math.floor(Math.random() * 50000000) + 5000000,
      trades: Math.floor(Math.random() * 100) + 20,
      winRate: Math.random() * 30 + 60,
      avgReturn: Math.random() * 40 + 10,
      lastTrade: new Date(Date.now() - Math.random() * 86400000),
      specialty: specialties[Math.floor(Math.random() * specialties.length)],
    };
  };

  useEffect(() => {
    const initialWhales = Array.from({ length: 6 }, generateWhale);
    setWhales(initialWhales);
    setSelectedWhale(initialWhales[0].id);

    const interval = setInterval(() => {
      setWhales(prev => prev.map(whale => ({
        ...whale,
        totalValue: whale.totalValue + (Math.random() - 0.5) * 1000000,
        winRate: Math.max(50, Math.min(95, whale.winRate + (Math.random() - 0.5) * 2)),
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const selectedWhaleData = whales.find(w => w.id === selectedWhale);

  return (
    <section className="py-16 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <Crown className="w-8 h-8 text-yellow-400 mr-3" />
            {t('landing.whaleSpotlight.title') || 'Whale Spotlight'}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t('landing.whaleSpotlight.subtitle') || 'Track the most successful whale traders in real-time'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6">Top Whales</h3>
            <div className="space-y-3">
              {whales.map((whale, index) => (
                <div
                  key={whale.id}
                  onClick={() => setSelectedWhale(whale.id)}
                  className={`trading-card p-4 cursor-pointer transition-all duration-200 ${
                    selectedWhale === whale.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <div className="text-yellow-400 font-bold">#{index + 1}</div>
                        <div className="font-semibold text-slate-200">{whale.whaleId}</div>
                      </div>
                      <div className="text-sm text-slate-400">{whale.specialty}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-emerald-400">
                        {whale.winRate.toFixed(1)}%
                      </div>
                      <div className="text-xs text-slate-500">Win Rate</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            {selectedWhaleData && (
              <div className="trading-card p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center">
                      <Crown className="w-6 h-6 text-yellow-400 mr-2" />
                      Whale {selectedWhaleData.whaleId}
                    </h3>
                    <p className="text-slate-400">Specializes in {selectedWhaleData.specialty}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-400">
                      ${(selectedWhaleData.totalValue / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-sm text-slate-400">Total Value</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{selectedWhaleData.avgReturn.toFixed(1)}%</div>
                    <div className="text-sm text-slate-400">Avg Return</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <DollarSign className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{selectedWhaleData.trades}</div>
                    <div className="text-sm text-slate-400">Total Trades</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{selectedWhaleData.winRate.toFixed(1)}%</div>
                    <div className="text-sm text-slate-400">Win Rate</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">
                      {selectedWhaleData.lastTrade.toLocaleDateString()}
                    </div>
                    <div className="text-sm text-slate-400">Last Trade</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/20">
                  <h4 className="font-semibold text-white mb-2">Recent Activity</h4>
                  <p className="text-slate-300 text-sm">
                    This whale has been particularly active in {selectedWhaleData.ticker} options, 
                    with a focus on {selectedWhaleData.specialty.toLowerCase()}. Their recent performance 
                    shows strong conviction in their trading strategy.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhaleSpotlight;
