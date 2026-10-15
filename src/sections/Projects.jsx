
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-16 mt-10">

      <h2 className="text-3xl md:text-4xl font-bold text-blue-500 text-center">
        My Projects
      </h2>

      <div className="mt-10 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* QuickBlog Project */}
        <div className="border rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">

          <h3 className="text-2xl font-bold">
            QuickBlog
          </h3>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
            QuickBlog is a blogging web application where
            administrators can create, manage, and publish
            blog posts. Users can read blogs and interact
            with published content.
          </p>

          <h4 className="mt-5 font-semibold">
            Technologies Used
          </h4>

          <div className="flex flex-wrap gap-2 mt-3">
            {[
              'Java',
              'Spring Boot',
              'React',
              'MySQL',
              'JWT',
              'Cloudinary',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full border border-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/vijayyadavp4082-max/QuickBlog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View on GitHub →
          </a>

        </div>

      </div>

    </section>
  );
};

export default Projects;
