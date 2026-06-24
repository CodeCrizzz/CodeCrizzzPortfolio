"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import { 
  Code, 
  GraduationCap, 
  MapPin 
} from "lucide-react";
import { FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiPhp, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPostgresql, SiMysql, SiSupabase, SiGit, SiDotnet } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

// Main function component to display the about page
export default function About() {
  const [showMore, setShowMore] = useState(false);

  // Skills to be displayed on the tech stack section
  const skills = [
    { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
    { name: "C#", icon: TbBrandCSharp, color: "text-[#239120]" },
    { name: "React", icon: SiReact, color: "text-[#61DAFB]"},
    { name: ".NET", icon: SiDotnet, color: "text-[#512BD4] dark:text-white" },  
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white"},
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]"},
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]"},
    { name: "Git", icon: SiGit, color: "text-[#F05032]"},
    { name: "GitHub", icon: FaGithub, color: "text-black dark:text-white"},
  ];

  return (
    <main className="flex-1 w-full max-w-[1300px] mx-auto my-12 px-5 relative z-10">
      <div className="flex flex-col gap-8">
        {/* Top Section - About Me & Image */}
        <Reveal className="w-full">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white/60 dark:bg-slate-900/60 border border-white/80 dark:border-slate-800 shadow-[0_8px_40px_rgb(0,0,0,0.04)] p-8 md:p-14 transition-colors duration-300">
            {/* Background glowing orbs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/20 dark:bg-blue-500/10 rounded-full filter blur-2xl opacity-70 md:animate-pulse"></div>
            <div className="absolute bottom-0 -left-10 w-80 h-80 bg-purple-400/20 dark:bg-purple-500/10 rounded-full filter blur-2xl opacity-70 md:animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center gap-12">
              <div className="shrink-0 relative group">
                <Image 
                  src="/assets/img/profile.png" 
                  alt="Christian Natividad" 
                  width={800}
                  height={1000}
                  quality={100}
                  className="w-48 h-64 md:w-70 md:h-100 rounded-2xl border-4 border-white dark:border-slate-800 shadow-2xl relative z-10 object-cover transition-transform duration-500 hover:scale-105"
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
                <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-6 tracking-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Christian Natividad</span>
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg font-medium">
                  <p>
                    I am a <strong className="text-slate-800 dark:text-slate-200">BS Information Systems</strong> student at JRMSU Main Campus. I build functional, high-efficiency web applications by combining system analysis with user-centric design.
                  </p>
                  <div 
                    className={`space-y-4 overflow-hidden duration-500 ease-in-out md:max-h-none ${showMore ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 md:opacity-100"}`}
                    style={{ transitionProperty: "max-height, opacity" }}
                  >
                    <p>
                      A motivated BSIS student seeking for an opportunity to use my skills and knowledge in a real-world environment. Eager to transition academic experience in building functional web applications into real-world practice. Committed to supporting a collaborative development team, learning modern web technologies, and contributing to clean, responsive user interface
                    </p>
                  </div>
                  <button 
                    onClick={() => setShowMore(!showMore)}
                    className="md:hidden text-blue-600 dark:text-blue-400 font-bold flex w-full justify-center items-center gap-1 mt-2 hover:underline focus:outline-none transition-colors"
                  >
                    {showMore ? "Show Less" : "Read More"}
                    <svg className={`w-4 h-4 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Link href="/projects" className="px-8 py-3.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full font-bold hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-lg hover:shadow-blue-500/30">
                    View My Work
                  </Link>
                  <Link href="/contact" className="px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-full font-bold border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
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
            <div className="h-full bg-white/60 dark:bg-slate-900/60 border border-white/80 dark:border-slate-800 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] p-8 md:p-10 relative overflow-hidden group transition-colors duration-300">
              <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 dark:from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl shadow-inner border border-blue-200 dark:border-blue-800/50">
                    <Code size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">Tech Stack</h3>
                </div>
                
                {/* Grid layout for the tech stack */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-h-[280px] overflow-y-auto custom-scrollbar pr-2 pb-2">
                  {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center gap-3 bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgb(37,99,235,0.15)] cursor-pointer group/skill"
                    >
                      <Icon className={`${skill.color} group-hover/skill:scale-110 group-hover/skill:rotate-3 transition-transform duration-500`} size={40} />
                      <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">{skill.name}</span>
                    </div>
                  )})}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-1">
            {/* Education Section */}
            <div className="h-full bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 rounded-[2.5rem] shadow-[0_20px_40px_rgb(0,0,0,0.2)] p-8 md:p-10 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000">
                <GraduationCap size={128} />
              </div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl mb-6 border border-white/20 shadow-inner">
                    <GraduationCap className="text-blue-300" size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Education</h3>
                </div>
                
                <div className="mt-auto space-y-5 bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-500">
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-lg mb-2">
                      Present
                    </div>
                    <h4 className="text-xl font-bold text-white leading-tight">BS Information Systems</h4>
                    <p className="text-blue-200 font-medium text-sm">Jose Rizal Memorial State University</p>
                    <div className="flex items-center gap-2 text-slate-400 text-xs pt-2 mt-2 border-t border-white/10">
                      <MapPin size={16} />
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
