
import React from 'react';
import { Eye, Zap, TrendingUp, Shield, Clock, Target } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Eye,
      title: 'Live Options Flow',
      description: 'Track unusual options activity and whale movements in real-time',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Instant Alerts',
      description: 'Get notified of significant market movements and whale activity',
      color: 'yellow'
    },
    {
      icon: TrendingUp,
      title: 'Market Screener',
      description: 'Filter and discover opportunities across thousands of stocks',
      color: 'emerald'
    },
    {
      icon: Shield,
      title: 'Dark Pool Tracking',
      description: 'Monitor institutional block trades and hidden liquidity',
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Real-Time Data',
      description: 'Access live market data with minimal latency',
      color: 'orange'
    },
    {
      icon: Target,
      title: 'Smart Analysis',
      description: 'AI-powered insights and pattern recognition',
      color: 'pink'
    }
  ];

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional Trading Intelligence
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Get the same tools institutional traders use to track market movements and identify opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="trading-card p-8 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`w-12 h-12 bg-${feature.color}-500/20 rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
