
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import TickerTape from '../components/TickerTape';
import RedirectionLogic from '../components/RedirectionLogic';
import { Bell, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

interface Alert {
  id: string;
  type: 'whale' | 'volume' | 'price' | 'unusual';
  ticker: string;
  message: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
}

const Alerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const generateAlert = (): Alert => {
    const tickers = ['AAPL', 'TSLA', 'NVDA', 'SPY', 'QQQ', 'MSFT', 'AMZN', 'GOOGL'];
    const types = ['whale', 'volume', 'price', 'unusual'] as const;
    const severities = ['low', 'medium', 'high'] as const;
    
    const type = types[Math.floor(Math.random() * types.length)];
    const ticker = tickers[Math.floor(Math.random() * tickers.length)];
    
    const messages = {
      whale: `Large ${Math.random() > 0.5 ? 'call' : 'put'} purchase detected`,
      volume: `Volume spike: ${(Math.random() * 5 + 1).toFixed(1)}x average`,
      price: `Price movement: ${(Math.random() > 0.5 ? '+' : '-')}${(Math.random() * 10).toFixed(1)}%`,
      unusual: `Unusual options activity detected`,
    };

    return {
      id: Math.random().toString(36).substr(2, 9),
      type,
      ticker,
      message: messages[type],
      severity: severities[Math.floor(Math.random() * severities.length)],
      timestamp: new Date().toLocaleTimeString(),
    };
  };

  useEffect(() => {
    const initialAlerts = Array.from({ length: 15 }, generateAlert);
    setAlerts(initialAlerts);

    const interval = setInterval(() => {
      setAlerts(prev => [generateAlert(), ...prev.slice(0, 24)]);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      default: return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'whale': return <TrendingUp size={16} />;
      case 'volume': return <TrendingDown size={16} />;
      case 'price': return <AlertTriangle size={16} />;
      default: return <Bell size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      <TickerTape />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-100 mb-2">
              Market Alerts
            </h1>
            <p className="text-slate-400">
              Real-time notifications for unusual market activity
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-slate-400">LIVE MONITORING</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="trading-card p-6 text-center">
            <div className="text-2xl font-bold text-red-400 mb-2">
              {alerts.filter(a => a.severity === 'high').length}
            </div>
            <div className="text-slate-400 text-sm">High Priority</div>
          </div>
          <div className="trading-card p-6 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-2">
              {alerts.filter(a => a.severity === 'medium').length}
            </div>
            <div className="text-slate-400 text-sm">Medium Priority</div>
          </div>
          <div className="trading-card p-6 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2">
              {alerts.filter(a => a.severity === 'low').length}
            </div>
            <div className="text-slate-400 text-sm">Low Priority</div>
          </div>
        </div>

        <div className="trading-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-100">Recent Alerts</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-400">Auto-refresh: ON</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)} whale-pulse`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-slate-700/50">
                      {getTypeIcon(alert.type)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="ticker-badge">{alert.ticker}</span>
                        <span className="text-xs text-slate-400 uppercase">
                          {alert.type} alert
                        </span>
                      </div>
                      <div className="text-sm text-slate-300 mt-1">
                        {alert.message}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className={`text-xs px-2 py-1 rounded uppercase font-semibold ${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {alert.timestamp}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Alerts;
