import React from "react";
import "./App.css";
import { Typewriter } from "react-simple-typewriter";
import LeetCodeProgress from "./LeetCodeProgress";

export default function App() {
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
          <a href="#about" className="button">About</a>
          <a href="#projects" className="button">Projects</a>
          <a href="#resume" className="button">Resume</a>
          <a href="#contact" className="button">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="text-center py-20">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg">
          I'm an engineering manager with strong hands-on skills in Java, Spring Boot, React, and full-stack development.
        </p>
      </section>
<section id="projects" className="p-8">
  <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="project-card">
      <h3 className="text-xl font-bold mb-2">Expense Tracker</h3>
      <p>Java-based expense tracker to monitor and manage your expenses effectively.</p>
      <p className="text-sm text-gray-400 mt-1">Tech Stack: Java, RESTful API, JWT Authentication</p>
      <a href="https://github.com/swarna73/expense-manager" className="button mt-2 inline-block">View on GitHub</a>
    </div>

    <div className="project-card">
      <h3 className="text-xl font-bold mb-2">URL Shortener</h3>
      <p>A simple URL Shortener built with Node.js, Express, and MongoDB.</p>
      <p className="text-sm text-gray-400 mt-1">Tech Stack: Node.js, Express & MongoDB</p>
      <a href="https://github.com/swarna73/url-shortener-node-express" className="button mt-2 inline-block">View on GitHub</a>
    </div>

<div className="project-card">
  <h3 className="text-xl font-bold mb-2">Job Tracker</h3>
  <p>A React + Tailwind UI for tracking job applications. Connects to a Spring Boot backend.</p>
  <p className="text-sm text-gray-400 mt-1">
    Tech Stack: Java 17, Spring Boot, Spring Data JPA, H2 DB, Maven
  </p>
  <div className="flex flex-wrap gap-2 mt-2">
    <a href="https://github.com/swarna73/job-tracker-ui" className="button">Frontend</a>
    <a href="https://github.com/swarna73/job-tracker-backend" className="button">Backend</a>
  </div>
</div>

<div className="project-card">
  <h3 className="text-xl font-bold mb-2">Time Tracker</h3>
  <p>Full-stack micro-SaaS tool for freelancers to track their time and manage clients.</p>
  <p className="text-sm text-gray-400 mt-1">
    Tech Stack: Java, Spring Boot, JPA, H2, React, Tailwind CSS, JWT Auth
  </p>
  <div className="flex flex-wrap gap-2 mt-2">
    <a href="https://github.com/swarna73/timetrackr/tree/main/timetrackr-backend" className="button">Backend</a>
    <a href="https://github.com/swarna73/timetrackr/tree/main/timetrackr-frontend" className="button">Frontend</a>
  </div>
</div>
  </div>

</section>

<LeetCodeProgress />
      {/* Resume Section */}
      <section id="resume" className="text-center py-20">
        <h2 className="text-3xl font-semibold mb-4">Resume</h2>
        <a
          href="/Swarnalatha.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          View My Resume
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-20">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href="mailto:swarnalatha73@gmail.com" className="underline">swarnalathai73@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/swarna73" target="_blank" rel="noreferrer" className="underline">github.com/swarna73</a></p>
      </section>
    </div>
  );
}

