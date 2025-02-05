import React from 'react';
import { useApp } from '../context/AppContext';
import { projects } from '../data/content';

export const Projects = () => {
  const { language } = useApp();

  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description[language]}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors ">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                {language === 'en' ? 'View Site' : 'Siteyi Görüntüle'}
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline ml-4"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
