import React from 'react';
import { useApp } from '../context/AppContext';
import { Moon, Sun, Globe } from 'lucide-react';

export const Header = () => {
  const { language, setLanguage, theme, setTheme } = useApp();

  return (
    <header className="flex justify-between items-center py-4 px-6">
      <div className="text-xl font-bold">Kemal Aras Tosunlar</div>
      <div className="flex gap-4">
        <button
          onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Globe className="w-5 h-5" />
        </button>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  );
};