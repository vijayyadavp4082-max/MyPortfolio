
import React from 'react';
import Navbar from './components/Navbar';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">

      {/* Navbar */}
      <Navbar />


{/* Home Section */}
<section
  id="home"
  className="flex min-h-[75vh] flex-col items-center justify-center px-6 py-20 text-center"
>
  <p className="rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-500">
    Welcome to My Portfolio
  </p>

  <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
    Hi, I'm <span className="text-blue-500">Vijay Pratap Singh</span>
  </h1>

  <h2 className="mt-5 text-xl font-semibold sm:text-2xl">
    Java Full Stack Developer
  </h2>

  <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
    I build web applications using Java, Spring Boot,
    React, and SQL. I enjoy learning new technologies
    and solving programming problems.
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-4">
    <a
      href="#projects"
      className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
    >
      View My Projects →
    </a>

    <a
      href="#contact"
      className="rounded-lg border border-blue-500 px-6 py-3 font-semibold text-blue-500 transition hover:bg-blue-500 hover:text-white"
    >
      Contact Me
    </a>
  </div>

  <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
    {['Java', 'Spring Boot', 'React', 'SQL'].map((skill) => (
      <span
        key={skill}
        className="rounded-full border px-4 py-2"
      >
        {skill}
      </span>
    ))}
  </div>
</section>


      {/* Skills Section */}
      <section
        id="skills"
        className="mt-10 px-6 py-10"
      >
        <h2 className="text-3xl font-bold text-blue-500 text-center">
          My Skills
        </h2>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            'Java',
            'Spring Boot',
            'React',
            'JavaScript',
            'SQL',
            'MySQL',
            'HTML',
            'CSS',
            'Bootstrap',
            'REST APIs',
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-lg border px-4 py-2 font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

     
{/* About Section */}
<section
  id="about"
  className="mt-10 px-6 py-16"
>
  <h2 className="text-3xl md:text-4xl font-bold text-blue-500 text-center">
    About Me
  </h2>

  <div className="mx-auto mt-8 max-w-3xl rounded-xl border p-6 md:p-8 shadow-lg">
    <p className="text-lg leading-8">
      Hello! I am Vijay Pratap Singh, a B.Sc. graduate
      interested in Java Full Stack Development.
      I am currently learning Java, Spring Boot, React,
      and SQL to improve my technical skills.
    </p>

    <p className="mt-4 text-lg leading-8">
      I have developed QuickBlog, a blogging web application
      using React, Spring Boot, MySQL, and JWT.
      I enjoy learning new technologies, solving problems,
      and building useful web applications.
    </p>

    <p className="mt-4 text-lg leading-8">
      My goal is to start my career in the IT industry
      and grow as a skilled Java Full Stack Developer.
    </p>
  </div>
</section>


      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="mt-10 border-t px-6 py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Vijay | My Portfolio
        </p>

        <p className="mt-2 text-sm">
          Built with React and Tailwind CSS
        </p>
      </footer>

    </div>
  );
};

export default App;
