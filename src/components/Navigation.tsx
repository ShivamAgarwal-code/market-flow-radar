import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, BarChart3, Activity, Bell, Search, Menu, X, PieChart, Shield, Newspaper, Target, BookOpen, DollarSign } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';
import LanguageSelector from './LanguageSelector';

const Navigation = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mainNavItems = [
    { path: '/live-feed', label: t('nav.liveFeed'), icon: Activity },
    { path: '/options-flow', label: t('nav.optionsFlow'), icon: TrendingUp },
    { path: '/screener', label: t('nav.screener'), icon: BarChart3 },
    { path: '/alerts', label: t('nav.alerts'), icon: Bell }
  ];

  const moreNavItems = [
    { path: '/portfolio', label: t('nav.portfolio'), icon: PieChart },
    { path: '/dark-pool', label: t('nav.darkPool'), icon: Shield },
    { path: '/whale-tracker', label: t('nav.whaleTracker'), icon: Activity },
    { path: '/analytics', label: t('nav.analytics'), icon: BarChart3 },
    { path: '/signals', label: t('nav.signals'), icon: Target },
    { path: '/news', label: t('nav.news'), icon: Newspaper },
    { path: '/education', label: t('nav.education'), icon: BookOpen },
    { path: '/risk', label: t('nav.risk'), icon: Shield },
    { path: '/backtesting', label: t('nav.backtesting'), icon: BarChart3 },
    { path: '/pricing', label: t('nav.pricing'), icon: DollarSign }
  ];

  const allNavItems = [...mainNavItems, ...moreNavItems];

  return (
    <nav className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg sm:text-xl font-bold text-blue-400 truncate">
              WhaleSignal
            </Link>
          </div>

          {/* Desktop Navigation - Main items */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4">
            <div className="flex items-center space-x-1">
              {mainNavItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap
                    ${location.pathname === path
                      ? 'bg-blue-500/20 text-blue-300'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                >
                  <Icon size={14} />
                  <span>{label}</span>
                </Link>
              ))}

              {/* More dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 whitespace-nowrap">
                  <Menu size={14} />
                  <span>{t('nav.more')}</span>
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {moreNavItems.map(({ path, label, icon: Icon }) => (
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

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            {/* Search */}
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder={t('nav.searchPlaceholder')}
                className="bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-40"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const searchTerm = (e.target as HTMLInputElement).value;
                    if (searchTerm.trim()) {
                      window.location.href = `/screener?search=${encodeURIComponent(searchTerm)}`;
                      (e.target as HTMLInputElement).value = '';
                    }
                  }
                }}
              />
            </div>

            {/* Market Status */}
            <div className="text-xs text-slate-400 hidden xl:block">
              <div>{t('nav.marketStatus')} <span className="text-emerald-400">{t('nav.open')}</span></div>
            </div>

            <LanguageSelector />

            <Link
              to="/pricing"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors"
            >
              {t('nav.register')}
            </Link>
          </div>

          {/* Mobile menu button and language selector */}
          <div className="flex items-center space-x-2 md:hidden">
            <LanguageSelector />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain">
              {/* Add touch-friendly spacing */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  placeholder={t('nav.searchPlaceholder')}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  // Add larger touch target
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      const searchTerm = (e.target as HTMLInputElement).value;
                      if (searchTerm.trim()) {
                        window.location.href = `/screener?search=${encodeURIComponent(searchTerm)}`;
                        setIsMobileMenuOpen(false);
                        (e.target as HTMLInputElement).value = '';
                      }
                    }
                  }}
                />
              </div>

              {/* Market Status for mobile */}
              <div className="text-xs text-slate-400 mb-4 text-center">
                {t('nav.marketStatus')} <span className="text-emerald-400">{t('nav.open')}</span>
              </div>

              {/* Update nav items with larger touch targets */}
              {allNavItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-4 rounded-md text-base font-medium transition-colors min-h-[48px]
            ${location.pathname === path
                      ? 'bg-blue-500/20 text-blue-300'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-700/50">
                <Link
                  to="/pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-center font-semibold transition-colors"
                >
                  {t('nav.register')} Now
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