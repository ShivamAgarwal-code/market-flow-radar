import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import TickerTape from '../components/TickerTape';
import RedirectionLogic from '../components/RedirectionLogic';
import { Bell, Clock, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Filter } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

interface Alert {
  id: string;
  type: 'whale' | 'volume' | 'price' | 'news';
  ticker: string;
  title: string;
  description: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
  isRead: boolean;
  value?: string;
}

const Alerts = () => {
  const { t } = useTranslation();
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [filter, setFilter] = useState<'all' | 'unread' | 'whale' | 'high'>('all');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const generateAlert = (): Alert => {
    const tickers = ['AAPL', 'TSLA', 'NVDA', 'SPY', 'QQQ', 'MSFT', 'AMZN', 'GOOGL', 'META'];
    const types = ['whale', 'volume', 'price', 'news'] as const;
    const severities = ['low', 'medium', 'high'] as const;
    
    const type = types[Math.floor(Math.random() * types.length)];
    const ticker = tickers[Math.floor(Math.random() * tickers.length)];
    const severity = severities[Math.floor(Math.random() * severities.length)];
    
    const alertTemplates = {
      whale: {
        title: `Large ${ticker} Options Trade Detected`,
        description: `Unusual options activity in ${ticker} with premium over $500K`
      },
      volume: {
        title: `${ticker} Volume Spike`,
        description: `${ticker} trading volume 300% above average`
      },
      price: {
        title: `${ticker} Price Alert`,
        description: `${ticker} moved ${Math.random() > 0.5 ? 'up' : 'down'} ${(Math.random() * 10 + 2).toFixed(1)}%`
      },
      news: {
        title: `${ticker} Breaking News`,
        description: `Market-moving news detected for ${ticker}`
      }
    };
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      type,
      ticker,
      title: alertTemplates[type].title,
      description: alertTemplates[type].description,
      timestamp: new Date(Date.now() - Math.random() * 3600000).toLocaleTimeString(),
      severity,
      isRead: Math.random() > 0.7,
      value: type === 'whale' ? `$${(Math.random() * 2000 + 500).toFixed(0)}K` : undefined
    };
  };

  useEffect(() => {
    const initialAlerts = Array.from({ length: 25 }, generateAlert);
    setAlerts(initialAlerts);

    const interval = setInterval(() => {
      setAlerts(prev => [generateAlert(), ...prev.slice(0, 24)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const filteredAlerts = alerts.filter(alert => {
    switch (filter) {
      case 'unread':
        return !alert.isRead;
      case 'whale':
        return alert.type === 'whale';
      case 'high':
        return alert.severity === 'high';
      default:
        return true;
    }
  });

  const markAsRead = (id: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id ? { ...alert, isRead: true } : alert
    ));
  };

  const markAllAsRead = () => {
    setAlerts(prev => prev.map(alert => ({ ...alert, isRead: true })));
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'whale':
        return TrendingUp;
      case 'volume':
        return TrendingDown;
      case 'price':
        return AlertTriangle;
      case 'news':
        return Bell;
      default:
        return Bell;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-red-400 bg-red-500/20';
      case 'medium':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'low':
        return 'text-blue-400 bg-blue-500/20';
      default:
        return 'text-slate-400 bg-slate-500/20';
    }
  };

  const unreadCount = alerts.filter(alert => !alert.isRead).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      <TickerTape />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Mobile-optimized Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">
              {t('alerts.title')}
            </h1>
            <p className="text-sm sm:text-base text-slate-400">
              {t('alerts.subtitle')}
            </p>
          </div>
          
          {/* Mobile-friendly action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                className="flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base"
              >
                <CheckCircle size={16} />
                <span>{t('alerts.markAllRead')}</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile-optimized Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <div className="trading-card p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-2 sm:mb-0">
                <div className="text-lg sm:text-2xl font-bold text-slate-100">{unreadCount}</div>
                <div className="text-slate-400 text-xs sm:text-sm">{t('alerts.unread')}</div>
              </div>
              <Bell className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6 self-start sm:self-center" />
            </div>
          </div>
          
          <div className="trading-card p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-2 sm:mb-0">
                <div className="text-lg sm:text-2xl font-bold text-slate-100">
                  {alerts.filter(a => a.type === 'whale').length}
                </div>
                <div className="text-slate-400 text-xs sm:text-sm">{t('alerts.whale')}</div>
              </div>
              <TrendingUp className="text-emerald-400 w-5 h-5 sm:w-6 sm:h-6 self-start sm:self-center" />
            </div>
          </div>
          
          <div className="trading-card p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-2 sm:mb-0">
                <div className="text-lg sm:text-2xl font-bold text-slate-100">
                  {alerts.filter(a => a.severity === 'high').length}
                </div>
                <div className="text-slate-400 text-xs sm:text-sm">{t('alerts.highPriority')}</div>
              </div>
              <AlertTriangle className="text-red-400 w-5 h-5 sm:w-6 sm:h-6 self-start sm:self-center" />
            </div>
          </div>
          
          <div className="trading-card p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-2 sm:mb-0">
                <div className="text-lg sm:text-2xl font-bold text-slate-100">24h</div>
                <div className="text-slate-400 text-xs sm:text-sm">{t('alerts.coverage')}</div>
              </div>
              <Clock className="text-purple-400 w-5 h-5 sm:w-6 sm:h-6 self-start sm:self-center" />
            </div>
          </div>
        </div>

        {/* Mobile-optimized Filter Section */}
        <div className="mb-6">
          {/* Mobile Filter Button */}
          <div className="block sm:hidden mb-4">
            <button
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="flex items-center justify-between w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300"
            >
              <div className="flex items-center space-x-2">
                <Filter size={16} />
                <span>{t('alerts.filterAlerts')}</span>
              </div>
              <div className="text-sm text-slate-400">
                {filter === 'all' ? t('alerts.allAlerts') : 
                 filter === 'unread' ? t('alerts.unreadFilter') :
                 filter === 'whale' ? t('alerts.whaleActivity') : t('alerts.highPriorityFilter')}
              </div>
            </button>
            
            {showMobileFilter && (
              <div className="mt-2 p-4 bg-slate-800/50 border border-slate-700 rounded-lg space-y-2">
                {[
                  { key: 'all', label: t('alerts.allAlerts'), count: alerts.length },
                  { key: 'unread', label: t('alerts.unreadFilter'), count: unreadCount },
                  { key: 'whale', label: t('alerts.whaleActivity'), count: alerts.filter(a => a.type === 'whale').length },
                  { key: 'high', label: t('alerts.highPriorityFilter'), count: alerts.filter(a => a.severity === 'high').length }
                ].map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setFilter(tab.key as any);
                      setShowMobileFilter(false);
                    }}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition-colors ${
                      filter === tab.key 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                        : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/30'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className="bg-slate-600 text-slate-300 px-2 py-0.5 rounded text-xs">
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Filter Tabs */}
          <div className="hidden sm:flex items-center space-x-4">
            {[
              { key: 'all', label: t('alerts.allAlerts'), count: alerts.length },
              { key: 'unread', label: t('alerts.unreadFilter'), count: unreadCount },
              { key: 'whale', label: t('alerts.whaleActivity'), count: alerts.filter(a => a.type === 'whale').length },
              { key: 'high', label: t('alerts.highPriorityFilter'), count: alerts.filter(a => a.severity === 'high').length }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  filter === tab.key 
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                    : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/30'
                }`}
              >
                <span>{tab.label}</span>
                <span className="bg-slate-600 text-slate-300 px-2 py-0.5 rounded text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile-optimized Alerts List */}
        <div className="trading-card overflow-hidden">
          <div className="divide-y divide-slate-700/30">
            {filteredAlerts.map((alert) => {
              const AlertIcon = getAlertIcon(alert.type);
              return (
                <div
                  key={alert.id}
                  className={`p-4 sm:p-6 cursor-pointer transition-colors ${
                    !alert.isRead ? 'bg-blue-500/5 border-l-4 border-blue-500' : 'hover:bg-slate-700/20'
                  }`}
                  onClick={() => markAsRead(alert.id)}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    {/* Icon */}
                    <div className={`p-2 rounded-lg flex-shrink-0 ${getSeverityColor(alert.severity)}`}>
                      <AlertIcon size={16} className="sm:w-5 sm:h-5" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-2 sm:space-y-0">
                        <h3 className={`font-semibold text-sm sm:text-base pr-2 ${!alert.isRead ? 'text-slate-100' : 'text-slate-300'}`}>
                          {alert.title}
                        </h3>
                        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                          {alert.value && (
                            <span className="text-emerald-400 font-semibold text-sm">{alert.value}</span>
                          )}
                          <span className="text-slate-500 text-xs sm:text-sm">{alert.timestamp}</span>
                          {!alert.isRead && (
                            <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                          )}
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-slate-400 text-xs sm:text-sm mb-3 line-clamp-2">
                        {alert.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="ticker-badge text-xs">{alert.ticker}</span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getSeverityColor(alert.severity)}`}>
                          {alert.severity.toUpperCase()}
                        </span>
                        <span className="text-slate-500 text-xs uppercase">{alert.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredAlerts.length === 0 && (
            <div className="text-center py-12">
              <Bell className="mx-auto w-12 h-12 text-slate-500 mb-4" />
              <p className="text-slate-400">No alerts match your current filter</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Alerts;