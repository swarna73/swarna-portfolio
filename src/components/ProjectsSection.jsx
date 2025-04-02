const projects = [
  {
    title: "Job Application Tracker",
    description: "Full-stack app to manage job applications with React + Spring Boot. Add, view, and track job status by user.",
    tech: ["React", "Spring Boot", "Tailwind"],
    link: "https://github.com/swarna73/job-tracker-ui",
    backend: "https://github.com/swarna73/job-tracker-backend"
  },
  {
    title: "Linear → Jira Migration",
    description: "Node.js script that migrates issues from Linear to Jira including comments and authors.",
    tech: ["Node.js", "Axios", "GraphQL"],
    link: "https://github.com/swarna73/linear-jira"
  },
  {
    title: "Expense Manager",
    description: "Backend app to log expenses by category. Built to learn JPA, Hibernate, and REST API design.",
    tech: ["Java", "Spring Boot", "H2"],
    link: "https://github.com/swarna73/expense-manager"
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-white px-6" id="projects">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-8 max-w-6xl mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-all border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href={project.link} target="_blank" className="text-sm text-blue-600 underline">Frontend/Code</a>
              {project.backend && (
                <a href={project.backend} target="_blank" className="text-sm text-blue-600 underline">Backend</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
