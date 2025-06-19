
import React from 'react';
import { Eye, Zap, TrendingUp, Shield, Clock, Target } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Eye,
      title: t('features.liveOptionsFlow'),
      description: t('features.liveOptionsFlowDesc'),
      color: 'blue'
    },
    {
      icon: Zap,
      title: t('features.instantAlerts'),
      description: t('features.instantAlertsDesc'),
      color: 'yellow'
    },
    {
      icon: TrendingUp,
      title: t('features.marketScreener'),
      description: t('features.marketScreenerDesc'),
      color: 'emerald'
    },
    {
      icon: Shield,
      title: t('features.darkPoolTracking'),
      description: t('features.darkPoolTrackingDesc'),
      color: 'purple'
    },
    {
      icon: Clock,
      title: t('features.realTimeData'),
      description: t('features.realTimeDataDesc'),
      color: 'orange'
    },
    {
      icon: Target,
      title: t('features.smartAnalysis'),
      description: t('features.smartAnalysisDesc'),
      color: 'pink'
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="trading-card p-6 sm:p-8 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`w-12 h-12 bg-${feature.color}-500/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
