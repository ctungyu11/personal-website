'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const Projects = () => {
  const { theme } = useTheme();

  return (
    <section id="projects" className={`py-20 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card Template */}
          <div className={`rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border ${
            theme === 'dark'
              ? 'bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-orange-600/30'
              : 'bg-white/50 backdrop-blur-sm border-slate-200/50 hover:border-orange-500/30'
          }`}>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-orange-500">Project Name</h3>
              <p className={`mb-4 ${
                theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
              }`}>
                Brief description of the project and its key features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm border ${
                  theme === 'dark'
                    ? 'bg-orange-600/20 text-orange-400 border-orange-600/30'
                    : 'bg-orange-500/20 text-orange-600 border-orange-500/30'
                }`}>
                  React
                </span>
                <span className={`px-3 py-1 rounded-full text-sm border ${
                  theme === 'dark'
                    ? 'bg-orange-600/20 text-orange-400 border-orange-600/30'
                    : 'bg-orange-500/20 text-orange-600 border-orange-500/30'
                }`}>
                  Node.js
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className={`font-medium transition-colors duration-200 ${
                    theme === 'dark'
                      ? 'text-orange-500 hover:text-orange-400'
                      : 'text-orange-600 hover:text-orange-500'
                  }`}
                >
                  View Demo
                </a>
                <a
                  href="#"
                  className={`font-medium transition-colors duration-200 ${
                    theme === 'dark'
                      ? 'text-orange-500 hover:text-orange-400'
                      : 'text-orange-600 hover:text-orange-500'
                  }`}
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 