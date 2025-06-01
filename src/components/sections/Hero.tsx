'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-900 text-slate-50' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-orange-500">
            Welcome to My Portfolio
          </h1>
          <p className={`text-xl md:text-2xl mb-8 ${
            theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
          }`}>
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-orange-600/20">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 