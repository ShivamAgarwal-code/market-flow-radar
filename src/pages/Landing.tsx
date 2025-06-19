
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, Activity, Bell, Zap, Target, Eye, Shield } from 'lucide-react';
import TickerTape from '../components/TickerTape';
import RedirectionLogic from '../components/RedirectionLogic';

const Landing = () => {
  const features = [
    {
      icon: Activity,
      title: "Live Whale Activity",
      description: "Real-time tracking of large institutional trades and unusual options activity"
    },
    {
      icon: TrendingUp,
      title: "Options Flow",
      description: "Monitor massive options trades as they happen with advanced filtering"
    },
    {
      icon: BarChart3,
      title: "Smart Screener",
      description: "Identify stocks with unusual volume, price movements, and whale interest"
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Get notified immediately when whales make significant moves"
    }
  ];

  const stats = [
    { label: "Daily Volume Tracked", value: "$2.8B+" },
    { label: "Whale Trades Today", value: "1,247" },
    { label: "Active Institutions", value: "892" },
    { label: "Success Rate", value: "94.2%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      
      {/* Header */}
      <header className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-blue-400">
              WhaleSignal
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/live-feed" className="text-slate-300 hover:text-white transition-colors">Live Feed</Link>
              <Link to="/options-flow" className="text-slate-300 hover:text-white transition-colors">Options Flow</Link>
              <Link to="/screener" className="text-slate-300 hover:text-white transition-colors">Screener</Link>
              <Link to="/alerts" className="text-slate-300 hover:text-white transition-colors">Alerts</Link>
            </nav>
          </div>
        </div>
      </header>

      <TickerTape />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap size={16} className="animate-pulse" />
              <span>Live Market Intelligence</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight">
              Follow the
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Whales</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Track institutional money flows, unusual options activity, and smart money movements 
              in real-time. Never miss a whale trade again.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/live-feed" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 glow-effect"
              >
                Start Tracking Whales
              </Link>
              <Link 
                to="/options-flow" 
                className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View Options Flow
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">
              Professional Trading Intelligence
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Get the same market intelligence that institutional traders use to make million-dollar decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="trading-card p-6 text-center hover:transform hover:scale-105 transition-all duration-200">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Preview Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">
              See Whales in Action
            </h2>
            <p className="text-xl text-slate-400">
              Live preview of what's happening in the markets right now
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Whale Activity */}
            <div className="lg:col-span-2 trading-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-100">Recent Whale Activity</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-slate-400">LIVE</span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { ticker: 'NVDA', type: 'CALL', size: '2.1M', premium: '$890K', time: '11:23 AM' },
                  { ticker: 'TSLA', type: 'PUT', size: '1.8M', premium: '$743K', time: '11:21 AM' },
                  { ticker: 'AAPL', type: 'CALL', size: '3.2M', premium: '$1.2M', time: '11:19 AM' }
                ].map((trade, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="ticker-badge">{trade.ticker}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        trade.type === 'CALL' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                      }`}>
                        {trade.type}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-slate-200">{trade.size}</div>
                      <div className="text-xs text-slate-400">{trade.premium}</div>
                    </div>
                    <div className="text-xs text-slate-500">{trade.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Movers */}
            <div className="trading-card p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-4">Top Movers</h3>
              <div className="space-y-3">
                {[
                  { ticker: 'NVDA', change: 8.45, price: '$725.43' },
                  { ticker: 'TSLA', change: -3.21, price: '$248.87' },
                  { ticker: 'AAPL', change: 2.15, price: '$189.25' },
                  { ticker: 'META', change: 4.67, price: '$378.91' }
                ].map((stock, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="ticker-badge">{stock.ticker}</span>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-slate-200">{stock.price}</div>
                      <div className={`text-xs ${stock.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {stock.change >= 0 ? '+' : ''}{stock.change}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="trading-card p-12">
            <Target size={48} className="text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-100 mb-4">
              Ready to Trade Like the Pros?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Join thousands of traders who use WhaleSignal to track institutional money flow
            </p>
            <Link 
              to="/live-feed" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 glow-effect inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800/50 border-t border-slate-700/50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">WhaleSignal</div>
              <p className="text-slate-400 text-sm">
                Professional market intelligence for serious traders.
              </p>
            </div>
            <div>
              <h4 className="text-slate-200 font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <Link to="/live-feed" className="block text-slate-400 hover:text-white text-sm transition-colors">Live Feed</Link>
                <Link to="/options-flow" className="block text-slate-400 hover:text-white text-sm transition-colors">Options Flow</Link>
                <Link to="/screener" className="block text-slate-400 hover:text-white text-sm transition-colors">Screener</Link>
                <Link to="/alerts" className="block text-slate-400 hover:text-white text-sm transition-colors">Alerts</Link>
              </div>
            </div>
            <div>
              <h4 className="text-slate-200 font-semibold mb-4">Features</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <div>Real-time Data</div>
                <div>Whale Tracking</div>
                <div>Options Flow</div>
                <div>Smart Alerts</div>
              </div>
            </div>
            <div>
              <h4 className="text-slate-200 font-semibold mb-4">Security</h4>
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Shield size={16} />
                <span>Enterprise Grade Security</span>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center text-slate-500 text-sm">
            © 2024 WhaleSignal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
