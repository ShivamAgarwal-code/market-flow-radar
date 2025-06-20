
import React from 'react';
import Navigation from '../components/Navigation';
import TickerTape from '../components/TickerTape';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import LiveTradesSection from '../components/LiveTradesSection';
import MarketHeatmap from '../components/MarketHeatmap';
import WhaleSpotlight from '../components/WhaleSpotlight';
import TrendingSection from '../components/TrendingSection';
import RedirectionLogic from '../components/RedirectionLogic';
import ChatBox from '../components/ChatBox';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      <TickerTape />
      
      <main>
        <HeroSection />
        <LiveTradesSection />
        <StatsSection />
        <MarketHeatmap />
        <WhaleSpotlight />
        <FeaturesSection />
        <TrendingSection />
        <CTASection />
      </main>
      
      <ChatBox />
    </div>
  );
};

export default Landing;
