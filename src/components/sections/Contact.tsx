import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-orange-500 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-orange-600 text-slate-200"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-orange-500 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-orange-600 text-slate-200"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-orange-500 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-orange-600 text-slate-200"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-orange-600/20"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Connect with Me</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-slate-200 hover:text-orange-500 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-slate-200 hover:text-orange-500 transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-slate-200 hover:text-orange-500 transition-colors duration-200"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 