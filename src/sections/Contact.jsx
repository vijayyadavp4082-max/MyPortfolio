
import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-10 px-6 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-500 text-center">
        Contact Me
      </h2>

      <p className="mt-4 text-center text-lg">
        I am looking for opportunities to start my career
        in Java Full Stack Development.
      </p>

      <div className="mt-8 max-w-xl mx-auto border rounded-xl p-6 md:p-8 shadow-lg">

        {/* Email */}
        <p className="mb-5 break-words">
          <strong>Email:</strong>{' '}
          <a
            href="mailto:vijayyadavp4082@gmail.com"
            className="text-blue-500 hover:underline"
          >
            vijayyadavp4082@gmail.com
          </a>
        </p>

        {/* GitHub Profile */}
        <p className="mb-5">
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/vijayyadavp4082-max"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View My GitHub Profile
          </a>
        </p>

        {/* QuickBlog Project */}
        <p className="mb-5">
          <strong>Project:</strong>{' '}
          <a
            href="https://github.com/vijayyadavp4082-max/QuickBlog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            QuickBlog
          </a>
        </p>

        {/* Developer Role */}
        <p className="mb-5">
          <strong>Role:</strong> Java Full Stack Developer
        </p>

        {/* Social Profile Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">

          <a
            href="https://github.com/vijayyadavp4082-max"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-gray-700"
          >
            GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            LinkedIn Profile
          </a>

          <a
            href="mailto:vijayyadavp4082@gmail.com"
            className="rounded-lg border border-blue-500 px-5 py-3 font-medium text-blue-500 transition hover:bg-blue-500 hover:text-white"
          >
            Email Me
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
