export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-white/10 backdrop-blur-lg scroll-mt-24"
    >
      <div className="max-w-5xl bg-white/20 backdrop-blur-xl shadow-2xl rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12 border border-white/30">

        {/* Photo */}
        <img
          src="/myphoto.jpeg"
          alt="Profile"
          className="w-52 h-52 md:w-60 md:h-60 rounded-3xl shadow-xl border-4 border-white object-cover"
        />

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            About Me
          </h2>

          <p className="text-lg text-gray-100 leading-relaxed">
            I am <span className="font-semibold text-blue-300">Abinandhana S.G</span>,  
            a passionate <span className="font-semibold text-blue-200">Full Stack Developer and UI/UX Designer</span>,  
            currently pursuing  
            <span className="font-semibold text-blue-300"> BE CSE at Kongu Engineering College</span>.
          </p>

          <p className="text-lg text-gray-100 mt-4 leading-relaxed">
            I enjoy building beautiful, responsive, and user-friendly web applications.  
            My work focuses on minimal design, smooth animations, and modern  
            technologies to create meaningful digital experiences.
          </p>

          <p className="text-lg text-gray-100 mt-4 leading-relaxed">
            I constantly explore new tools, frameworks, and design principles  
            to strengthen my development and creative skills. I love turning ideas  
            into functional and visually appealing interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}
