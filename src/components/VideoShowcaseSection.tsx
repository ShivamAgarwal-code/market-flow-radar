
import React, { useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

const VideoShowcaseSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const features = [
    {
      title: 'Real-Time Whale Detection',
      description: 'Our advanced algorithms detect institutional trades as they happen, giving you the edge you need to follow the smart money.',
      highlight: '$50M+ trades detected daily'
    },
    {
      title: 'Options Flow Analysis',
      description: 'Track unusual options activity across all major exchanges. See exactly where the big players are placing their bets.',
      highlight: '1M+ options contracts analyzed'
    },
    {
      title: 'Dark Pool Intelligence',
      description: 'Uncover hidden institutional activity in dark pools. Know what the institutions are trading before it hits the public markets.',
      highlight: '200+ dark pool venues monitored'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            See Whale Signal in Action
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Watch how professional traders use our platform to track institutional money movements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative">
            <div className="relative bg-slate-800 rounded-2xl overflow-hidden trading-card">
              {/* Simulated video player */}
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 relative">
                {/* Video overlay effects */}
                <div className="absolute inset-0 bg-black/40"></div>
                
                {/* Simulated trading interface */}
                <div className="absolute inset-4 text-white text-xs">
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-green-500/20 px-2 py-1 rounded text-green-300">
                      🐋 WHALE ALERT: $15.2M AAPL CALL SWEEP
                    </div>
                    <div className="text-slate-300">LIVE</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-slate-800/80 p-2 rounded">
                      <div className="text-blue-300">AAPL</div>
                      <div className="text-white font-bold">$185.50</div>
                      <div className="text-green-400">+2.35%</div>
                    </div>
                    <div className="bg-slate-800/80 p-2 rounded">
                      <div className="text-blue-300">TSLA</div>
                      <div className="text-white font-bold">$248.20</div>
                      <div className="text-red-400">-1.24%</div>
                    </div>
                    <div className="bg-slate-800/80 p-2 rounded">
                      <div className="text-blue-300">NVDA</div>
                      <div className="text-white font-bold">$875.00</div>
                      <div className="text-green-400">+3.78%</div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/80 p-2 rounded">
                    <div className="text-slate-300 mb-2">Recent Whale Activity</div>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>AAPL $185C 12/20</span>
                        <span className="text-green-400">$15.2M</span>
                      </div>
                      <div className="flex justify-between">
                        <span>SPY $480P 12/15</span>
                        <span className="text-red-400">$8.7M</span>
                      </div>
                      <div className="flex justify-between">
                        <span>QQQ $395C 12/22</span>
                        <span className="text-green-400">$12.1M</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Play/Pause button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-blue-600/80 hover:bg-blue-600 text-white p-4 rounded-full transition-all hover:scale-110"
                  >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                  </button>
                </div>
              </div>

              {/* Video controls */}
              <div className="bg-slate-800 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <Volume2 className="w-5 h-5 text-white" />
                    <div className="text-sm text-slate-400">2:34 / 5:12</div>
                  </div>
                  <div className="text-sm text-slate-400">HD 1080p</div>
                </div>
                <div className="mt-2 bg-slate-700 h-1 rounded-full">
                  <div className="bg-blue-500 h-1 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 mb-3">
                      {feature.description}
                    </p>
                    <div className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                      {feature.highlight}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 glow-effect">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
