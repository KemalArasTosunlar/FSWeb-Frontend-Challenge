import React from 'react';
import { useApp } from '../context/AppContext';
import { Github, Linkedin } from 'lucide-react';

export const Hero = () => {
  const { language } = useApp();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-6">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">
          Creative thinker<br />
          Minimalism lover
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {language === 'en' 
            ? "Hi, I'm Kemal. I'm a full stack developer. If you are looking for a developer who can bring your ideas to life with clean and efficient code, let's share ideas with me."
            : "Merhaba, ben Kemal. Full stack geliştiriciyim. Fikirlerinizi temiz ve verimli kodlarla hayata geçirebilecek bir geliştirici arıyorsanız, fikirlerinizi benimle paylaşın."}
        </p>
        <div className="flex gap-4">
          <a href="#" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
            {language === 'en' ? 'Hire me' : 'İşe Al'}
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4"
          alt="Profile"
          className="rounded-lg w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};