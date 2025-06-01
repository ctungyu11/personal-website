'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`py-8 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className={`${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            © {new Date().getFullYear()} Anthony Chou. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 