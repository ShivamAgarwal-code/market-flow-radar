
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
    'landing.hero.title': 'Rastrea Cada Movimiento de Ballenas',
    'landing.hero.subtitle': '+$2.5B rastreados diariamente. Únete a traders élite que siguen movimientos de dinero institucional y actividad de pools oscuros para maximizar ganancias.',
    'landing.hero.trustedBy': 'Confiado por 10,000+ Traders Profesionales',
    'landing.hero.startTracking': 'Comenzar Rastreo de Ballenas',
    'landing.hero.viewDemo': 'Ver Demo en Vivo',
    'landing.hero.bankGrade': 'Seguridad de Grado Bancario',
    'landing.hero.latency': 'Latencia 0.2ms',
    'landing.hero.accuracy': 'Precisión 99.9%',
    'landing.hero.optionsFlow': 'Flujo de Opciones',
    'landing.hero.liveTrades': 'Operaciones en Vivo',
    'landing.hero.darkPool': 'Pool Oscuro',
    'landing.hero.alerts': 'Alertas',
    'landing.urgency.title': '🚨 No Te Pierdas Otro Movimiento de Ballenas',
    'landing.urgency.subtitle': 'Cada minuto que esperas, los traders institucionales están ganando millones. Únete ahora y recibe tu primera alerta de ballenas en segundos.',
    'landing.urgency.alertsSent': '✅ 2,431 alertas enviadas hoy',
    'landing.urgency.getAccess': 'Obtener Acceso Instantáneo Ahora',
    
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
    'analytics.portfolioBeta': 'Beta del Portafolio',
    'analytics.volatility': 'Volatilidad',
    'analytics.correlation': 'Correlación',
    
    // Pricing Page
    'pricing.title': 'Elige tu Plan',
    'pricing.subtitle': 'Desbloquea el poder de la inteligencia de trading institucional',
    'pricing.basic': 'Básico',
    'pricing.pro': 'Pro',
    'pricing.enterprise': 'Empresarial',
    'pricing.month': '/mes',
    'pricing.mostPopular': 'Más Popular',
    'pricing.getStarted': 'Comenzar',
    'pricing.liveOptionsFlow': 'Flujo de Opciones en Vivo',
    'pricing.basicAlerts': 'Alertas Básicas',
    'pricing.marketScreener': 'Filtrador de Mercado',
    'pricing.emailSupport': 'Soporte por Email',
    
    // Index Page
    'index.title': 'Inteligencia de Mercado en Vivo',
    'index.subtitle': 'Actividad de ballenas en tiempo real, flujo de opciones e insights de mercado - Actualizado',
    
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
    
    // Landing Page
    'landing.hero.title': 'Suivez Chaque Mouvement de Baleine',
    'landing.hero.subtitle': '+2,5B$ suivis quotidiennement. Rejoignez les traders d\'élite qui suivent les mouvements d\'argent institutionnel et l\'activité des pools sombres pour maximiser les profits.',
    'landing.hero.trustedBy': 'Approuvé par 10 000+ Traders Professionnels',
    'landing.hero.startTracking': 'Commencer le Suivi des Baleines',
    'landing.hero.viewDemo': 'Voir la Démo en Direct',
    'landing.hero.bankGrade': 'Sécurité de Niveau Bancaire',
    'landing.hero.latency': 'Latence 0,2ms',
    'landing.hero.accuracy': 'Précision 99,9%',
    
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
    'landing.hero.title': 'Verfolgen Sie Jeden Wal-Bewegung',
    'landing.hero.subtitle': '+2,5B$ täglich verfolgt. Schließen Sie sich Elite-Tradern an, die institutionelle Geldbewegungen und Dark-Pool-Aktivitäten verfolgen, um Gewinne zu maximieren.',
    'landing.hero.trustedBy': 'Vertraut von 10.000+ Professionellen Tradern',
    'landing.hero.startTracking': 'Wal-Tracking Starten',
    'landing.hero.viewDemo': 'Live-Demo Ansehen',
    'landing.hero.bankGrade': 'Bankenklasse-Sicherheit',
    'landing.hero.latency': '0,2ms Latenz',
    'landing.hero.accuracy': '99,9% Genauigkeit',
    
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
    'landing.hero.title': '追踪每一个鲸鱼动向',
    'landing.hero.subtitle': '每日追踪超过25亿美元。加入精英交易者行列，跟踪机构资金流动和暗池活动以最大化利润。',
    'landing.hero.trustedBy': '受到10,000+专业交易者信赖',
    'landing.hero.startTracking': '开始追踪鲸鱼',
    'landing.hero.viewDemo': '观看实时演示',
    'landing.hero.bankGrade': '银行级安全',
    'landing.hero.latency': '0.2毫秒延迟',
    'landing.hero.accuracy': '99.9%准确率',
    
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
    'landing.hero.title': 'すべてのクジラの動きを追跡',
    'landing.hero.subtitle': '毎日25億ドル以上を追跡。機関投資家の資金移動とダークプール活動を追跡して利益を最大化するエリートトレーダーに参加してください。',
    'landing.hero.trustedBy': '10,000+のプロトレーダーに信頼されています',
    'landing.hero.startTracking': 'ホエール追跡を開始',
    'landing.hero.viewDemo': 'ライブデモを見る',
    'landing.hero.bankGrade': '銀行レベルのセキュリティ',
    'landing.hero.latency': '0.2ms遅延',
    'landing.hero.accuracy': '99.9%精度',
    
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
    { code: 'es', name: translations[language]?.['lang.es'] as string || 'Español', flag: '🇪🇸' }
  ];

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </TranslationContext.Provider>
  );
};
