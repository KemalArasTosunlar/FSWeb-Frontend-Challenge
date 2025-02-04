import React from 'react';
import { useApp } from '../context/AppContext';

export const Contact = () => {
  const { language } = useApp();

  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold mb-8">
        {language === 'en' 
          ? "Let's work together on your next product."
          : "Bir sonraki ürününüzde birlikte çalışalım."}
      </h2>
      <a
        href="mailto:ahmetsu@example.com"
        className="text-purple-600 dark:text-purple-400 hover:underline"
      >
        ahmetsu@example.com
      </a>
    </section>
  );
};