import React from "react";

const projects = [
  {
    title: "Job Application Tracker",
    description: "Full-stack app to manage job applications with React + Spring Boot. Add, view, and track job status by user.",
    tech: ["React", "Spring Boot", "Tailwind"],
    image: "jobtracker.png",
    link: "https://github.com/swarna73/job-tracker-ui"
  },
  {
    title: "Linear → Jira Migration",
    description: "Node.js script that migrates issues from Linear to Jira including comments and authors.",
    tech: ["Node.js", "Axios", "GraphQL"],
    image: "linear-jira.png",
    link: "https://github.com/swarna73/linear-jira"
  },
  {
    title: "Expense Manager",
    description: "Simple backend app to log expenses by category and view reports.",
    tech: ["Java", "Spring Boot", "Hibernate"],
    image: "expense.png",
    link: "https://github.com/swarna73/expense-manager"
  },
 {
    title: " URL Shortener",
    description: "A simple URL shortener web application built with Node.js, Express, and MongoDB. It provides REST APIs to shorten URLs and redirects users to original websites.",
    tech: ["Node JS"],
    image: "Shortner.png",
    link: "https://github.com/swarna73/url-shortener-node-express"
  }
];

export default function ProjectsSection() {
  return (
    <>
      <section className="py-12" id="projects">
        <div className="text-center mb-10">
	<h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20">
          {projects.map((project, index) => (
	<div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300">
        	<img src={`/images/${project.image}`} alt={project.title} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-200 text-sm px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  GitHub Repo
                </a>
		<a href="https://your-demo-url.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-4">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
