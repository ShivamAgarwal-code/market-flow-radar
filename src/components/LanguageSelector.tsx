
import React, { useState } from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage, availableLanguages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = availableLanguages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
      >
        {currentLanguage?.flag && <span className="text-sm">{currentLanguage.flag}</span>}
        <Globe size={16} />
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <ChevronDown size={14} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-50">
          <div className="py-2">
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  language === lang.code
                    ? 'bg-blue-500/20 text-blue-300'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {lang.flag && <span>{lang.flag}</span>}
                  <span>{lang.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
