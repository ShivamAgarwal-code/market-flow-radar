
import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '$847B', label: 'Total Volume Tracked', change: '+12.4%' },
    { value: '2.3M', label: 'Trades Analyzed', change: '+8.7%' },
    { value: '98.7%', label: 'Uptime Guarantee', change: '+0.2%' },
    { value: '15ms', label: 'Average Latency', change: '-5.1%' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 mb-1">{stat.label}</div>
              <div className={`text-sm ${
                stat.change.startsWith('+') ? 'text-emerald-400' : 
                stat.change.startsWith('-') && stat.label.includes('Latency') ? 'text-emerald-400' : 'text-red-400'
              }`}>
                {stat.change} this month
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
