
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="trading-card p-12 hero-gradient">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Trade Like a Whale?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Join thousands of traders who rely on Whale Signal for market intelligence
          </p>
          
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="text-slate-300 ml-2">4.9/5 from 2,847 traders</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:border-white/50">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
