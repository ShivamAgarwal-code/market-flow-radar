
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TranslationProvider } from './contexts/TranslationContext';
import Landing from './pages/Landing';
import Index from './pages/Index';
import OptionsFlow from './pages/OptionsFlow';
import Screener from './pages/Screener';
import Alerts from './pages/Alerts';
import Portfolio from './pages/Portfolio';
import DarkPool from './pages/DarkPool';
import WhaleTracker from './pages/WhaleTracker';
import Analytics from './pages/Analytics';
import TradingSignals from './pages/TradingSignals';
import MarketNews from './pages/MarketNews';
import Education from './pages/Education';
import RiskManagement from './pages/RiskManagement';
import Backtesting from './pages/Backtesting';
import Pricing from './pages/Pricing';
import Cloudflare from './pages/Cloudflare';
import NotFound from './pages/NotFound';

function App() {
  return (
    <TranslationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/live-feed" element={<Index />} />
          <Route path="/options-flow" element={<OptionsFlow />} />
          <Route path="/screener" element={<Screener />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dark-pool" element={<DarkPool />} />
          <Route path="/whale-tracker" element={<WhaleTracker />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/signals" element={<TradingSignals />} />
          <Route path="/news" element={<MarketNews />} />
          <Route path="/education" element={<Education />} />
          <Route path="/risk" element={<RiskManagement />} />
          <Route path="/backtesting" element={<Backtesting />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/cloudflare" element={<Cloudflare />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TranslationProvider>
  );
}

export default App;
