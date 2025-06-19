
import React from 'react';
import { TrendingUp, Activity, BarChart3, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 hero-gradient bg-clip-text text-transparent">
            Whale Signal
          </h1>
          <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Track institutional money movements, options flow, and market intelligence in real-time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 glow-effect">
              Start Tracking
            </button>
            <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { icon: TrendingUp, label: 'Options Flow', value: '$2.8B' },
            { icon: Activity, label: 'Live Trades', value: '147K' },
            { icon: BarChart3, label: 'Dark Pool', value: '$892M' },
            { icon: Zap, label: 'Alerts', value: '2,431' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 trading-card floating-animation">
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
