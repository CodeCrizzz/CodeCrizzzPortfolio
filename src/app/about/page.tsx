import Reveal from "@/components/Reveal";
import TiltImage from "@/components/TiltImage";

export default function About() {
  return (
    <main className="flex-1 w-full max-w-[900px] mx-auto my-12 px-5">
      <Reveal className="bg-white p-6 md:p-10 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-200 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
          <TiltImage src="/assets/img/profile.png" alt="Profile" />
          
          <div className="text-center md:text-left">
            <h2 className="text-[1.5rem] md:text-[1.8rem] text-blue-600 font-extrabold mb-4">About Me</h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-[0.9rem] md:text-base">
              I am <strong>Christian Natividad</strong> a 3rd-year BSIS student at JRMSU Main Campus, I build functional, high-efficiency web applications by combining system analysis with user-centric design. I’m dedicated to translating complex business needs into intuitive and visually appealing technical solutions.
            </p>
            <p className="text-slate-600 leading-relaxed text-[0.9rem] md:text-base">
              I’m a student developer focused on collaborative problem-solving and optimizing processes. I aim to build meaningful digital tools that solve real-world problems for users and businesses alike.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <div className="bg-white p-8 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-200 flex flex-col items-center text-center">
          <h3 className="text-xl md:text-2xl text-blue-600 uppercase tracking-wide mb-6 font-bold">Tech Stack</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { name: "HTML", icon: "devicon-html5-plain colored" },
              { name: "CSS", icon: "devicon-css3-plain colored" },
              { name: "JavaScript", icon: "devicon-javascript-plain colored" },
              { name: "PHP", icon: "devicon-php-plain colored" },
              { name: "Node.js", icon: "fa-brands fa-node text-green-600" },
              { name: "C#", icon: "devicon-csharp-plain colored" },
              { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
              { name: "MySQL", icon: "devicon-mysql-plain colored" },
            ].map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-2 bg-white px-4 md:px-6 py-2 md:py-3 rounded-[15px] text-[1rem] md:text-[1.1rem] font-bold text-slate-700 border-2 border-slate-100 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(37,99,235,0.25)] group"
              >
                <i className={`${skill.icon} text-2xl group-hover:text-white`}></i> {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-200 flex flex-col items-center text-center justify-center">
          <div className="mb-4">
            <i className="fa-solid fa-graduation-cap text-4xl md:text-5xl text-blue-600 mb-4"></i>
            <h3 className="text-xl md:text-2xl text-blue-600 uppercase tracking-wide font-bold">My Education</h3>
          </div>
          <div>
            <h4 className="text-lg md:text-xl text-slate-800 font-bold mb-1">BS Information Systems</h4>
            <p className="font-semibold text-slate-600">Jose Rizal Memorial State University</p>
            <p className="text-sm text-slate-500">Main Campus, Dapitan City</p>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
