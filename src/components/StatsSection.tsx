
import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '$847B', label: t('stats.totalVolume'), change: '+12.4%' },
    { value: '2.3M', label: t('stats.tradesAnalyzed'), change: '+8.7%' },
    { value: '98.7%', label: t('stats.uptimeGuarantee'), change: '+0.2%' },
    { value: '15ms', label: t('stats.averageLatency'), change: '-5.1%' }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-slate-400 mb-1">{stat.label}</div>
              <div className={`text-xs sm:text-sm ${
                stat.change.startsWith('+') ? 'text-emerald-400' : 
                stat.change.startsWith('-') && stat.label.includes('Latency') ? 'text-emerald-400' : 'text-red-400'
              }`}>
                {stat.change} {t('stats.thisMonth')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
