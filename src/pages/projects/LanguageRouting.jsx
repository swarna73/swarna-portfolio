import React, { memo, useState, useEffect, useRef } from 'react';
import { ArrowLeft, ExternalLink, Github, Brain, Zap, Target, BarChart3, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// Constants to prevent recreation on every render
const STATS = [
  { label: 'Cases Processed Daily', value: '50+' },
  { label: 'Routing Success Rate', value: '100%' },
  { label: 'Processing Time', value: '125ms' },
  { label: 'Languages Supported', value: '5' }
];

const FEATURES = [
  {
    icon: <Brain className="w-12 h-12 text-blue-400" />,
    title: 'AI Language Detection',
    description: 'Advanced contextual analysis identifies customer language with 65% average confidence, going beyond simple keyword matching to understand intent and emotion.'
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-400" />,
    title: 'Real-Time Routing',
    description: 'Lightning-fast 125ms processing routes cases instantly to appropriate language-specific queues the moment they are created.'
  },
  {
    icon: <Target className="w-12 h-12 text-blue-400" />,
    title: 'Smart Fallback Logic',
    description: 'Confidence-based routing ensures low-certainty cases go to multilingual experts rather than making incorrect automated decisions.'
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-blue-400" />,
    title: 'Performance Analytics',
    description: 'Comprehensive dashboard provides real-time insights into routing performance, language trends, and system health monitoring.'
  }
];

const TECH_STACK = [
  { name: 'Salesforce Service Cloud', desc: 'Enterprise CRM Platform' },
  { name: 'Claude.ai API', desc: 'AI Language Processing' },
  { name: 'Apex & Lightning', desc: 'Backend Logic & UI' },
  { name: 'SOQL & Triggers', desc: 'Data Management' }
];

const IMPACT_METRICS = [
  { value: '60%', desc: 'Reduction in Resolution Time' },
  { value: '100%', desc: 'Automated Case Routing' },
  { value: '0', desc: 'Manual Interventions Required' },
  { value: '5', desc: 'Languages Supported' }
];

const LanguageRouting = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionRefs = useRef([]);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Intelligent Language Routing System - Swarnalatha Swaminathan</title>
      
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 focus:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-2 py-1 transition-all duration-200"
              aria-label="Back to main portfolio"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section ref={addToRefs} className="pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 transform rotate-12 scale-150"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent leading-tight">
                🧠 Intelligent Language Routing
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                AI-powered customer support automation that revolutionizes multilingual service delivery with enterprise-grade reliability
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
                {STATS.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800/80 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2 drop-shadow-lg">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://github.com/swarna73/salesforce-language-routing-service-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="View source code on GitHub"
                >
                  <Github size={20} />
                  <span className="font-medium">View Source Code</span>
                </a>
                <button 
                  className="flex items-center justify-center gap-2 border border-blue-500 text-blue-400 hover:bg-blue-500/10 focus:bg-blue-500/10 px-6 py-3 rounded-lg transition-all duration-200 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Live demo available in private Salesforce org"
                  title="Demo available in private Salesforce environment"
                >
                  <ExternalLink size={20} />
                  <span className="font-medium">Live Demo (Salesforce Org)</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Showcase */}
        <section ref={addToRefs} className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Live Dashboard in Action
            </h2>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 border border-blue-500/20 hover:border-blue-500/30 transition-colors duration-300">
              <div className="relative">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-xl flex items-center justify-center">
                    <div className="text-gray-400 flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                      Loading dashboard...
                    </div>
                  </div>
                )}
                <img 
                  src="/images/projects/language-routing-dashboard.png" 
                  alt="Language Routing Dashboard showing real-time metrics: 50 cases processed, 100% success rate, 65% confidence, 125ms processing time"
                  className={`w-full rounded-xl shadow-2xl border border-blue-500/30 transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(true)}
                  loading="lazy"
                />
              </div>
              <p className="text-center text-gray-400 mt-6 italic leading-relaxed">
                Real-time intelligence showing 50 cases processed with perfect accuracy across 5 languages
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section ref={addToRefs} className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Intelligent Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURES.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/80 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 group"
                >
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-100">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section ref={addToRefs} className="py-16 px-4 sm:px-6 bg-gray-800/30 relative">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TECH_STACK.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/60 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="font-semibold text-blue-400 mb-2 text-lg">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section ref={addToRefs} className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Business Impact
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {IMPACT_METRICS.map((metric, index) => (
                <div 
                  key={index} 
                  className="text-center bg-gray-800/80 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/40 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-4 drop-shadow-lg">
                    {metric.value}
                  </div>
                  <div className="text-gray-400 leading-relaxed">
                    {metric.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400 mb-4">
              Built with ❤️ by <span className="text-blue-400 font-medium">Swarnalatha Swaminathan</span>
            </p>
            <p className="text-sm text-gray-500">
              Developed by Swarnalatha Swaminathan | Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </footer>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 z-40"
            aria-label="Scroll back to top"
          >
            <ChevronUp size={24} />
          </button>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        /* Initial state for sections */
        section {
          opacity: 0;
          transform: translateY(20px);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default memo(LanguageRouting);
