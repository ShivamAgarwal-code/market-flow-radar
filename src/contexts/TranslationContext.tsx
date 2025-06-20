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
    'nav.searchPlaceholder': 'Search tickers...',
    'nav.marketStatus': 'Market:',
    'nav.open': 'OPEN',
    'nav.closed': 'CLOSED',
    
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
    
    // Common
    'common.topMovers': 'Top Movers',
    'common.marketSentiment': 'Market Sentiment',
    'common.fearGreed': 'Fear & Greed',
    'common.putCallRatio': 'Put/Call Ratio',
    'common.vixLevel': 'VIX Level',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.all': 'All',
    
    // Options Flow
    'optionsFlow.title': 'Live Options Flow',
    'optionsFlow.subtitle': 'Real-time options trades and unusual activity',
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
    'screener.subtitle': 'Find stocks with unusual activity and whale interest',
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
    
    // New flat translations
    'landing.liveTrades.title': 'Live Whale Trades',
    'landing.liveTrades.subtitle': 'Real-time whale activity and unusual options flow detection',
    'landing.heatmap.title': 'Market Heatmap',
    'landing.heatmap.subtitle': 'Real-time market performance visualization',
    'landing.whaleSpotlight.title': 'Whale Spotlight',
    'landing.whaleSpotlight.subtitle': 'Track the most successful whale traders in real-time',
    'landing.trending.title': 'Trending Now',
    'landing.trending.subtitle': 'Most discussed whale activities and market insights',
    
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
    'nav.searchPlaceholder': 'Buscar símbolos...',
    'nav.marketStatus': 'Mercado:',
    'nav.open': 'ABIERTO',
    'nav.closed': 'CERRADO',
    
    // Landing Page
    'landing.hero.title': 'Whale Signal',
    'landing.hero.subtitle': 'Rastrea movimientos de dinero institucional, flujo de opciones e inteligencia de mercado en tiempo real',
    'landing.hero.startTracking': 'Comenzar Seguimiento',
    'landing.hero.watchDemo': 'Ver Demo',
    'landing.hero.optionsFlow': 'Flujo de Opciones',
    'landing.hero.liveTrades': 'Operaciones en Vivo',
    'landing.hero.darkPool': 'Dark Pool',
    'landing.hero.alerts': 'Alertas',
    
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
    'nav.searchPlaceholder': 'Rechercher symboles...',
    'nav.marketStatus': 'Marché:',
    'nav.open': 'OUVERT',
    'nav.closed': 'FERMÉ',
    
    // Landing Page
    'landing.hero.title': 'Whale Signal',
    'landing.hero.subtitle': 'Suivez les mouvements d\'argent institutionnel, le flux d\'options et l\'intelligence de marché en temps réel',
    'landing.hero.startTracking': 'Commencer le Suivi',
    'landing.hero.watchDemo': 'Voir la Démo',
    
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
    'nav.searchPlaceholder': 'Symbole suchen...',
    'nav.marketStatus': 'Markt:',
    'nav.open': 'OFFEN',
    'nav.closed': 'GESCHLOSSEN',
    
    // Landing Page
    'landing.hero.title': 'Whale Signal',
    'landing.hero.subtitle': 'Verfolgen Sie institutionelle Geldbewegungen, Optionsfluss und Marktintelligenz in Echtzeit',
    'landing.hero.startTracking': 'Tracking Starten',
    'landing.hero.watchDemo': 'Demo Ansehen',
    
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
    'nav.searchPlaceholder': '搜索股票代码...',
    'nav.marketStatus': '市场:',
    'nav.open': '开盘',
    'nav.closed': '闭盘',
    
    // Landing Page
    'landing.hero.title': 'Whale Signal',
    'landing.hero.subtitle': '实时追踪机构资金流动、期权流和市场情报',
    'landing.hero.startTracking': '开始追踪',
    'landing.hero.watchDemo': '观看演示',
    
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
    'nav.searchPlaceholder': 'ティッカーを検索...',
    'nav.marketStatus': '市場:',
    'nav.open': '開場',
    'nav.closed': '閉場',
    
    // Landing Page
    'landing.hero.title': 'Whale Signal',
    'landing.hero.subtitle': '機関投資家の資金移動、オプションフロー、市場インテリジェンスをリアルタイムで追跡',
    'landing.hero.startTracking': '追跡を開始',
    'landing.hero.watchDemo': 'デモを見る',
    
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
