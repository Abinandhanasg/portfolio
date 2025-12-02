import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Campus Connect",
      description: "A student–faculty communication platform with announcements, chats, and event updates.",
    },
    {
      title: "Page Replacement Algorithm",
      description: "Simulation of FIFO, LRU, and Optimal page replacement for OS learning.",
    },
    
    {
      title: "Tiny Talks & Care Hub",
      description: "A mental health–focused platform for short talks, motivation, and emotional support.",
    },
    {
      title: "Book Recommendation System",
      description: "Recommends best books based on user interests using ML-based filtering.",
    },
    {
      title: "OpenAI for Braille Candidates",
      description: "Assisting visually impaired students with AI-based audio responses & study support.",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio designed with React + TailwindCSS.",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-white/10 backdrop-blur-lg px-8 py-24 scroll-mt-24">
      <h2 className="text-4xl font-bold text-white text-center mb-12">My Projects</h2>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/30 hover:scale-105 transition-transform"
          >
            <h3 className="text-2xl font-bold text-blue-200 mb-3">{project.title}</h3>
            <p className="text-gray-100 mb-4">{project.description}</p>

            <button
              onClick={() => setSelectedProject(project)}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
            >
              View Project Description
            </button>
          </div>
        ))}
      </div>

      {/* Modal (Popup) */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center backdrop-blur-sm z-50">
          <div className="bg-white/20 backdrop-blur-2xl p-8 rounded-2xl border border-white/30 max-w-lg shadow-2xl text-center">
            <h2 className="text-3xl font-bold text-blue-300 mb-4">
              {selectedProject.title}
            </h2>
            <p className="text-gray-100 mb-6">{selectedProject.description}</p>

            <button
              onClick={() => setSelectedProject(null)}
              className="px-5 py-2 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
