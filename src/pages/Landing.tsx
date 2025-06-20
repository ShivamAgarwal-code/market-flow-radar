
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
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Shield, Zap, Target } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-animated relative overflow-hidden">
      {/* Enhanced background with multiple gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-purple-900/95 pointer-events-none"></div>
      
      {/* More dynamic floating elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/6 right-1/6 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/6 w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10">
        <RedirectionLogic />
        <Navigation />
        <TickerTape />
        
        {/* Enhanced Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center bg-blue-500/20 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm text-blue-300 font-semibold">Trusted by 10,000+ Professional Traders</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 hero-gradient bg-clip-text text-transparent">
                Track Every<br />Whale Move
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
                <strong>$2.5B+ tracked daily.</strong> Join elite traders who follow institutional money movements and dark pool activity to maximize profits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 glow-effect flex items-center justify-center">
                  Start Tracking Whales
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/live-feed" className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105">
                  View Live Demo
                </Link>
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center justify-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-400" />
                  <span>Bank-Grade Security</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                  <span>0.2ms Latency</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-blue-400" />
                  <span>99.9% Accuracy</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
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
          
          {/* Urgency Section */}
          <section className="py-16 bg-gradient-to-r from-red-900/20 to-orange-900/20">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                🚨 Don't Miss Another Whale Move
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Every minute you wait, institutional traders are making millions. Join now and get your first whale alert within seconds.
              </p>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full font-semibold">
                  ✅ 2,431 alerts sent today
                </div>
              </div>
              <Link to="/pricing" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 inline-flex items-center">
                Get Instant Access Now
                <TrendingUp className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </section>
          
          <CTASection />
        </main>
        
        <Footer />
        <ChatBox />
      </div>
    </div>
  );
};

export default Landing;
