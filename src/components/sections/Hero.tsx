'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const { theme } = useTheme();
  const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const headers = [
    "CS & Math @ University of Michigan",
    "Backend Engineer",
    "Quantitative Developer",
    "NLP & Network Researcher"
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = headers[currentHeaderIndex];
    
    if (!isDeleting && displayText === currentText) {
      // Wait before starting to delete
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText === '') {
      // Move to next text after deletion
      setCurrentHeaderIndex((prev) => (prev + 1) % headers.length);
      setIsDeleting(false);
    } else {
      // Type or delete text
      const delta = isDeleting ? -1 : 1;
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + delta));
      }, isDeleting ? 50 : 100); // Faster deletion, slower typing
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentHeaderIndex, isDeleting]);

  return (
    <section className={`relative min-h-screen flex flex-col items-center justify-between py-20 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${
          theme === 'dark'
            ? 'from-orange-500/5 via-slate-900 to-slate-900'
            : 'from-orange-500/5 via-slate-50 to-slate-50'
        }`} />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${
            theme === 'dark'
              ? 'from-orange-500/20 via-transparent to-transparent'
              : 'from-orange-500/20 via-transparent to-transparent'
          }`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
            className="relative mb-12"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Animated rings */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: 360,
                }}
                transition={{
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-orange-500/30"
              />
              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: -360,
                }}
                transition={{
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-orange-500/20"
              />
              <Image
                src="/profile.png"
                alt="Anthony Chou"
                fill
                className="object-cover rounded-full drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={`text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r tracking-tight ${
                  theme === 'dark'
                    ? 'from-white to-orange-400'
                    : 'from-slate-900 to-orange-600'
                }`}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Anthony Chou
              </motion.h1>

              <div className="h-16 relative">
                <motion.p
                  className={`text-xl md:text-2xl font-medium tracking-wide ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-1 h-6 ml-1 bg-orange-500"
                  />
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative z-10"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`w-4 h-4 border-b-2 border-r-2 transform rotate-45 ${
                theme === 'dark' ? 'border-orange-500' : 'border-orange-600'
              }`}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 