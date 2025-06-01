import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Resume</h2>
        <div className="max-w-4xl mx-auto">
          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-orange-500">Experience</h3>
            <div className="space-y-8">
              <div className="border-l-4 border-orange-600 pl-4 hover:border-orange-500 transition-colors duration-200">
                <h4 className="text-xl font-medium text-orange-500">Senior Developer</h4>
                <p className="text-slate-200">Company Name • 2020 - Present</p>
                <ul className="list-disc list-inside text-slate-200 mt-2">
                  <li>Key responsibility or achievement</li>
                  <li>Another significant contribution</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-orange-500">Education</h3>
            <div className="space-y-8">
              <div className="border-l-4 border-orange-600 pl-4 hover:border-orange-500 transition-colors duration-200">
                <h4 className="text-xl font-medium text-orange-500">Bachelor&apos;s Degree</h4>
                <p className="text-slate-200">University Name • 2016 - 2020</p>
                <p className="text-slate-200 mt-2">
                  Major in Computer Science
                </p>
              </div>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-orange-600/20"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 