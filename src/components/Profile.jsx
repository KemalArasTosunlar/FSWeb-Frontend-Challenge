import React from 'react';
import { useApp } from '../context/AppContext';
import { profile, sectionLabels } from '../data/content';

export const Profile = () => {
  const { language } = useApp();

  const labels = {
    birthDate: { en: 'Birth Date', tr: 'Doğum tarihi' },
    birthPlace: { en: 'Birth Place', tr: 'İkamet Şehri' },
    education: { en: 'Education', tr: 'Eğitim Durumu' },
    workExperience: { en: 'Preferred Role', tr: 'Tercih Ettiği Rol' }
  };

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-12">{sectionLabels[language].profile}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl text-[#4731D3] font-medium mb-8">{sectionLabels[language].profile}</h3>
          <div className="space-y-6">
            <p>
              <span className="font-bold">{labels.birthDate[language]}</span>
              <span className="mx-2">:</span>
              {profile.birthDate}
            </p>
            <p>
              <span className="font-bold">{labels.birthPlace[language]}</span>
              <span className="mx-2">:</span>
              {profile.birthPlace[language]}
            </p>
            <p>
              <span className="font-bold">{labels.education[language]}</span>
              <span className="mx-2">:</span>
              <span className="whitespace-pre-line">{profile.education[language]}</span>
            </p>
            <p>
              <span className="font-bold">{labels.workExperience[language]}</span>
              <span className="mx-2">:</span>
              {profile.workExperience[language]}
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl text-[#4731D3] font-medium mb-8">{sectionLabels[language].aboutMe}</h3>
          <div className="space-y-4">
            {profile.about[language].map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <hr style={{ borderColor: '#BAB2E7', borderWidth: '1px', borderStyle: 'solid' }} className="my-8" />
    </section>
  );
};
