import React from 'react';
import './CurrentProject.css';

const CurrentProject = () => {
  const techStack = [
    'Node.js/Express',
    'Groq AI',
    'Llama-3.1-8B',
    'Email APIs',
    'React Frontend'
  ];

  const projectStats = [
    { number: '8', label: 'Email Categories' },
    { number: '95%+', label: 'Classification Accuracy' },
    { number: '75%', label: 'Response Time Reduction' }
  ];

  const developmentTimeline = [
    { status: 'complete', text: '✅ Email Parser & Categorization Engine' },
    { status: 'complete', text: '✅ Advanced Urgency Analysis System' },
    { status: 'complete', text: '✅ AI Response Generation (Multiple Templates)' },
    { status: 'progress', text: '🚧 Frontend Dashboard Interface' },
    { status: 'planned', text: '📋 Email Provider Integration (Gmail/Outlook)' },
    { status: 'planned', text: '📊 Analytics & Performance Dashboard' }
  ];

  return (
    <section className="current-project-spotlight">
      <div className="container">
        <div className="spotlight-badge">
          🤖 Currently Developing
        </div>
        
        <h2 className="spotlight-title">
          Intelligent Email Agent
        </h2>
        <p className="spotlight-subtitle">
          AI-powered email automation & intelligent response system
        </p>
        
        <div className="project-grid">
          <div className="project-info">
            <p className="project-description">
              Building an advanced email management system that automatically categorizes, prioritizes, and generates intelligent responses to emails using AI. Features smart urgency detection, relationship-aware responses, and multi-template generation. <span className="highlight-text">Currently integrating Groq AI APIs</span> with Llama-3.1-8B for context-aware automation.
            </p>
            
            <div className="tech-stack">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            
            <div className="project-stats">
              {projectStats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <div className="cta-buttons">
              <a 
                href="https://github.com/swarna73/intelligent-email-agent" 
                className="btn btn-primary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                📁 View Source Code
              </a>
              <a href="#projects" className="btn btn-secondary">
                🌐 View All Projects
              </a>
            </div>
          </div>
          
          <div className="project-visual">
            <h4>Development Progress</h4>
            
            <div className="development-timeline">
              {developmentTimeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className={`timeline-status status-${item.status}`}></div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="impact-highlight">
              <p>
                <strong>💡 Business Impact:</strong> Targeting 80% reduction in manual email processing time and 40% improvement in response quality through intelligent automation and context-aware AI responses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentProject;
