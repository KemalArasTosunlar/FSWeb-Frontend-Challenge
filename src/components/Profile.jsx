import React from 'react';
import { useApp } from '../context/AppContext';
import { profile } from '../data/content';

export const Profile = () => {
  const { language } = useApp();

  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold mb-8">Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold mb-4">About Me</h3>
          <div className="space-y-2">
            <p><span className="font-semibold">Birth Date:</span> {profile.birthDate}</p>
            <p><span className="font-semibold">Birth Place:</span> {profile.birthPlace[language]}</p>
            <p><span className="font-semibold">Education:</span> {profile.education[language]}</p>
            <p><span className="font-semibold">Work Experience:</span> {profile.workExperience[language]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};