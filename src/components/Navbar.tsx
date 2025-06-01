'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-900/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className={`text-xl font-bold ${
            theme === 'dark' ? 'text-orange-500' : 'text-orange-600'
          }`}>
            AC
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className={`${
              theme === 'dark' ? 'text-slate-200 hover:text-orange-500' : 'text-slate-700 hover:text-orange-600'
            } transition-colors duration-200`}>
              About
            </a>
            <a href="#projects" className={`${
              theme === 'dark' ? 'text-slate-200 hover:text-orange-500' : 'text-slate-700 hover:text-orange-600'
            } transition-colors duration-200`}>
              Projects
            </a>
            <a href="#resume" className={`${
              theme === 'dark' ? 'text-slate-200 hover:text-orange-500' : 'text-slate-700 hover:text-orange-600'
            } transition-colors duration-200`}>
              Resume
            </a>
            <a href="#contact" className={`${
              theme === 'dark' ? 'text-slate-200 hover:text-orange-500' : 'text-slate-700 hover:text-orange-600'
            } transition-colors duration-200`}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 