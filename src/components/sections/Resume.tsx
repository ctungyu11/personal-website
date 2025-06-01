import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Resume</h2>
        <div className="max-w-4xl mx-auto">
          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-xl font-medium">Senior Developer</h4>
                <p className="text-gray-600">Company Name • 2020 - Present</p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Key responsibility or achievement</li>
                  <li>Another significant contribution</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-xl font-medium">Bachelor&apos;s Degree</h4>
                <p className="text-gray-600">University Name • 2016 - 2020</p>
                <p className="text-gray-700 mt-2">
                  Major in Computer Science
                </p>
              </div>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
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