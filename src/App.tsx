
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TranslationProvider } from './contexts/TranslationContext';
import Landing from './pages/Landing';
import Index from './pages/Index';
import OptionsFlow from './pages/OptionsFlow';
import Screener from './pages/Screener';
import Alerts from './pages/Alerts';
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
          <Route path="/cloudflare" element={<Cloudflare />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TranslationProvider>
  );
}

export default App;
