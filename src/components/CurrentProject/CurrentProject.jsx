import React from 'react';
import './CurrentProject.css';

const CurrentProject = () => {
  const techStack = [
    'Salesforce Service Cloud',
    'Einstein AI',
    'Apex',
    'Lightning Web Components',
    'Multi-language'
  ];

  const projectStats = [
    { number: '5', label: 'Languages Supported' },
    { number: '95%+', label: 'Test Coverage' },
    { number: '40%', label: 'Expected Efficiency Gain' }
  ];

  const developmentTimeline = [
    { status: 'complete', text: '✅ Data Architecture & Custom Objects' },
    { status: 'complete', text: '✅ Language Detection Service (AI Integration)' },
    { status: 'complete', text: '✅ Case Field Extensions & Tracking' },
    { status: 'progress', text: '🚧 Intelligent Routing Engine' },
    { status: 'planned', text: '📋 Flow Automation & Triggers' },
    { status: 'planned', text: '📊 Analytics Dashboard' }
  ];

  return (
    <section className="current-project-spotlight">
      <div className="container">
        <div className="spotlight-badge">
          🚧 Currently Developing
        </div>
        
        <h2 className="spotlight-title">
          Enterprise Salesforce Service Cloud
        </h2>
        <p className="spotlight-subtitle">
          AI-powered language detection & intelligent case routing system
        </p>
        
        <div className="project-grid">
          <div className="project-info">
            <p className="project-description">
              Building an enterprise-grade Service Cloud solution that automatically detects customer communication language and routes cases to agents with matching language skills. <span className="highlight-text">Currently integrating Einstein Language APIs</span> for intelligent automation.
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
                href="https://github.com/swarna73/salesforce-language-routing-service-cloud" 
                className="btn btn-primary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                📖 View Source Code
              </a>
              <a href="#projects" className="btn btn-secondary">
                🔍 View All Projects
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
                <strong>💡 Business Impact:</strong> Targeting 60% reduction in multilingual case resolution time and 25% improvement in customer satisfaction through native language support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentProject;
