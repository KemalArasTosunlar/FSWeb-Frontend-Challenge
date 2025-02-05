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
            ? "Hi, I'm Almila. I'm a full stack developer. If you are looking for a developer who can bring your ideas to life with clean and efficient code, let's share ideas with me."
            : "Merhaba, ben Almila. Full stack geliştiriciyim. Fikirlerinizi temiz ve verimli kodlarla hayata geçirebilecek bir geliştirici arıyorsanız, fikirlerinizi benimle paylaşın."}
        </p>
        <div className="flex gap-4">
          <a 
            href="#" 
            className="bg-[#4731D3] text-white px-6 py-2 rounded-lg hover:bg-[#3a279e] transition-colors"
          >
            {language === 'en' ? 'Hire me' : 'İşe Al'}
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>Github</span>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>Linkedin</span>
          </a>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Profile"
          className="rounded-lg w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};