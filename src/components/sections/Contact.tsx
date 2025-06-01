'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();

  return (
    <section id="contact" className={`py-20 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className={`block mb-2 font-medium ${
                theme === 'dark' ? 'text-orange-500' : 'text-orange-600'
              }`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-slate-800/50 border-slate-700/50 focus:border-orange-600'
                    : 'bg-white/50 border-slate-200/50 focus:border-orange-500'
                } border focus:outline-none`}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className={`block mb-2 font-medium ${
                theme === 'dark' ? 'text-orange-500' : 'text-orange-600'
              }`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-slate-800/50 border-slate-700/50 focus:border-orange-600'
                    : 'bg-white/50 border-slate-200/50 focus:border-orange-500'
                } border focus:outline-none`}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className={`block mb-2 font-medium ${
                theme === 'dark' ? 'text-orange-500' : 'text-orange-600'
              }`}>
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-slate-800/50 border-slate-700/50 focus:border-orange-600'
                    : 'bg-white/50 border-slate-200/50 focus:border-orange-500'
                } border focus:outline-none`}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-orange-600 hover:bg-orange-700 text-white hover:shadow-lg hover:shadow-orange-600/20'
                  : 'bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/20'
              }`}
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <h3 className={`text-xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-orange-500' : 'text-orange-600'
            }`}>
              Connect with me
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className={`text-2xl transition-colors duration-200 ${
                  theme === 'dark'
                    ? 'text-orange-500 hover:text-orange-400'
                    : 'text-orange-600 hover:text-orange-500'
                }`}
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="#"
                className={`text-2xl transition-colors duration-200 ${
                  theme === 'dark'
                    ? 'text-orange-500 hover:text-orange-400'
                    : 'text-orange-600 hover:text-orange-500'
                }`}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                className={`text-2xl transition-colors duration-200 ${
                  theme === 'dark'
                    ? 'text-orange-500 hover:text-orange-400'
                    : 'text-orange-600 hover:text-orange-500'
                }`}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 