import React from 'react';
import { useApp } from '../context/AppContext';
import { projects, sectionLabels } from '../data/content';

export const Projects = () => {
  const { language } = useApp();

  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-left">{sectionLabels[language].projects}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col items-center text-center">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
            <div className="p-4 w-full">
              <h3 className="text-xl font-bold text-[#4731D3]">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-left">
                {project.description[language]}
              </p>
              <div className="flex flex-wrap justify-start gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm font-medium text-[#4731D3] border border-[#4731D3] rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-start gap-6 mt-4">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#4731D3] font-medium hover:underline">
                  GitHub
                </a>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-[#4731D3] font-medium hover:underline">
                  {language === 'en' ? 'View Site' : 'Siteyi Görüntüle'}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};