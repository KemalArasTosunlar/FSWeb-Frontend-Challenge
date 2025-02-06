import React from 'react';
import { useApp } from '../context/AppContext';

export const Contact = () => {
  const { language } = useApp();

  return (
    <footer className="w-full bg-[#F9F9F9] dark:bg-gray-800">
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white whitespace-pre-line">
              {language === 'en' 
                ? "Let's work together on\nyour next product."
                : "Bir sonraki ürününüzde\nbirlikte çalışalım."}
            </h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">👉</span>
                <a
                  href="mailto:kemaltosunlar@hotmail.com"
                  className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
                >
                  kemaltosunlar@hotmail.com
                </a>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  {language === 'en' ? 'Personal Blog' : 'Kişisel Blog'}
                </a>
                <a
                  href="https://github.com/KemalArasTosunlar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300"
                >
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/kemal-tosunlar-47327270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};