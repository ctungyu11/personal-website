'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const Resume = () => {
  const { theme } = useTheme();

  return (
    <section id="resume" className={`py-20 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Resume</h2>
        
        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-orange-500">Experience</h3>
          <div className="space-y-8">
            {/* Experience Item */}
            <div className={`p-6 rounded-lg border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-orange-600'
                : 'bg-white/50 backdrop-blur-sm border-slate-200/50 hover:border-orange-500'
            }`}>
              <h4 className="text-xl font-semibold mb-2 text-orange-500">Senior Developer</h4>
              <p className={`mb-2 ${
                theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
              }`}>Company Name • 2020 - Present</p>
              <ul className={`list-disc list-inside space-y-2 ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <li>Key responsibility or achievement</li>
                <li>Another significant contribution</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-orange-500">Education</h3>
          <div className="space-y-8">
            {/* Education Item */}
            <div className={`p-6 rounded-lg border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-orange-600'
                : 'bg-white/50 backdrop-blur-sm border-slate-200/50 hover:border-orange-500'
            }`}>
              <h4 className="text-xl font-semibold mb-2 text-orange-500">Bachelor&apos;s Degree</h4>
              <p className={`mb-2 ${
                theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
              }`}>University Name • 2016 - 2020</p>
              <p className={`${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}>Major in Computer Science</p>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            download
            className={`inline-block px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-orange-600 hover:bg-orange-700 text-white hover:shadow-lg hover:shadow-orange-600/20'
                : 'bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/20'
            }`}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume; 