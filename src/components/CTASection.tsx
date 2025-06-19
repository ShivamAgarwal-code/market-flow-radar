
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="trading-card p-8 sm:p-12 hero-gradient">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg sm:text-xl text-slate-200 mb-6 sm:mb-8">
            {t('cta.subtitle')}
          </p>
          
          <div className="flex items-center justify-center gap-1 mb-6 sm:mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-400 fill-current" />
            ))}
            <span className="text-sm sm:text-base text-slate-300 ml-2">4.9/5 {t('cta.rating')}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all hover:scale-105 flex items-center justify-center">
              {t('cta.getStarted')}
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
            </button>
            <button className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all hover:scale-105 hover:border-white/50">
              {t('cta.viewPricing')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
