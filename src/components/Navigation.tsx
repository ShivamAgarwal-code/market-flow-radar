
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, BarChart3, Activity, Bell, Search, Menu, X } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';
import LanguageSelector from './LanguageSelector';

const Navigation = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/live-feed', label: t('nav.liveFeed'), icon: Activity },
    { path: '/options-flow', label: t('nav.optionsFlow'), icon: TrendingUp },
    { path: '/screener', label: t('nav.screener'), icon: BarChart3 },
    { path: '/alerts', label: t('nav.alerts'), icon: Bell },
  ];

  return (
    <nav className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-400 flex-shrink-0">
              WhaleSignal
            </Link>
            
            <div className="hidden md:flex items-center space-x-6 ml-8">
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

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder={t('nav.searchPlaceholder')}
                className="bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-48"
              />
            </div>
            
            <div className="text-xs text-slate-400 hidden lg:block">
              <div>{t('nav.marketStatus')} <span className="text-emerald-400">{t('nav.open')}</span></div>
            </div>

            <LanguageSelector />
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
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-slate-700/50">
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
              
              <div className="pt-4 pb-2 border-t border-slate-700/50 mt-4">
                <div className="relative px-3">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="text"
                    placeholder={t('nav.searchPlaceholder')}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                
                <div className="px-3 pt-2 text-xs text-slate-400">
                  <div>{t('nav.marketStatus')} <span className="text-emerald-400">{t('nav.open')}</span></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
