import React from "react";
import "./App.css";
import { Typewriter } from "react-simple-typewriter";

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

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 px-4">
          <div className="project-card">
            <h3 className="text-xl font-bold mb-2">TimeTrackr</h3>
            <p>Track time per client, manage entries, and generate summaries. Built with Spring Boot + React.</p>
          </div>
          <div className="project-card">
            <h3 className="text-xl font-bold mb-2">Contractify</h3>
            <p>Contract management platform with approval workflows and reminders.</p>
          </div>
        </div>
      </section>

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

