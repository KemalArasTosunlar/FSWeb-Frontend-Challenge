import React from 'react';
import { useApp } from '../context/AppContext';

export const Contact = () => {
  const { language } = useApp();

  return (
    <section className="py-16 px-6 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold">
            {language === 'en' 
              ? "Let's work together on\nyour next product."
              : "Bir sonraki ürününüzde\nbirlikte çalışalım."}
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✉</span>
              <a
                href="mailto:almilasucode@gmail.com"
                className="text-purple-600 hover:underline font-medium"
              >
                almilasucode@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600"
              >
                {language === 'en' ? 'Personal Blog' : 'Kişisel Blog'}
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600"
              >
                Github
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};