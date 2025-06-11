import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-16 text-lg">
        <span className="font-bold text-purple-400">Swarna</span>
        <div className="space-x-6">
          {['Home', 'Projects', 'About', 'Contact', 'Resume'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:underline underline-offset-8"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Hi, I’m Swarnalatha Swaminathan
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          <Typewriter
            words={[
              'Engineering Manager',
              'Full-Stack Developer',
              'Fintech Enthusiast'
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <p className="mt-6 max-w-xl mx-auto text-gray-400">
          I’m passionate about building scalable solutions and bridging the gap between product and engineering.
          Currently building personal projects in Spring Boot, React, and Node.js — check out what I’ve been working on!
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://github.com/swarna73" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded hover:bg-white hover:text-black transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/swarnalatha-swaminathan" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded hover:bg-white hover:text-black transition">
            LinkedIn
          </a>
        </div>
      </header>

      {/* Resume Section */}
      <section id="resume" className="mt-20 max-w-2xl mx-auto bg-neutral-900 p-6 rounded-xl border border-neutral-700 shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Resume</h2>
        <p className="text-center text-gray-400 mb-4">
          Download my resume to learn more about my experience and skills.
        </p>
        <div className="text-center">
          <a href="/Swarnalatha_Resume.pdf" target="_blank" className="text-blue-400 hover:underline">
            View Resume
          </a>
        </div>
      </section>
    </div>
  );
}
