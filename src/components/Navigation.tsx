
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, BarChart3, Activity, Bell, Search, Menu, X, PieChart, Shield, Newspaper, Target, BookOpen, DollarSign } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';
import LanguageSelector from './LanguageSelector';

const Navigation = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/live-feed', label: 'Live Feed', icon: Activity },
    { path: '/options-flow', label: 'Options Flow', icon: TrendingUp },
    { path: '/screener', label: 'Screener', icon: BarChart3 },
    { path: '/alerts', label: 'Alerts', icon: Bell },
    { path: '/portfolio', label: 'Portfolio', icon: PieChart },
    { path: '/dark-pool', label: 'Dark Pool', icon: Shield },
    { path: '/whale-tracker', label: 'Whale Tracker', icon: Activity },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/signals', label: 'Signals', icon: Target },
    { path: '/news', label: 'News', icon: Newspaper },
    { path: '/education', label: 'Education', icon: BookOpen },
    { path: '/risk', label: 'Risk', icon: Shield },
    { path: '/backtesting', label: 'Backtesting', icon: BarChart3 },
    { path: '/pricing', label: 'Pricing', icon: DollarSign }
  ];

  return (
    <nav className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-400 flex-shrink-0">
              WhaleSignal
            </Link>
            
            <div className="hidden lg:flex items-center space-x-4 ml-8">
              {navItems.slice(0, 8).map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-1 px-2 py-2 rounded-md text-xs font-medium transition-colors
                    ${location.pathname === path 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                >
                  <Icon size={14} />
                  <span>{label}</span>
                </Link>
              ))}
              
              {/* More dropdown for remaining items */}
              <div className="relative group">
                <button className="flex items-center space-x-1 px-2 py-2 rounded-md text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700/50">
                  <Menu size={14} />
                  <span>More</span>
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {navItems.slice(8).map(({ path, label, icon: Icon }) => (
                    <Link
                      key={path}
                      to={path}
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      <Icon size={14} />
                      <span>{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search..."
                className="bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-48"
              />
            </div>
            
            <div className="text-xs text-slate-400 hidden lg:block">
              <div>Market Status <span className="text-emerald-400">Open</span></div>
            </div>

            <LanguageSelector />
            
            <Link to="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-slate-700/50 max-h-96 overflow-y-auto">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors
                    ${location.pathname === path 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-slate-700/50">
                <Link
                  to="/pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-center font-semibold"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
