import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card Template */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-700/50 hover:border-orange-600/30">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-orange-500">Project Name</h3>
              <p className="text-slate-200 mb-4">
                Brief description of the project and its key features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-sm border border-orange-600/30">
                  React
                </span>
                <span className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-sm border border-orange-600/30">
                  Node.js
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-400 font-medium transition-colors duration-200"
                >
                  View Demo
                </a>
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-400 font-medium transition-colors duration-200"
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