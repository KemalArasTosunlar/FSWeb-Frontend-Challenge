import React from 'react';
import { useApp } from '../context/AppContext';
import { skills, sectionLabels } from '../data/content';

export const Skills = () => {
  const { language } = useApp();

  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold mb-8">{sectionLabels[language].skills}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {skill.description[language]}
            </p>
          </div>
        ))}
      </div>
      <hr style={{ borderColor: '#BAB2E7', borderWidth: '1px', borderStyle: 'solid' }} className="my-8" />
    </section>
  );
};
