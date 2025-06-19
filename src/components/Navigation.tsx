
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, BarChart3, Activity, Bell, Search } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Live Feed', icon: Activity },
    { path: '/options-flow', label: 'Options Flow', icon: TrendingUp },
    { path: '/screener', label: 'Screener', icon: BarChart3 },
    { path: '/alerts', label: 'Alerts', icon: Bell },
  ];

  return (
    <nav className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-blue-400">
              WhaleSignal
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${location.pathname === path 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search tickers..."
                className="bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
            
            <div className="text-xs text-slate-400">
              <div>Market: <span className="text-emerald-400">OPEN</span></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
