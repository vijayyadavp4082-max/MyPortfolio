
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkTheme);
  }, [darkTheme]);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 mx-3 mt-3 rounded-xl border bg-white px-4 py-4 shadow-md dark:bg-gray-900">

      <div className="flex flex-wrap items-center justify-between gap-4">

        <a
          href="#home"
          className="text-2xl font-bold text-blue-500"
        >
          MyPortfolio
        </a>

        <button
          type="button"
          onClick={() => setDarkTheme((previous) => !previous)}
          className="rounded-lg border px-3 py-2 transition-colors hover:bg-blue-500 hover:text-white"
        >
          {darkTheme ? '☀️ Light' : '🌙 Dark'}
        </button>

      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-3 font-medium md:mt-0 md:justify-end">

        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="transition-colors hover:text-blue-500"
          >
            {link.name}
          </a>
        ))}

      </div>

    </nav>
  );
};

export default Navbar;
