
import React from 'react';
import { TrendingUp, Activity, BarChart3, Zap } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-12 sm:py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 hero-gradient bg-clip-text text-transparent">
            {t('landing.hero.title')}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            {t('landing.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all hover:scale-105 glow-effect">
              {t('landing.hero.startTracking')}
            </button>
            <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all hover:scale-105">
              {t('landing.hero.watchDemo')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 px-4">
          {[
            { icon: TrendingUp, label: t('landing.hero.optionsFlow'), value: '$2.8B' },
            { icon: Activity, label: t('landing.hero.liveTrades'), value: '147K' },
            { icon: BarChart3, label: t('landing.hero.darkPool'), value: '$892M' },
            { icon: Zap, label: t('landing.hero.alerts'), value: '2,431' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 trading-card floating-animation">
              <stat.icon className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400 mx-auto mb-2 sm:mb-3" />
              <div className="text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
