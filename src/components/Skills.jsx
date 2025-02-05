import React from 'react';
import { useApp } from '../context/AppContext';
import { skills, sectionLabels } from '../data/content';

export const Skills = () => {
  const { language } = useApp();

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-12">{sectionLabels[language].skills}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
        {skills.map((skill) => (
          <div key={skill.name} className="p-4">
            <h3 className="text-xl text-[#4731D3] font-medium mb-2">{skill.name}</h3>
            <p className="text-gray-600">
              {skill.description[language]}
            </p>
          </div>
        ))}
      </div>
      <hr className="my-8 border-t border-[#BAB2E7]" />
    </section>
  );
};
