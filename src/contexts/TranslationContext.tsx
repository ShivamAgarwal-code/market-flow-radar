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
    'landing.hero.title': 'Whale Signal',
    'landing.hero.subtitle': 'Track institutional money movements, options flow, and market intelligence in real-time',
    'landing.hero.startTracking': 'Start Tracking',
    'landing.hero.watchDemo': 'Watch Demo',
    'landing.hero.optionsFlow': 'Options Flow',
    'landing.hero.liveTrades': 'Live Trades',
    'landing.hero.darkPool': 'Dark Pool',
    'landing.hero.alerts': 'Alerts',
    
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
    
    // Landing Page
    'landing.hero.title': 'Whale Signal',
    'landing.hero.subtitle': 'Rastrea movimientos de dinero institucional, flujo de opciones e inteligencia de mercado en tiempo real',
    'landing.hero.startTracking': 'Comenzar Seguimiento',
    'landing.hero.watchDemo': 'Ver Demo',
    'landing.hero.optionsFlow': 'Flujo de Opciones',
    'landing.hero.liveTrades': 'Operaciones en Vivo',
    'landing.hero.darkPool': 'Pool Oscuro',
    'landing.hero.alerts': 'Alertas',
    
    // Analytics Page
    'analytics.title': 'Análisis Avanzado',
    'analytics.subtitle': 'Profundiza en las tendencias del mercado y patrones de trading',
    'analytics.performanceOverview': 'Resumen de Rendimiento',
    'analytics.winRate': 'Tasa de Ganancia',
    'analytics.averageReturn': 'Retorno Promedio',
    'analytics.sharpeRatio': 'Ratio de Sharpe',
    'analytics.maxDrawdown': 'Máxima Pérdida',
    'analytics.portfolioPerformance': 'Rendimiento del Portafolio',
    'analytics.viewInteractiveCharts': 'Ver Gráficos Interactivos',
    'analytics.topPerformers': 'Mejores Rendimientos',
    'analytics.riskAnalysis': 'Análisis de Riesgo',
    
    // Pricing Page
    'pricing.title': 'Elige tu Plan',
    'pricing.subtitle': 'Desbloquea el poder de la inteligencia de trading institucional',
    'pricing.basic': 'Básico',
    'pricing.pro': 'Pro',
    'pricing.enterprise': 'Empresarial',
    'pricing.month': '/mes',
    'pricing.mostPopular': 'Más Popular',
    'pricing.getStarted': 'Comenzar',
    
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
    
    // Landing Page
    'landing.hero.title': 'Whale Signal',
    'landing.hero.subtitle': 'Suivez les mouvements d\'argent institutionnel, le flux d\'options et l\'intelligence de marché en temps réel',
    'landing.hero.startTracking': 'Commencer le Suivi',
    'landing.hero.watchDemo': 'Voir la Démo',
    
    // Analytics Page
    'analytics.title': 'Analytique Avancée',
    'analytics.subtitle': 'Plongez dans les tendances du marché et les modèles de trading',
    'analytics.performanceOverview': 'Aperçu des Performances',
    'analytics.portfolioPerformance': 'Performance du Portefeuille',
    'analytics.topPerformers': 'Meilleurs Performants',
    'analytics.riskAnalysis': 'Analyse des Risques',
    
    // Pricing Page
    'pricing.title': 'Choisissez Votre Plan',
    'pricing.subtitle': 'Débloquez la puissance de l\'intelligence de trading institutionnelle',
    'pricing.basic': 'Basique',
    'pricing.pro': 'Pro',
    'pricing.enterprise': 'Entreprise',
    'pricing.month': '/mois',
    'pricing.mostPopular': 'Le Plus Populaire',
    'pricing.getStarted': 'Commencer',
    
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
    
    // Landing Page
    'landing.hero.title': 'Whale Signal',
    'landing.hero.subtitle': 'Verfolgen Sie institutionelle Geldbewegungen, Optionsfluss und Marktintelligenz in Echtzeit',
    'landing.hero.startTracking': 'Tracking Starten',
    'landing.hero.watchDemo': 'Demo Ansehen',
    
    // Analytics Page
    'analytics.title': 'Erweiterte Analytik',
    'analytics.subtitle': 'Tauchen Sie tief in Markttrends und Trading-Muster ein',
    'analytics.performanceOverview': 'Leistungsübersicht',
    'analytics.portfolioPerformance': 'Portfolio-Performance',
    'analytics.topPerformers': 'Top-Performer',
    'analytics.riskAnalysis': 'Risikoanalyse',
    
    // Pricing Page
    'pricing.title': 'Wählen Sie Ihren Plan',
    'pricing.subtitle': 'Erschließen Sie die Macht institutioneller Trading-Intelligenz',
    'pricing.basic': 'Basis',
    'pricing.pro': 'Pro',
    'pricing.enterprise': 'Unternehmen',
    'pricing.month': '/Monat',
    'pricing.mostPopular': 'Am Beliebtesten',
    'pricing.getStarted': 'Loslegen',
    
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
    
    // Landing Page
    'landing.hero.title': 'Whale Signal',
    'landing.hero.subtitle': '实时追踪机构资金流动、期权流和市场情报',
    'landing.hero.startTracking': '开始追踪',
    'landing.hero.watchDemo': '观看演示',
    
    // Analytics Page
    'analytics.title': '高级分析',
    'analytics.subtitle': '深入了解市场趋势和交易模式',
    'analytics.performanceOverview': '表现概览',
    'analytics.portfolioPerformance': '投资组合表现',
    'analytics.topPerformers': '顶级表现者',
    'analytics.riskAnalysis': '风险分析',
    
    // Pricing Page
    'pricing.title': '选择您的计划',
    'pricing.subtitle': '释放机构级交易智能的力量',
    'pricing.basic': '基础',
    'pricing.pro': '专业',
    'pricing.enterprise': '企业',
    'pricing.month': '/月',
    'pricing.mostPopular': '最受欢迎',
    'pricing.getStarted': '开始使用',
    
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
    
    // Landing Page
    'landing.hero.title': 'Whale Signal',
    'landing.hero.subtitle': '機関投資家の資金移動、オプションフロー、市場インテリジェンスをリアルタイムで追跡',
    'landing.hero.startTracking': '追跡を開始',
    'landing.hero.watchDemo': 'デモを見る',
    
    // Analytics Page
    'analytics.title': '高度な分析',
    'analytics.subtitle': '市場トレンドと取引パターンの詳細分析',
    'analytics.performanceOverview': 'パフォーマンス概要',
    'analytics.portfolioPerformance': 'ポートフォリオパフォーマンス',
    'analytics.topPerformers': 'トップパフォーマー',
    'analytics.riskAnalysis': 'リスク分析',
    
    // Pricing Page
    'pricing.title': 'プランを選択',
    'pricing.subtitle': '機関級取引インテリジェンスの力を解放',
    'pricing.basic': 'ベーシック',
    'pricing.pro': 'プロ',
    'pricing.enterprise': 'エンタープライズ',
    'pricing.month': '/月',
    'pricing.mostPopular': '最も人気',
    'pricing.getStarted': '始める',
    
    // Language names
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.fr': 'Français',
    'lang.de': 'Deutsch',
    'lang.zh': '中文',
    'lang.ja': '日本語',
  },
};

interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  availableLanguages: { code: string; name: string }[];
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

  const availableLanguages = [
    { code: 'en', name: translations[language]?.['lang.en'] as string || 'English' },
    { code: 'es', name: translations[language]?.['lang.es'] as string || 'Español' },
    { code: 'fr', name: translations[language]?.['lang.fr'] as string || 'Français' },
    { code: 'de', name: translations[language]?.['lang.de'] as string || 'Deutsch' },
    { code: 'zh', name: translations[language]?.['lang.zh'] as string || '中文' },
    { code: 'ja', name: translations[language]?.['lang.ja'] as string || '日本語' },
  ];

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </TranslationContext.Provider>
  );
};
