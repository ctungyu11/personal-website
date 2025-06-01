import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            I am a passionate developer with expertise in building modern web applications.
            My journey in technology has equipped me with a strong foundation in both
            frontend and backend development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>SQL / NoSQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Interests</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Web Development</li>
                <li>Cloud Computing</li>
                <li>AI/ML</li>
                <li>Open Source</li>
                <li>Tech Communities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 