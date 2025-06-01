import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card Template */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-gray-600 mb-4">
                Brief description of the project and its key features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Node.js
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Demo
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 font-medium"
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