import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700/50 hover:border-orange-600/30 transition-colors duration-300">
            <p className="text-slate-200 mb-6">
              I am a passionate Full Stack Developer with a strong foundation in web technologies
              and a keen eye for creating elegant solutions to complex problems.
            </p>
            <p className="text-slate-200 mb-6">
              With expertise in both front-end and back-end development, I strive to build
              applications that are not only functional but also provide an exceptional
              user experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-500">Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-200">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Front-end Development
                  </li>
                  <li className="flex items-center text-slate-200">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Back-end Development
                  </li>
                  <li className="flex items-center text-slate-200">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Database Management
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-500">Interests</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-200">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Web Development
                  </li>
                  <li className="flex items-center text-slate-200">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    UI/UX Design
                  </li>
                  <li className="flex items-center text-slate-200">
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