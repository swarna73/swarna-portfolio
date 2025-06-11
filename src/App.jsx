import { useState } from 'react';
import ProjectsSection from './components/ProjectsSection';

export default function App() {
  const [section, setSection] = useState('home');

  return (
<div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-white">
        <h1 className="text-xl font-bold text-indigo-600">Swarna</h1>
        <ul className="flex space-x-6 font-medium">
          <li><button onClick={() => setSection('home')}>Home</button></li>
          <li><button onClick={() => setSection('projects')}>Projects</button></li>
          <li><button onClick={() => setSection('about')}>About</button></li>
          <li><button onClick={() => setSection('contact')}>Contact</button></li>
	<li>
  		<a href="#resume" className="hover:text-blue-500 transition-colors">Resume</a>
	</li>
        </ul>
      </nav>

      {/* Sections */}
      {section === 'home' && (
        <section className="flex flex-col items-center justify-center text-center py-20 px-4">
          <h2 className="text-4xl font-bold mb-4">Hi, I’m Swarnalatha Swaminathan </h2>
          <p className="text-lg max-w-2xl text-gray-600">
            Engineering Manager | Full-Stack Developer | Fintech Enthusiast
          </p>
          <p className="mt-4 max-w-xl text-gray-600">
            I’m passionate about building scalable solutions and bridging the gap between product and engineering. Currently building personal projects in Spring Boot, React, and Node.js — check out what I’ve been working on!
          </p>
          <div className="mt-6 space-x-4">
            <a href="https://github.com/swarna73" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">GitHub</a>
            <a href="https://www.linkedin.com/in/swarnalathatech/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-500 rounded hover:bg-gray-100">LinkedIn</a>
          </div>
        </section>
      )}
	{section === 'projects' && (
 	 <section className="py-20 px-6">
         <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
         <ProjectsSection />
         </section>
         )}
      {section === 'about' && (
        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            With 20+ years in IT and a strong foundation in software engineering, I’m transitioning back into an engineering manager role. I enjoy building, mentoring, and shipping value — especially in fintech and full-stack dev.
          </p>
        </section>
      )}
      <section id="resume" className="py-12 bg-black text-center">
  <h2 className="text-3xl font-bold mb-4">Resume</h2>
  <p className="text-gray-600 mb-6">Download my resume to learn more about my experience and skills.</p>
<a
  href="/Swarnalatha.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 underline hover:text-blue-800"
>
  View Resume
</a>
</section>

      {section === 'contact' && (
        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="text-gray-600">Email me at <a href="mailto:swarnalatha73@gmail.com" className="text-indigo-600 underline">swarnalatha73@gmail.com</a></p>
        </section>
      )}
    </div>
  );
}

