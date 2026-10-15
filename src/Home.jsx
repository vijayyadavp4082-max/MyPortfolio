
import React from 'react'

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I'm Vijay Pratap Singh
      </h1>

      <h2 className="text-2xl mt-4 text-gray-600">
        Java Full Stack Developer
      </h2>

      <p className="mt-4 max-w-xl text-gray-500">
        I am learning Java, Spring Boot, React and SQL.
        I enjoy building web applications and improving my technical skills.
      </p>

      <div className="flex gap-4 mt-6">
        <a
          href="#projects"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-black px-6 py-3 rounded-lg"
        >
          Contact Me
        </a>
      </div>

    </section>
  )
}

export default Home
