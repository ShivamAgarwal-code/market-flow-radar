
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
import TestimonialsSection from '../components/TestimonialsSection';
import VideoShowcaseSection from '../components/VideoShowcaseSection';
import Footer from '../components/Footer';
import RedirectionLogic from '../components/RedirectionLogic';
import ChatBox from '../components/ChatBox';

const Landing = () => {
  return (
    <div className="min-h-screen bg-animated relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 pointer-events-none"></div>
      
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10">
        <RedirectionLogic />
        <Navigation />
        <TickerTape />
        
        <main>
          <HeroSection />
          <LiveTradesSection />
          <VideoShowcaseSection />
          <StatsSection />
          <MarketHeatmap />
          <WhaleSpotlight />
          <FeaturesSection />
          <TrendingSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        
        <Footer />
        <ChatBox />
      </div>
    </div>
  );
};

export default Landing;
