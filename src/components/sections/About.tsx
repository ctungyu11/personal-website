'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className={`py-20 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className={`rounded-lg p-8 border transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-orange-600/30' 
              : 'bg-white/50 backdrop-blur-sm border-slate-200/50 hover:border-orange-500/30'
          }`}>
            <p className={`mb-6 ${
              theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
            }`}>
              I am a passionate Full Stack Developer with a strong foundation in web technologies
              and a keen eye for creating elegant solutions to complex problems.
            </p>
            <p className={`mb-6 ${
              theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
            }`}>
              With expertise in both front-end and back-end development, I strive to build
              applications that are not only functional but also provide an exceptional
              user experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-500">Skills</h3>
                <ul className="space-y-2">
                  <li className={`flex items-center ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Front-end Development
                  </li>
                  <li className={`flex items-center ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Back-end Development
                  </li>
                  <li className={`flex items-center ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Database Management
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-500">Interests</h3>
                <ul className="space-y-2">
                  <li className={`flex items-center ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Web Development
                  </li>
                  <li className={`flex items-center ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    UI/UX Design
                  </li>
                  <li className={`flex items-center ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Cloud Computing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 