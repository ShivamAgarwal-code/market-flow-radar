
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import TickerTape from '../components/TickerTape';
import RedirectionLogic from '../components/RedirectionLogic';
import { Bell, Clock, TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react';

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
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [filter, setFilter] = useState<'all' | 'unread' | 'whale' | 'high'>('all');

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
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-100 mb-2">
              Trading Alerts
            </h1>
            <p className="text-slate-400">
              Real-time notifications for market-moving events
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <CheckCircle size={16} />
                <span>Mark All Read</span>
              </button>
            )}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="trading-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-slate-100">{unreadCount}</div>
                <div className="text-slate-400 text-sm">Unread Alerts</div>
              </div>
              <Bell className="text-blue-400" size={24} />
            </div>
          </div>
          
          <div className="trading-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-slate-100">
                  {alerts.filter(a => a.type === 'whale').length}
                </div>
                <div className="text-slate-400 text-sm">Whale Alerts</div>
              </div>
              <TrendingUp className="text-emerald-400" size={24} />
            </div>
          </div>
          
          <div className="trading-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-slate-100">
                  {alerts.filter(a => a.severity === 'high').length}
                </div>
                <div className="text-slate-400 text-sm">High Priority</div>
              </div>
              <AlertTriangle className="text-red-400" size={24} />
            </div>
          </div>
          
          <div className="trading-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-slate-100">24h</div>
                <div className="text-slate-400 text-sm">Coverage</div>
              </div>
              <Clock className="text-purple-400" size={24} />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center space-x-4 mb-6">
          {[
            { key: 'all', label: 'All Alerts', count: alerts.length },
            { key: 'unread', label: 'Unread', count: unreadCount },
            { key: 'whale', label: 'Whale Activity', count: alerts.filter(a => a.type === 'whale').length },
            { key: 'high', label: 'High Priority', count: alerts.filter(a => a.severity === 'high').length }
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

        {/* Alerts List */}
        <div className="trading-card">
          <div className="divide-y divide-slate-700/30">
            {filteredAlerts.map((alert) => {
              const AlertIcon = getAlertIcon(alert.type);
              return (
                <div
                  key={alert.id}
                  className={`p-6 cursor-pointer transition-colors ${
                    !alert.isRead ? 'bg-blue-500/5 border-l-4 border-blue-500' : 'hover:bg-slate-700/20'
                  }`}
                  onClick={() => markAsRead(alert.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${getSeverityColor(alert.severity)}`}>
                      <AlertIcon size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-semibold ${!alert.isRead ? 'text-slate-100' : 'text-slate-300'}`}>
                          {alert.title}
                        </h3>
                        <div className="flex items-center space-x-3">
                          {alert.value && (
                            <span className="text-emerald-400 font-semibold">{alert.value}</span>
                          )}
                          <span className="text-slate-500 text-sm">{alert.timestamp}</span>
                          {!alert.isRead && (
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-slate-400 text-sm mb-2">{alert.description}</p>
                      
                      <div className="flex items-center space-x-3">
                        <span className="ticker-badge">{alert.ticker}</span>
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
        </div>
      </main>
    </div>
  );
};

export default Alerts;
