import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string | { [key: string]: string };
  };
}

const translations: Translations = {
  en: {
    // Navigation
    'nav.liveFeed': 'Live Feed',
    'nav.optionsFlow': 'Options Flow',
    'nav.screener': 'Screener',
    'nav.alerts': 'Alerts',
    'nav.portfolio': 'Portfolio',
    'nav.darkPool': 'Dark Pool',
    'nav.whaleTracker': 'Whale Tracker',
    'nav.analytics': 'Analytics',
    'nav.signals': 'Signals',
    'nav.news': 'News',
    'nav.education': 'Education',
    'nav.risk': 'Risk',
    'nav.backtesting': 'Backtesting',
    'nav.pricing': 'Pricing',
    'nav.more': 'More',
    'nav.searchPlaceholder': 'Search...',
    'nav.marketStatus': 'Market',
    'nav.open': 'Open',
    'nav.closed': 'Closed',
    'nav.register': 'Register',
    
    // Landing Page
    'landing.hero.title': 'Track Every Whale Move',
    'landing.hero.subtitle': '$2.5B+ tracked daily. Join elite traders who follow institutional money movements and dark pool activity to maximize profits.',
    'landing.hero.trustedBy': 'Trusted by 10,000+ Professional Traders',
    'landing.hero.startTracking': 'Start Tracking Whales',
    'landing.hero.viewDemo': 'View Live Demo',
    'landing.hero.bankGrade': 'Bank-Grade Security',
    'landing.hero.latency': '0.2ms Latency',
    'landing.hero.accuracy': '99.9% Accuracy',
    'landing.hero.optionsFlow': 'Options Flow',
    'landing.hero.liveTrades': 'Live Trades',
    'landing.hero.darkPool': 'Dark Pool',
    'landing.hero.alerts': 'Alerts',
    'landing.urgency.title': '🚨 Don\'t Miss Another Whale Move',
    'landing.urgency.subtitle': 'Every minute you wait, institutional traders are making millions. Join now and get your first whale alert within seconds.',
    'landing.urgency.alertsSent': '✅ 2,431 alerts sent today',
    'landing.urgency.getAccess': 'Get Instant Access Now',
    'landing.liveTrades.title': 'Live Whale Trades',
    'landing.liveTrades.subtitle': 'Real-time whale activity and unusual options flow detection',
    'landing.whaleSpotlight.title': 'Whale Spotlight',
    'landing.whaleSpotlight.subtitle': 'Track the most successful whale traders in real-time',
    
    // Features
    'features.title': 'Professional Trading Intelligence',
    'features.subtitle': 'Get the same tools institutional traders use to track market movements and identify opportunities',
    'features.liveOptionsFlow': 'Live Options Flow',
    'features.liveOptionsFlowDesc': 'Track unusual options activity and whale movements in real-time',
    'features.instantAlerts': 'Instant Alerts',
    'features.instantAlertsDesc': 'Get notified of significant market movements and whale activity',
    'features.marketScreener': 'Market Screener',
    'features.marketScreenerDesc': 'Filter and discover opportunities across thousands of stocks',
    'features.darkPoolTracking': 'Dark Pool Tracking',
    'features.darkPoolTrackingDesc': 'Monitor institutional block trades and hidden liquidity',
    'features.realTimeData': 'Real-Time Data',
    'features.realTimeDataDesc': 'Access live market data with minimal latency',
    'features.smartAnalysis': 'Smart Analysis',
    'features.smartAnalysisDesc': 'AI-powered insights and pattern recognition',
    
    // Stats
    'stats.totalVolume': 'Total Volume Tracked',
    'stats.tradesAnalyzed': 'Trades Analyzed',
    'stats.uptimeGuarantee': 'Uptime Guarantee',
    'stats.averageLatency': 'Average Latency',
    'stats.thisMonth': 'this month',
    
    // CTA
    'cta.title': 'Ready to Trade Like a Whale?',
    'cta.subtitle': 'Join thousands of traders who rely on Whale Signal for market intelligence',
    'cta.rating': 'from 2,847 traders',
    'cta.getStarted': 'Get Started Free',
    'cta.viewPricing': 'View Pricing',
    
    // Analytics Page
    'analytics.title': 'Advanced Analytics',
    'analytics.subtitle': 'Deep dive into market trends and trading patterns',
    'analytics.performanceOverview': 'Performance Overview',
    'analytics.winRate': 'Win Rate',
    'analytics.averageReturn': 'Average Return',
    'analytics.sharpeRatio': 'Sharpe Ratio',
    'analytics.maxDrawdown': 'Max Drawdown',
    'analytics.portfolioPerformance': 'Portfolio Performance',
    'analytics.viewInteractiveCharts': 'View Interactive Charts',
    'analytics.interactiveChartsDesc': 'Interactive charts available with premium access',
    'analytics.topPerformers': 'Top Performers',
    'analytics.riskAnalysis': 'Risk Analysis',
    'analytics.portfolioBeta': 'Portfolio Beta',
    'analytics.volatility': 'Volatility',
    'analytics.correlation': 'Correlation',
    'analytics.advancedMetrics': 'Advanced Metrics',
    'analytics.advancedMetricsDesc': 'Access detailed analytics and custom indicators',
    'analytics.portfolioAnalysis': 'Portfolio Analysis',
    'analytics.portfolioAnalysisDesc': 'Deep dive into portfolio composition and allocation',
    'analytics.realTimeAlerts': 'Real-time Alerts',
    'analytics.realTimeAlertsDesc': 'Get notified of important market movements',
    
    // Pricing Page
    'pricing.title': 'Choose Your Plan',
    'pricing.subtitle': 'Unlock the power of institutional-grade trading intelligence',
    'pricing.basic': 'Basic',
    'pricing.pro': 'Pro',
    'pricing.enterprise': 'Enterprise',
    'pricing.month': '/month',
    'pricing.mostPopular': 'Most Popular',
    'pricing.getStarted': 'Get Started',
    'pricing.liveOptionsFlow': 'Live Options Flow',
    'pricing.basicAlerts': 'Basic Alerts',
    'pricing.marketScreener': 'Market Screener',
    'pricing.emailSupport': 'Email Support',
    'pricing.everythingInBasic': 'Everything in Basic',
    'pricing.darkPoolTracking': 'Dark Pool Tracking',
    'pricing.whaleAlerts': 'Whale Alerts',
    'pricing.advancedAnalytics': 'Advanced Analytics',
    'pricing.prioritySupport': 'Priority Support',
    'pricing.everythingInPro': 'Everything in Pro',
    'pricing.apiAccess': 'API Access',
    'pricing.customAlerts': 'Custom Alerts',
    'pricing.dedicatedSupport': 'Dedicated Support',
    'pricing.customIntegration': 'Custom Integration',
    
    // Index Page
    'index.title': 'Live Market Intelligence',
    'index.subtitle': 'Real-time whale activity, options flow, and market insights - Updated',
    
    // Testimonials
    'testimonials.title': 'Trusted by Top Traders Worldwide',
    'testimonials.subtitle': 'Join thousands of professional traders who rely on Whale Signal for institutional-grade market intelligence',
    'testimonials.activeTraders': 'Active Traders',
    'testimonials.volumeTracked': 'Volume Tracked Daily',
    'testimonials.uptime': 'Uptime',
    'testimonials.latency': 'Average Latency',
    
    // Trending
    'trending.title': 'Trending Now',
    'trending.subtitle': 'Most discussed whale activities and market insights',
    'trending.viewAll': 'View All Trending',
    'trending.share': 'Share',
    
    // Options Flow
    'optionsFlow.title': 'Real-Time Options Flow',
    'optionsFlow.subtitle': 'Track unusual options activity and whale movements',
    'optionsFlow.allOptions': 'All Options',
    'optionsFlow.callsOnly': 'Calls Only',
    'optionsFlow.putsOnly': 'Puts Only',
    'optionsFlow.ticker': 'Ticker',
    'optionsFlow.type': 'Type',
    'optionsFlow.strike': 'Strike',
    'optionsFlow.expiry': 'Expiry',
    'optionsFlow.size': 'Size',
    'optionsFlow.premium': 'Premium',
    'optionsFlow.time': 'Time',
    
    // Screener
    'screener.title': 'Stock Screener',
    'screener.subtitle': 'Find stocks with whale activity',
    'screener.searchPlaceholder': 'Search stocks...',
    'screener.allStocks': 'All Stocks',
    'screener.highWhaleActivity': 'High Whale Activity',
    'screener.highVolume': 'High Volume',
    'screener.bigMovers': 'Big Movers',
    'screener.stock': 'Stock',
    'screener.price': 'Price',
    'screener.change': 'Change',
    'screener.volume': 'Volume',
    'screener.marketCap': 'Market Cap',
    'screener.whaleActivity': 'Whale Activity',
    'screener.sentiment': 'Sentiment',
    
    // Alerts
    'alerts.title': 'Trading Alerts',
    'alerts.subtitle': 'Real-time notifications for market-moving events',
    'alerts.unread': 'Unread Alerts',
    'alerts.whale': 'Whale Alerts',
    'alerts.highPriority': 'High Priority',
    'alerts.coverage': 'Coverage',
    'alerts.allAlerts': 'All Alerts',
    'alerts.unreadFilter': 'Unread',
    'alerts.whaleActivity': 'Whale Activity',
    'alerts.highPriorityFilter': 'High Priority',
    'alerts.markAllRead': 'Mark All Read',
    'alerts.filterAlerts': 'Filter Alerts',
    
    // Portfolio
    'portfolio.title': 'Portfolio Management',
    'portfolio.subtitle': 'Track and analyze your trading performance',
    'portfolio.totalValue': 'Total Value',
    'portfolio.positions': 'Positions',
    'portfolio.performance': 'Performance',
    'portfolio.currentHoldings': 'Current Holdings',
    'portfolio.addPosition': 'Add Position',
    'portfolio.symbol': 'Symbol',
    'portfolio.shares': 'Shares',
    'portfolio.currentPrice': 'Current Price',
    'portfolio.avgPrice': 'Avg Price',
    'portfolio.pnl': 'P&L',
    'portfolio.performanceAnalytics': 'Performance Analytics',
    'portfolio.riskAnalysis': 'Risk Analysis',
    'portfolio.exportData': 'Export Data',
    
    // Dark Pool
    'darkPool.title': 'Dark Pool Tracking',
    'darkPool.subtitle': 'Monitor institutional trading activity in dark pools',
    'darkPool.totalDarkVolume': 'Total Dark Volume',
    'darkPool.activeVenues': 'Active Venues',
    'darkPool.marketShare': 'Market Share',
    'darkPool.premiumFeature': 'Premium Feature',
    'darkPool.premiumAccess': 'Get Premium Access',
    'darkPool.recentActivity': 'Recent Dark Pool Activity',
    'darkPool.premiumPreview': 'Premium Preview',
    'darkPool.viewAllData': 'View All Dark Pool Data',
    
    // Whale Tracker
    'whaleTracker.title': 'Whale Tracker',
    'whaleTracker.subtitle': 'Follow the biggest market movers in real-time',
    'whaleTracker.totalWhaleVolume': 'Total Whale Volume',
    'whaleTracker.activeWhales': 'Active Whales',
    'whaleTracker.avgConfidence': 'Avg Confidence',
    'whaleTracker.signalAccuracy': 'Signal accuracy',
    'whaleTracker.liveActivity': 'Live Whale Activity',
    'whaleTracker.realTimeUpdates': 'Real-time updates',
    'whaleTracker.trackAllWhales': 'Track All Whales',
    'whaleTracker.topTargets': 'Top Whale Targets',
    'whaleTracker.alertSettings': 'Whale Alert Settings',
    'whaleTracker.minimumVolume': 'Minimum Volume',
    'whaleTracker.confidenceLevel': 'Confidence Level',
    'whaleTracker.realTimeAlerts': 'Real-time Alerts',
    'whaleTracker.customizeAlerts': 'Customize Alerts',
    
    // Trading Signals
    'signals.title': 'Trading Signals',
    'signals.subtitle': 'AI-powered trading signals based on whale activity',
    'signals.totalSignals': 'Total Signals',
    'signals.accuracy': 'Accuracy',
    'signals.activeSignals': 'Active Signals',
    'signals.avgReturn': 'Avg Return',
    'signals.latestSignals': 'Latest AI Signals',
    'signals.getInstantAlerts': 'Get Instant Alerts',
    'signals.whaleSignals': 'Whale Signals',
    'signals.momentumSignals': 'Momentum Signals',
    'signals.swingSignals': 'Swing Signals',
    
    // Market News
    'news.title': 'Market News',
    'news.subtitle': 'Stay ahead with market-moving news and analysis',
    'news.todayNews': 'Today\'s News',
    'news.highImpact': 'High Impact',
    'news.marketMoving': 'Market Moving',
    'news.accuracy': 'Accuracy',
    'news.breakingNews': 'Breaking News',
    'news.liveUpdates': 'Live updates',
    'news.filter': 'Filter',
    'news.watchAll': 'Watch All',
    'news.loadMore': 'Load More News',
    'news.earningsNews': 'Earnings News',
    'news.economicData': 'Economic Data',
    'news.analystReports': 'Analyst Reports',
    
    // Education
    'education.title': 'Trading Education',
    'education.subtitle': 'Master whale trading with expert-led courses and live sessions',
    'education.courses': 'Courses',
    'education.students': 'Students',
    'education.hours': 'Hours',
    'education.rating': 'Rating',
    'education.featuredCourses': 'Featured Courses',
    'education.upcomingWebinars': 'Upcoming Webinars',
    'education.learningPaths': 'Learning Paths',
    'education.startLearning': 'Start Learning Today',
    
    // Risk Management
    'risk.title': 'Risk Management',
    'risk.subtitle': 'Protect your capital with advanced risk monitoring and controls',
    'risk.portfolioRisk': 'Portfolio Risk',
    'risk.maxDrawdown': 'Max Drawdown',
    'risk.sharpeRatio': 'Sharpe Ratio',
    'risk.volatility': 'Volatility',
    'risk.riskAlerts': 'Risk Alerts',
    'risk.configureAlerts': 'Configure Alerts',
    'risk.positionSizing': 'Position Sizing',
    'risk.stopLossManagement': 'Stop Loss Management',
    
    // Backtesting
    'backtesting.title': 'Strategy Backtesting',
    'backtesting.subtitle': 'Test and validate your trading strategies with historical data',
    'backtesting.totalReturn': 'Total Return',
    'backtesting.sharpeRatio': 'Sharpe Ratio',
    'backtesting.maxDrawdown': 'Max Drawdown',
    'backtesting.winRate': 'Win Rate',
    'backtesting.totalTrades': 'Total Trades',
    'backtesting.avgHoldTime': 'Avg Hold Time',
    'backtesting.strategyPerformance': 'Strategy Performance',
    'backtesting.runBacktest': 'Run Backtest',
    'backtesting.strategyLibrary': 'Strategy Library',
    'backtesting.createNewStrategy': 'Create New Strategy',
    
    // Common
    'common.topMovers': 'Top Movers',
    'common.marketSentiment': 'Market Sentiment',
    'common.fearGreed': 'Fear & Greed',
    'common.putCallRatio': 'Put/Call Ratio',
    'common.vixLevel': 'VIX Level',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.all': 'All',
    'common.volume': 'Volume',
    'common.change': 'Change',
    'common.price': 'Price',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.retry': 'Retry',
    'common.close': 'Close',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.view': 'View',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.action': 'Action',
    'common.symbol': 'Symbol',
    'common.confidence': 'Confidence',
    'common.target': 'Target',
    'common.timeframe': 'Timeframe',
    'common.thisMonth': 'This month',
    'common.available': 'Available',
    'common.activelearners': 'Active learners',
    'common.content': 'Content',
    'common.average': 'Average',
    'common.executed': 'Executed',
    'common.perPosition': 'Per position',
    'common.articlesTracked': 'Articles tracked',
    'common.activeAlerts': 'Active alerts',
    'common.predictionRate': 'Prediction rate',
    'common.currentLevel': 'Current level',
    'common.lastDays': 'Last 30 days',
    'common.riskAdjustedReturn': 'Risk-adjusted return',
    'common.dayAverage': '30-day average',
    'common.trackedEntities': 'Tracked entities',
    'common.signalAccuracy': 'Signal accuracy',
    'common.realTimeUpdates': 'Real-time updates',
    'common.currentlyActive': 'Currently active',
    'common.perSignal': 'Per signal',
    'common.updatedRealTime': 'Updated in real-time',
    'common.twoYearBacktest': '2-year backtest',
    'common.riskAdjusted': 'Risk-adjusted',
    'common.worstPeriod': 'Worst period',
    'common.profitableTrades': 'Profitable trades',
    
    // Language names
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.fr': 'Français',
    'lang.de': 'Deutsch',
    'lang.zh': '中文',
    'lang.ja': '日本語',
  },
  es: {
    // Navigation
    'nav.liveFeed': 'Feed en Vivo',
    'nav.optionsFlow': 'Flujo de Opciones',
    'nav.screener': 'Filtrador',
    'nav.alerts': 'Alertas',
    'nav.portfolio': 'Portafolio',
    'nav.darkPool': 'Pool Oscuro',
    'nav.whaleTracker': 'Rastreador de Ballenas',
    'nav.analytics': 'Análisis',
    'nav.signals': 'Señales',
    'nav.news': 'Noticias',
    'nav.education': 'Educación',
    'nav.risk': 'Riesgo',
    'nav.backtesting': 'Backtesting',
    'nav.pricing': 'Precios',
    'nav.more': 'Más',
    'nav.searchPlaceholder': 'Buscar...',
    'nav.marketStatus': 'Mercado',
    'nav.open': 'Abierto',
    'nav.closed': 'Cerrado',
    'nav.register': 'Registrarse',
    
    // Options Flow
    'optionsFlow.title': 'Flujo de Opciones en Tiempo Real',
    'optionsFlow.subtitle': 'Seguimiento de actividad inusual de opciones',
    'optionsFlow.allOptions': 'Todas las Opciones',
    'optionsFlow.callsOnly': 'Solo Calls',
    'optionsFlow.putsOnly': 'Solo Puts',
    'optionsFlow.ticker': 'Símbolo',
    'optionsFlow.type': 'Tipo',
    'optionsFlow.strike': 'Strike',
    'optionsFlow.expiry': 'Vencimiento',
    'optionsFlow.size': 'Tamaño',
    'optionsFlow.premium': 'Prima',
    'optionsFlow.time': 'Hora',
    
    // Screener
    'screener.title': 'Escáner de Acciones',
    'screener.subtitle': 'Encuentra acciones con actividad de ballenas',
    'screener.searchPlaceholder': 'Buscar acciones...',
    'screener.allStocks': 'Todas las Acciones',
    'screener.highWhaleActivity': 'Alta Actividad de Ballenas',
    'screener.highVolume': 'Alto Volumen',
    'screener.bigMovers': 'Grandes Movimientos',
    'screener.stock': 'Acción',
    'screener.price': 'Precio',
    'screener.change': 'Cambio',
    'screener.volume': 'Volumen',
    'screener.marketCap': 'Cap. Mercado',
    'screener.whaleActivity': 'Actividad Ballenas',
    'screener.sentiment': 'Sentimiento',
    
    // Alerts
    'alerts.title': 'Alertas de Trading',
    'alerts.subtitle': 'Notificaciones en tiempo real para eventos que mueven el mercado',
    'alerts.unread': 'Alertas No Leídas',
    'alerts.whale': 'Alertas de Ballenas',
    'alerts.highPriority': 'Alta Prioridad',
    'alerts.coverage': 'Cobertura',
    'alerts.allAlerts': 'Todas las Alertas',
    'alerts.unreadFilter': 'No Leídas',
    'alerts.whaleActivity': 'Actividad de Ballenas',
    'alerts.highPriorityFilter': 'Alta Prioridad',
    'alerts.markAllRead': 'Marcar Todas como Leídas',
    'alerts.filterAlerts': 'Filtrar Alertas',
    
    // Common
    'common.volume': 'Volumen',
    'common.change': 'Cambio',
    'common.price': 'Precio',
    'common.loading': 'Cargando...',
    'common.close': 'Cerrar',
    'common.save': 'Guardar',
    'common.cancel': 'Cancelar',
    
    // Language names
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.fr': 'Français',
    'lang.de': 'Deutsch',
    'lang.zh': '中文',
    'lang.ja': '日本語',
  },
  fr: {
    // Navigation
    'nav.liveFeed': 'Flux en Direct',
    'nav.optionsFlow': 'Flux d\'Options',
    'nav.screener': 'Filtrage',
    'nav.alerts': 'Alertes',
    'nav.portfolio': 'Portefeuille',
    'nav.darkPool': 'Pool Sombre',
    'nav.whaleTracker': 'Traqueur de Baleines',
    'nav.analytics': 'Analytique',
    'nav.signals': 'Signaux',
    'nav.news': 'Actualités',
    'nav.education': 'Éducation',
    'nav.risk': 'Risque',
    'nav.backtesting': 'Backtesting',
    'nav.pricing': 'Tarifs',
    'nav.more': 'Plus',
    'nav.searchPlaceholder': 'Rechercher...',
    'nav.marketStatus': 'Marché',
    'nav.open': 'Ouvert',
    'nav.closed': 'Fermé',
    'nav.register': 'S\'inscrire',
    
    // Language names
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.fr': 'Français',
    'lang.de': 'Deutsch',
    'lang.zh': '中文',
    'lang.ja': '日本語',
  },
  de: {
    // Navigation
    'nav.liveFeed': 'Live-Feed',
    'nav.optionsFlow': 'Optionsfluss',
    'nav.screener': 'Screener',
    'nav.alerts': 'Warnungen',
    'nav.portfolio': 'Portfolio',
    'nav.darkPool': 'Dark Pool',
    'nav.whaleTracker': 'Wal-Tracker',
    'nav.analytics': 'Analytik',
    'nav.signals': 'Signale',
    'nav.news': 'Nachrichten',
    'nav.education': 'Bildung',
    'nav.risk': 'Risiko',
    'nav.backtesting': 'Backtesting',
    'nav.pricing': 'Preise',
    'nav.more': 'Mehr',
    'nav.searchPlaceholder': 'Suchen...',
    'nav.marketStatus': 'Markt',
    'nav.open': 'Offen',
    'nav.closed': 'Geschlossen',
    'nav.register': 'Registrieren',
    
    // Language names
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.fr': 'Français',
    'lang.de': 'Deutsch',
    'lang.zh': '中文',
    'lang.ja': '日本語',
  },
  zh: {
    // Navigation
    'nav.liveFeed': '实时动态',
    'nav.optionsFlow': '期权流',
    'nav.screener': '筛选器',
    'nav.alerts': '提醒',
    'nav.portfolio': '投资组合',
    'nav.darkPool': '暗池',
    'nav.whaleTracker': '鲸鱼追踪器',
    'nav.analytics': '分析',
    'nav.signals': '信号',
    'nav.news': '新闻',
    'nav.education': '教育',
    'nav.risk': '风险',
    'nav.backtesting': '回测',
    'nav.pricing': '定价',
    'nav.more': '更多',
    'nav.searchPlaceholder': '搜索...',
    'nav.marketStatus': '市场',
    'nav.open': '开盘',
    'nav.closed': '闭盘',
    'nav.register': '注册',
    
    // Language names
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.fr': 'Français',
    'lang.de': 'Deutsch',
    'lang.zh': '中文',
    'lang.ja': '日本語',
  },
  ja: {
    // Navigation
    'nav.liveFeed': 'ライブフィード',
    'nav.optionsFlow': 'オプションフロー',
    'nav.screener': 'スクリーナー',
    'nav.alerts': 'アラート',
    'nav.portfolio': 'ポートフォリオ',
    'nav.darkPool': 'ダークプール',
    'nav.whaleTracker': 'ホエールトラッカー',
    'nav.analytics': 'アナリティクス',
    'nav.signals': 'シグナル',
    'nav.news': 'ニュース',
    'nav.education': '教育',
    'nav.risk': 'リスク',
    'nav.backtesting': 'バックテスト',
    'nav.pricing': '価格',
    'nav.more': 'その他',
    'nav.searchPlaceholder': '検索...',
    'nav.marketStatus': '市場',
    'nav.open': '開場',
    'nav.closed': '閉場',
    'nav.register': '登録',
    
    // Language names
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.fr': 'Français',
    'lang.de': 'Deutsch',
    'lang.zh': '中文',
    'lang.ja': '日本語',
  },
};

interface AvailableLanguage {
  code: string;
  name: string;
  flag?: string;
}

interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  availableLanguages: AvailableLanguage[];
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    const value = translations[language]?.[key] || translations.en[key] || key;
    return typeof value === 'string' ? value : key;
  };

  const availableLanguages: AvailableLanguage[] = [
    { code: 'en', name: translations[language]?.['lang.en'] as string || 'English', flag: '🇺🇸' },
    { code: 'es', name: translations[language]?.['lang.es'] as string || 'Español', flag: '🇪🇸' },
    { code: 'fr', name: translations[language]?.['lang.fr'] as string || 'Français', flag: '🇫🇷' },
    { code: 'de', name: translations[language]?.['lang.de'] as string || 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: translations[language]?.['lang.zh'] as string || '中文', flag: '🇨🇳' },
    { code: 'ja', name: translations[language]?.['lang.ja'] as string || '日本語', flag: '🇯🇵' }
  ];

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;