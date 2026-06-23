import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";

// Main function component to display the about page
export default function About() {
  const skills = [
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "PHP", icon: "devicon-php-plain colored" },
    { name: "C#", icon: "devicon-csharp-plain colored" },
    { name: "React", icon: "devicon-react-plain colored"},
    { name: "Next.js", icon: "devicon-nextjs-plain colored"},
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored"},
    { name: "Node.js", icon: "fa-brands fa-node text-green-600" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
  ];

  return (
    <main className="flex-1 w-full max-w-[1300px] mx-auto my-12 px-5 relative z-10">
      <div className="flex flex-col gap-8">
        {/* Top Section - About Me & Image */}
        <Reveal className="w-full">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_40px_rgb(0,0,0,0.04)] p-8 md:p-14">
            {/* Background glowing orbs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            <div className="absolute bottom-0 -left-10 w-80 h-80 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center gap-12">
              <div className="shrink-0 relative group">
                <Image 
                  src="/assets/img/profile.png" 
                  alt="Christian Natividad" 
                  width={256}
                  height={320}
                  className="w-48 h-64 md:w-64 md:h-80 rounded-2xl border-4 border-white shadow-2xl relative z-10 object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
              
              <div className="text-center lg:text-left flex-1">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <span className="w-8 h-[2px] bg-blue-600 rounded-full"></span>
                  <span className="text-blue-600 font-black tracking-[0.2em] uppercase text-sm">
                    Get To Know Me
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Christian Natividad</span>
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-base md:text-lg font-medium">
                  <p>
                    I am a 3rd-year <strong className="text-slate-800">BS Information Systems</strong> student at JRMSU Main Campus. I build functional, high-efficiency web applications by combining system analysis with user-centric design.
                  </p>
                  <p>
                    I’m dedicated to translating complex business needs into intuitive and visually appealing technical solutions. As a student developer focused on collaborative problem-solving, I aim to build meaningful digital tools that solve real-world problems.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Link href="/projects" className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/30">
                    View My Work
                  </Link>
                  <Link href="/contact" className="px-8 py-3.5 bg-white text-slate-800 rounded-full font-bold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm">
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom Section - Bento Grid for Skills & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          
            <Reveal className="lg:col-span-2">
            {/* Tech Stack Section */}
            <div className="h-full bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl shadow-inner border border-blue-200">
                    <i className="fa-solid fa-code"></i>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Tech Stack</h3>
                </div>
                
                {/* Grid layout for the tech stack */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-h-[280px] overflow-y-auto custom-scrollbar pr-2 pb-2">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center gap-3 bg-white p-5 rounded-2xl border border-slate-100 hover:border-blue-300 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgb(37,99,235,0.15)] cursor-pointer group/skill"
                    >
                      <i className={`${skill.icon} text-4xl group-hover/skill:scale-110 group-hover/skill:rotate-3 transition-transform duration-500`}></i>
                      <span className="font-bold text-slate-700 text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-1">
            {/* Education Section */}
            <div className="h-full bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 rounded-[2.5rem] shadow-[0_20px_40px_rgb(0,0,0,0.2)] p-8 md:p-10 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000">
                <i className="fa-solid fa-graduation-cap text-9xl"></i>
              </div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl mb-6 border border-white/20 shadow-inner">
                    <i className="fa-solid fa-graduation-cap text-blue-300"></i>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Education</h3>
                </div>
                
                <div className="mt-auto space-y-5 bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-500">
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-lg mb-2">
                      Present
                    </div>
                    <h4 className="text-xl font-bold text-white leading-tight">BS Information Systems</h4>
                    <p className="text-blue-200 font-medium text-sm">Jose Rizal Memorial State University</p>
                    <div className="flex items-center gap-2 text-slate-400 text-xs pt-2 mt-2 border-t border-white/10">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>Main Campus, Dapitan City</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </main>
  );
}
