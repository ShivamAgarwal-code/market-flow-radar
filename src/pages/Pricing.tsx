
import React from 'react';
import Navigation from '../components/Navigation';
import { Check, Star, Zap } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('pricing.basic'),
      price: '$29',
      period: t('pricing.month'),
      features: [
        t('pricing.liveOptionsFlow'),
        t('pricing.basicAlerts'),
        t('pricing.marketScreener'),
        t('pricing.emailSupport')
      ]
    },
    {
      name: t('pricing.pro'),
      price: '$99',
      period: t('pricing.month'),
      popular: true,
      features: [
        t('pricing.everythingInBasic'),
        t('pricing.darkPoolTracking'),
        t('pricing.whaleAlerts'),
        t('pricing.advancedAnalytics'),
        t('pricing.prioritySupport')
      ]
    },
    {
      name: t('pricing.enterprise'),
      price: '$299',
      period: t('pricing.month'),
      features: [
        t('pricing.everythingInPro'),
        t('pricing.apiAccess'),
        t('pricing.customAlerts'),
        t('pricing.dedicatedSupport'),
        t('pricing.customIntegration')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">{t('pricing.title')}</h1>
          <p className="text-xl text-slate-400">{t('pricing.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`trading-card p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {t('pricing.mostPopular')}
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-1">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white'
              }`}>
                {t('pricing.getStarted')}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pricing;
