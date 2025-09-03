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
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Time Tracker Project */}
            <div className="project-showcase-card">
              <div className="project-badge">
                Full-Stack SaaS
              </div>
              
              <h3 className="project-title">Time Tracker</h3>
              <p className="project-subtitle">Micro-SaaS tool for freelancers</p>
              
              <p className="project-description">
                Full-stack micro-SaaS application designed for freelancers to efficiently track their time and manage client relationships. Features comprehensive time logging, client management, and reporting capabilities.
              </p>
              
              <div className="tech-stack-grid">
                <span className="tech-tag">Java 17</span>
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">JPA</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">JWT Auth</span>
              </div>
              
              <div className="project-stats-mini">
                <div className="stat-mini">
                  <span className="stat-number-mini">Full-Stack</span>
                  <span className="stat-label-mini">Architecture</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-number-mini">JWT</span>
                  <span className="stat-label-mini">Authentication</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-number-mini">SaaS</span>
                  <span className="stat-label-mini">Ready</span>
                </div>
              </div>
              
              <div className="project-buttons">
                <a 
                  href="https://github.com/swarna73/timetrackr/tree/main/timetrackr-backend" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project-primary"
                >
                  Backend Code
                </a>
                <a 
                  href="https://github.com/swarna73/timetrackr/tree/main/timetrackr-frontend" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project-secondary"
                >
                  Frontend Code
                </a>
              </div>
            </div>

            {/* Language Routing Project */}
            <div className="project-showcase-card">
              <div className="project-badge">
                Interactive App
              </div>
              
              <h3 className="project-title">Language Routing</h3>
              <p className="project-subtitle">Dynamic content routing system</p>
              
              <p className="project-description">
                Interactive language routing application with dynamic content delivery. Features intelligent routing based on user preferences and seamless navigation between different language contexts.
              </p>
              
              <div className="tech-stack-grid">
                <span className="tech-tag">React</span>
                <span className="tech-tag">React Router</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">CSS3</span>
              </div>
              
              <div className="project-stats-mini">
                <div className="stat-mini">
                  <span className="stat-number-mini">Multi</span>
                  <span className="stat-label-mini">Language</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-number-mini">Dynamic</span>
                  <span className="stat-label-mini">Routing</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-number-mini">React</span>
                  <span className="stat-label-mini">Based</span>
                </div>
              </div>
              
              <div className="project-buttons">
                <a 
                  href="/projects/language-routing" 
                  className="btn-project-primary"
                >
                  View Live Demo
                </a>
                <a 
                  href="https://github.com/swarna73/salesforce-language-routing-service-cloud/tree/main/Salesforce/language-routing-service-cloud" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project-secondary"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Intelligent Email Agent - Full Width Spotlight */}
          <div className="project-showcase-card-wide">
            <div className="project-badge-special">
              AI-Powered
            </div>
            
            <div className="project-wide-content">
              <div className="project-wide-info">
                <h3 className="project-title-large">Intelligent Email Agent</h3>
                <p className="project-subtitle-large">Advanced AI email automation system</p>
                
                <p className="project-description-large">
                  Cutting-edge email management system powered by Groq AI and Llama-3.1-8B model. Features intelligent categorization, urgency analysis, relationship-aware response generation, and multi-template automation for enhanced productivity.
                </p>
                
                <div className="tech-stack-grid-large">
                  <span className="tech-tag-large">Node.js/Express</span>
                  <span className="tech-tag-large">Groq AI</span>
                  <span className="tech-tag-large">Llama-3.1-8B</span>
                  <span className="tech-tag-large">Email APIs</span>
                  <span className="tech-tag-large">React</span>
                </div>
                
                <div className="project-buttons-large">
                  <a 
                    href="https://github.com/swarna73/intelligent-email-agent" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project-primary-large"
                  >
                    View Source Code
                  </a>
                  <a 
                    href="#" 
                    className="btn-project-secondary-large"
                  >
                    Documentation
                  </a>
                </div>
              </div>
              
              <div className="project-wide-stats">
                <div className="stat-card-large">
                  <span className="stat-number-large">8</span>
                  <span className="stat-label-large">Email Categories</span>
                </div>
                <div className="stat-card-large">
                  <span className="stat-number-large">95%+</span>
                  <span className="stat-label-large">AI Accuracy</span>
                </div>
                <div className="stat-card-large">
                  <span className="stat-number-large">75%</span>
                  <span className="stat-label-large">Time Saved</span>
                </div>
              </div>
            </div>
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
