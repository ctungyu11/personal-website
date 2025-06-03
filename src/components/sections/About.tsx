'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className={`min-h-screen py-20 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Who I Am */}
          <div 
            className={`space-y-6 p-10 rounded-2xl border-2 transition-all duration-300 ${
              theme === 'dark' 
                ? 'border-orange-500/20 hover:border-orange-500/40 bg-slate-800/50 shadow-lg shadow-orange-500/5' 
                : 'border-orange-500/20 hover:border-orange-500/40 bg-white/80 shadow-lg shadow-orange-500/5'
            }`}
          >
            <h2 className={`text-4xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Who I Am
            </h2>
            <p className={`text-xl leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Hi, I&apos;m Anthony Chou — a senior undergraduate at the University of Michigan majoring in Computer Science and Mathematics. 
              I&apos;m currently working as a <span className="font-semibold text-orange-500">backend developer intern at DA Capital</span>, 
              a crypto trading startup, and as an <span className="font-semibold text-orange-500">undergraduate researcher at Blablablab</span>, 
              guided by Professor David Jurgens.
            </p>
          </div>

          {/* What I Work On */}
          <div 
            className={`space-y-6 p-10 rounded-2xl border-2 transition-all duration-300 ${
              theme === 'dark' 
                ? 'border-orange-500/20 hover:border-orange-500/40 bg-slate-800/50 shadow-lg shadow-orange-500/5' 
                : 'border-orange-500/20 hover:border-orange-500/40 bg-white/80 shadow-lg shadow-orange-500/5'
            }`}
          >
            <h2 className={`text-4xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              What I Work On
            </h2>
            <div className={`space-y-6 text-xl leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <p>
                At <span className="font-semibold text-orange-500">DA Capital</span>, I help design and build real-time infrastructure 
                for executing crypto trading strategies and backend infrastructure.
              </p>
              <p>
                At the <span className="font-semibold text-orange-500">University of Michigan</span>, I research podcast networks — 
                analyzing how hosts and guests form dynamic social structures and influence flows using 
                <span className="font-semibold text-orange-500"> natural language processing</span> and 
                <span className="font-semibold text-orange-500"> network science</span>. Our work spans speaker modeling, 
                prestige estimation, and longitudinal interaction graphs.
              </p>
            </div>
          </div>

          {/* What Drives Me */}
          <div 
            className={`space-y-6 p-10 rounded-2xl border-2 transition-all duration-300 ${
              theme === 'dark' 
                ? 'border-orange-500/20 hover:border-orange-500/40 bg-slate-800/50 shadow-lg shadow-orange-500/5' 
                : 'border-orange-500/20 hover:border-orange-500/40 bg-white/80 shadow-lg shadow-orange-500/5'
            }`}
          >
            <h2 className={`text-4xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              What Drives Me
            </h2>
            <div className={`space-y-6 text-xl leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <p>
                I love building backend systems that are <span className="font-semibold text-orange-500">clean, scalable, and intelligent</span>. 
                Whether optimizing a trading engine or analyzing social signals from language, I&apos;m drawn to problems that require both 
                precision and creativity.
              </p>
              <p>
                Outside of engineering, I&apos;ve spent serious time working through <span className="font-semibold text-orange-500">abstract math</span> 
                — like modern algebra and analysis — not because it&apos;s easy, but because learning to reason at a deep level helps me grow 
                as both a thinker and builder.
              </p>
            </div>
          </div>

          {/* What's Next */}
          <div 
            className={`space-y-6 p-10 rounded-2xl border-2 transition-all duration-300 ${
              theme === 'dark' 
                ? 'border-orange-500/20 hover:border-orange-500/40 bg-slate-800/50 shadow-lg shadow-orange-500/5' 
                : 'border-orange-500/20 hover:border-orange-500/40 bg-white/80 shadow-lg shadow-orange-500/5'
            }`}
          >
            <h2 className={`text-4xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              What&apos;s Next
            </h2>
            <div className={`space-y-6 text-xl leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <p>This summer, I&apos;m focusing on:</p>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>Scaling my <span className="font-semibold text-orange-500">crypto strategy infrastructure</span></li>
                <li>Advancing my <span className="font-semibold text-orange-500">podcast guest network research</span></li>
                <li>Learning <span className="font-semibold text-orange-500">stochastic calculus and statistics</span> for use in quantitative modeling</li>
              </ul>
              <p>
                In the future, I hope to work at the intersection of <span className="font-semibold text-orange-500">backend infrastructure</span>, 
                <span className="font-semibold text-orange-500"> quantitative development</span>, and 
                <span className="font-semibold text-orange-500"> computational social science</span> — building systems that generate 
                real-world impact from rigorous design and thoughtful analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 