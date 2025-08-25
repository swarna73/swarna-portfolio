import React from "react";
import "./App.css";
import { Typewriter } from "react-simple-typewriter";
import LeetCodeProgress from "./LeetCodeProgress";
import CurrentProject from './components/CurrentProject/CurrentProject';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LanguageRouting from './pages/projects/LanguageRouting';
import { Analytics } from '@vercel/analytics/react';

// Main Portfolio Component
function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="typewriter">
            <Typewriter words={["Swarnalatha Swaminathan"]} cursor loop={1} />
          </span>
        </h1>
        <nav className="mt-6 space-x-6">
          <a href="#about" className="button hover:opacity-80 transition-opacity">About</a>
          <a href="#projects" className="button hover:opacity-80 transition-opacity">Projects</a>
          <a href="#resume" className="button hover:opacity-80 transition-opacity">Resume</a>
          <a href="#contact" className="button hover:opacity-80 transition-opacity">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="text-center py-20 px-4">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          I am a passionate software builder who loves working with Java, Spring Boot, and React.
          I enjoy crafting scalable, efficient solutions and exploring new technologies.
        </p>
      </section>

      {/* Current Project Spotlight */}
      <CurrentProject />

      {/* Projects Section */}
      <section id="projects" className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          
          {/* Expense Tracker */}
          <div className="project-card">
            <h3 className="text-xl font-bold mb-2">Expense Tracker</h3>
            <p className="mb-3">Java-based expense tracker to monitor and manage your expenses effectively.</p>
            <p className="text-sm text-gray-400 mb-3">Tech Stack: Java, RESTful API, JWT Authentication</p>
            <a 
              href="https://github.com/swarna73/expense-manager" 
              target="_blank"
              rel="noopener noreferrer"
              className="button mt-2 inline-block hover:opacity-80 transition-opacity"
            >
              View on GitHub
            </a>
          </div>

          {/* URL Shortener */}
          <div className="project-card">
            <h3 className="text-xl font-bold mb-2">URL Shortener</h3>
            <p className="mb-3">A simple URL Shortener built with Node.js, Express, and MongoDB.</p>
            <p className="text-sm text-gray-400 mb-3">Tech Stack: Node.js, Express & MongoDB</p>
            <a 
              href="https://github.com/swarna73/url-shortener-node-express" 
              target="_blank"
              rel="noopener noreferrer"
              className="button mt-2 inline-block hover:opacity-80 transition-opacity"
            >
              View on GitHub
            </a>
          </div>

          {/* Job Tracker */}
          <div className="project-card">
            <h3 className="text-xl font-bold mb-2">Job Tracker</h3>
            <p className="mb-3">A React + Tailwind UI for tracking job applications. Connects to a Spring Boot backend.</p>
            <p className="text-sm text-gray-400 mb-3">
              Tech Stack: Java 17, Spring Boot, Spring Data JPA, H2 DB, Maven
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a 
                href="https://github.com/swarna73/job-tracker-ui" 
                target="_blank"
                rel="noopener noreferrer"
                className="button hover:opacity-80 transition-opacity"
              >
                Frontend
              </a>
              <a 
                href="https://github.com/swarna73/job-tracker-backend" 
                target="_blank"
                rel="noopener noreferrer"
                className="button hover:opacity-80 transition-opacity"
              >
                Backend
              </a>
            </div>
          </div>

          {/* Time Tracker */}
          <div className="project-card">
            <h3 className="text-xl font-bold mb-2">Time Tracker</h3>
            <p className="mb-3">Full-stack micro-SaaS tool for freelancers to track their time and manage clients.</p>
            <p className="text-sm text-gray-400 mb-3">
              Tech Stack: Java, Spring Boot, JPA, H2, React, Tailwind CSS, JWT Auth
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a 
                href="https://github.com/swarna73/timetrackr/tree/main/timetrackr-backend" 
                target="_blank"
                rel="noopener noreferrer"
                className="button hover:opacity-80 transition-opacity"
              >
                Backend
              </a>
              <a 
                href="https://github.com/swarna73/timetrackr/tree/main/timetrackr-frontend" 
                target="_blank"
                rel="noopener noreferrer"
                className="button hover:opacity-80 transition-opacity"
              >
                Frontend
              </a>
            </div>
          </div>

          {/* Language Routing Project */}
          <div className="project-card">
            <h3 className="text-xl font-bold mb-2">Language Routing</h3>
            <p className="mb-3">Interactive language routing application with dynamic content.</p>
            <p className="text-sm text-gray-400 mb-3">Tech Stack: React, React Router</p>
            <a 
              href="/projects/language-routing" 
              className="button mt-2 inline-block hover:opacity-80 transition-opacity"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* LeetCode Progress */}
      <LeetCodeProgress />

      {/* Resume Section */}
      <section id="resume" className="text-center py-20 px-4">
        <h2 className="text-3xl font-semibold mb-4">Resume</h2>
        <a
          href="/Swarnalatha.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button hover:opacity-80 transition-opacity"
        >
          View My Resume
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-20 px-4">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <div className="space-y-3">
          <p className="text-lg">
            Email: <a 
              href="mailto:swarnalatha73@gmail.com" 
              className="underline hover:text-blue-400 transition-colors"
            >
              swarnalatha73@gmail.com
            </a>
          </p>
          <p className="text-lg">
            GitHub: <a 
              href="https://github.com/swarna73" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:text-blue-400 transition-colors"
            >
              github.com/swarna73
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

// Main App Component with Routing
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects/language-routing" element={<LanguageRouting />} />
        {/* Add more routes here as needed */}
      </Routes>
      {/* Analytics component added here to track all routes */}
      <Analytics />
    </Router>
  );
}
