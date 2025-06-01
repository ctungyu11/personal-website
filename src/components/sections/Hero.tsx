import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-orange-500">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8">
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