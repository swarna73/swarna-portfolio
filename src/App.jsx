import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I’m Swarnalatha Swaminathan 👋</h1>
        <p className="text-xl text-gray-700 max-w-2xl">
          Engineering Manager | Full-Stack Developer | Fintech Enthusiast
        </p>
        <p className="mt-4 text-gray-600 max-w-xl">
          I’m passionate about building scalable solutions and bridging the gap between product and engineering.
          Currently building personal projects in Spring Boot, React, and Node.js — check out what I’ve been working on!
        </p>
        <div className="mt-6 flex gap-4">
          <a href="https://github.com/swarna73" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/swarnalathatech/" className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-100" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <ProjectsSection />
    </>
  );
}

export default App;
