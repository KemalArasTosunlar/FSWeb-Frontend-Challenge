import React from 'react';
import { useApp } from '../context/AppContext';

export const Header = () => {
  const { language, setLanguage, theme, setTheme } = useApp();

  const labels = {
    skills: { en: 'Skills', tr: 'Yetenekler' },
    projects: { en: 'Projects', tr: 'Projeler' },
    hireMe: { en: 'Hire Me', tr: 'Beni İşe Al' }
  };

  return (
    <header className="py-8 px-6">
      <div className="flex justify-end items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600"
          >
            <span
              className={`${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </button>
          {/* Burada butonun yanında yazıyı değiştirdim */}
          <span className="text-sm font-medium">
            {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
          </span>
        </div>
        <span className="text-gray-300">|</span>
        <button
          onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
          className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
        >
          {language === 'en' ? "TÜRKÇE'YE GEÇ" : 'SWITCH TO ENGLISH'}
        </button>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
            <span className="text-purple-600 dark:text-purple-400 text-xl font-semibold">A</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <nav className="flex gap-8">
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {labels.skills[language]}
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {labels.projects[language]}
            </a>
          </nav>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
            {labels.hireMe[language]}
          </button>
        </div>
      </div>
    </header>
  );
};
