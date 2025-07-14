
import React from 'react';
import Navigation from '../components/Navigation';
import TickerTape from '../components/TickerTape';
import WhaleActivityFeed from '../components/WhaleActivityFeed';
import MarketOverview from '../components/MarketOverview';
import LiveNewsSection from '../components/LiveNewsSection';
import TopMoversWidget from '../components/TopMoversWidget';
import MarketSentimentWidget from '../components/MarketSentimentWidget';
import RedirectionLogic from '../components/RedirectionLogic';
import RealChatBox from '../components/RealChatBox';
import { useTranslation } from '../contexts/TranslationContext';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      <TickerTape />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 fade-in-up">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">
            {t('index.title')}
          </h1>
          <p className="text-slate-400">
            {t('index.subtitle')} {new Date().toLocaleString()}
          </p>
        </div>

        <MarketOverview />
        
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <WhaleActivityFeed />
            <LiveNewsSection />
          </div>
          
          <div className="space-y-6">
            <TopMoversWidget />
            <MarketSentimentWidget />
          </div>
        </div>
      </main>
      
      <RealChatBox />
    </div>
  );
};

export default Index;
