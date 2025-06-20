
import React from 'react';
import Navigation from '../components/Navigation';
import { Shield, AlertTriangle, BarChart3 } from 'lucide-react';

const RiskManagement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Risk Management</h1>
          <p className="text-slate-400">Protect your capital with advanced risk tools</p>
        </div>

        <div className="text-center py-20">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Advanced Risk Tools</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Comprehensive risk management tools to protect and optimize your trading strategy.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold">
            Manage Risk
          </button>
        </div>
      </main>
    </div>
  );
};

export default RiskManagement;
