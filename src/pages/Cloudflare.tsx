
import React from 'react';

const Cloudflare = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="trading-card p-12">
          <div className="mb-8">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-3xl font-bold text-slate-100 mb-4">
              Checking Your Connection
            </h1>
            <p className="text-slate-400 text-lg">
              Our security system is verifying your connection to ensure you're human.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <p className="text-slate-400 text-sm">
              This process is automatic. You will be redirected shortly.
            </p>
          </div>

          <div className="text-xs text-slate-500 border-t border-slate-700 pt-4">
            <p>Protected by CloudFlare Security</p>
            <p className="mt-1">Ray ID: 7d4f8a2b3c9e1f5g</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloudflare;
