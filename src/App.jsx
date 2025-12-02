import { useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode((p) => !p);

  return (
    <div className={"min-h-screen " + (darkMode ? "bg-gradient-to-b from-black to-gray-900 text-white" : "bg-white text-gray-900") }>

      {/* NAVBAR */}
      <nav className={"bg-black/60 backdrop-blur-md shadow-md p-4 flex justify-between items-center fixed w-full top-0 z-20 " + (darkMode ? "" : "bg-white/60 backdrop-blur-sm")}>
        <h1 className={"text-2xl font-bold " + (darkMode ? "text-cyan-400" : "text-cyan-600")}>My Portfolio</h1>

        <ul className="flex space-x-6 font-semibold">
          <li onClick={() => setActiveSection("home")} className="cursor-pointer hover:text-cyan-400">Home</li>
          <li onClick={() => setActiveSection("about")} className="cursor-pointer hover:text-cyan-400">About</li>
          <li onClick={() => setActiveSection("projects")} className="cursor-pointer hover:text-cyan-400">Projects</li>
          <li onClick={() => setActiveSection("skills")} className="cursor-pointer hover:text-cyan-400">Skills</li>
          <li onClick={() => setActiveSection("certifications")} className="cursor-pointer hover:text-cyan-400">Certifications</li>
          <li onClick={() => setActiveSection("internship")} className="cursor-pointer hover:text-cyan-400">Internship</li>
          <li onClick={() => setActiveSection("resume")} className="cursor-pointer hover:text-cyan-400">Resume</li>
          <li onClick={() => setActiveSection("contact")} className="cursor-pointer hover:text-cyan-400">Contact</li>
        </ul>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={"px-3 py-1 rounded-md font-medium shadow-sm " + (darkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-100 hover:bg-gray-200")}
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>

          <a
            href="/resume.pdf"
            download
            className="hidden md:inline-block bg-cyan-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-cyan-400 shadow"
          >
            Download Resume
          </a>
        </div>
      </nav>

      {/* CONTENT AREA */}
      <div className="pt-24">

        {/* HOME */}
        {activeSection === "home" && (
          <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <img
              src="/myphoto.jpeg"
              alt="profile"
              className="w-40 h-40 rounded-full shadow-xl border-4 border-cyan-400"
            />

            <h2 className="text-4xl font-bold mt-6 text-cyan-300 drop-shadow">ABINANDHANA S.G</h2>

            <p className="text-xl text-gray-300 mt-2">BE — Computer Science and Engineering (Kongu Engineering College)</p>

            <div className="flex space-x-6 mt-6">
              <a href="https://www.linkedin.com/in/abinandhana-s-g-347263319" className="text-blue-300 text-xl font-semibold hover:underline">LinkedIn</a>
              <a href="https://github.com/Abinandhanasg" className="text-white text-xl font-semibold hover:underline">GitHub</a>
              <a href="mailto:abinandhana450@gmail.com" className="text-red-300 text-xl font-semibold hover:underline">Email</a>
            </div>

            <div className="mt-8 flex space-x-4">
              <a href="#" onClick={() => setActiveSection('projects')} className="bg-cyan-500 px-5 py-2 rounded-lg font-semibold text-black hover:bg-cyan-400">See Projects</a>
              <a href="#" onClick={() => setActiveSection('certifications')} className="bg-transparent border border-cyan-400 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400/10">Certifications</a>
            </div>
          </section>
        )}

        {/* ABOUT */}
        {activeSection === "about" && (
          <div className="min-h-screen flex justify-center items-center">
            <About />
          </div>
        )}

        {/* PROJECTS */}
        {activeSection === "projects" && (
          <div className="min-h-screen flex justify-center items-center">
            <Projects />
          </div>
        )}

        {/* SKILLS */}
        {activeSection === "skills" && (
          <div className="min-h-screen flex justify-center items-center">
            <Skills />
          </div>
        )}

        {/* CERTIFICATIONS */}
        {activeSection === "certifications" && (
          <section className="min-h-screen text-white flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-bold text-cyan-300 mb-6">Certifications</h1>
            <div className="max-w-3xl text-center space-y-12">

              {/* MongoDB */}
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-cyan-300">MongoDB</h2>
                <p className="text-xl text-gray-300">Gained hands-on experience in NoSQL database concepts and CRUD operations. (2024)</p>
                <a href="/mongodb exam certificate.pdf" target="_blank" rel="noreferrer" className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 hover:-translate-y-1 transition">
                  <span className="text-cyan-400 font-medium">View Certificate →</span>
                </a>
              </div>

              {/* Java SE17 */}
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-cyan-300">Java SE17</h2>
                <p className="text-xl text-gray-300">Strengthened skills in object-oriented programming, exception handling, collections, and multithreading. (2024)</p>
                <a href="/Java certificate.pdf" target="_blank" rel="noreferrer" className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 hover:-translate-y-1 transition">
                  <span className="text-cyan-400 font-medium">View Certificate →</span>
                </a>
              </div>

              {/* Intrainz Innovation */}
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-cyan-300">Intrainz Innovation Company</h2>
                <p className="text-xl text-gray-300">Certification focusing on Web Development and Full-Stack projects. Gained hands-on experience with React, Node.js, and database management.</p>
                <a href="/intrainz_certificate.pdf" target="_blank" rel="noreferrer" className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 hover:-translate-y-1 transition">
                  <span className="text-cyan-400 font-medium">View Certificate →</span>
                </a>
              </div>

            </div>
          </section>
        )}

        {/* INTERNSHIP */}
        {activeSection === "internship" && (
          <section className="min-h-screen text-white flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-bold text-cyan-300 mb-6">Internship Experience</h1>
            <div className="max-w-3xl text-center space-y-12">

              {/* Alfido Tech */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-300">Alfido Tech</h2>
                <p className="text-xl text-gray-300">📌 Completed a Summer Internship where I worked on Web Development projects.</p>
                <p className="text-xl text-gray-300">Gained hands-on experience with React and Node.js.</p>
                <p className="text-xl text-gray-300">Collaborated with a team of developers and presented the final project to the mentor.</p>
                <a href="/alfido.pdf" target="_blank" rel="noreferrer" className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 hover:-translate-y-1 transition">
                  <span className="text-cyan-400 font-medium">View Certificate →</span>
                </a>
              </div>

              {/* Intrainz Innovation Company */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-300">Intrainz Innovation </h2>
                <p className="text-xl text-gray-300">📌 Completed an Internship focusing on Web Development and Full-Stack projects.</p>
                <p className="text-xl text-gray-300">Gained hands-on experience with React, Node.js, and database management.</p>
                <p className="text-xl text-gray-300">Worked on practical projects and presented the final output to the mentors for evaluation.</p>
                <a href="/intrainz.pdf" target="_blank" rel="noreferrer" className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 hover:-translate-y-1 transition">
                  <span className="text-cyan-400 font-medium">View Certificate →</span>
                </a>
              </div>

            </div>
          </section>
        )}

        {/* RESUME */}
        {activeSection === "resume" && (
          <section className="min-h-screen flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold mb-6 text-cyan-300">My Resume</h1>
            <iframe
              src="/resume.pdf"
              className="w-11/12 md:w-3/4 h-[600px] border-2 border-cyan-400 rounded-xl shadow-xl"
              title="Resume Preview"
            ></iframe>
            <a
              href="/resume.pdf"
              download
              className="mt-6 bg-cyan-500 px-6 py-3 rounded-lg text-xl font-semibold text-black hover:bg-cyan-400 shadow-lg"
            >
              Download Resume
            </a>
          </section>
        )}

        {/* CONTACT */}
        {activeSection === "contact" && (
          <section className="min-h-screen flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-xl mb-2">📧 Email: abinandhana450@gmail.com</p>
            <p className="text-xl">📞 Phone: +91 87781 67744</p>
            <div className="mt-8 w-full max-w-xl">
              <form action="mailto:abinandhana450@gmail.com" method="post" encType="text/plain" className="flex flex-col space-y-4">
                <input name="name" placeholder="Your name" className="p-3 rounded-md bg-gray-800/40 border border-gray-700" />
                <input name="email" placeholder="Your email" className="p-3 rounded-md bg-gray-800/40 border border-gray-700" />
                <textarea name="message" placeholder="Message" rows={5} className="p-3 rounded-md bg-gray-800/40 border border-gray-700" />
                <button type="submit" className="bg-cyan-500 px-4 py-2 rounded-md font-semibold text-black">Send Message</button>
              </form>
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
