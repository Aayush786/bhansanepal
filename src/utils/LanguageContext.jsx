import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Check local storage for saved preference, default to 'en'
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('bhansaLanguage') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('bhansaLanguage', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'np' : 'en');
  };

  // Helper to easily grab translated static texts
  const t = (key) => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
