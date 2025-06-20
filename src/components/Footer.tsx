
import React from 'react';
import { Github, Twitter, Linkedin, Mail, TrendingUp } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Whale Signal</span>
            </div>
            <p className="text-slate-400 text-sm">
              Professional trading intelligence platform for tracking institutional money movements and options flow.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Live Options Flow</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Dark Pool Tracking</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Whale Alerts</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Market Screener</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">API Access</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Status</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Whale Signal. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-4 md:mt-0">
            Built for professional traders and institutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
