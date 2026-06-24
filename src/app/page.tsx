import Link from "next/link";
import TypingText from "@/components/TypingText";
import Reveal from "@/components/Reveal";
import { ArrowRight, Download, Handshake } from "lucide-react";

// Main function component used to display the home page
export default function Home() {
  return (
    <main className="flex-1 w-full max-w-[1200px] mx-auto flex items-center justify-center p-5 md:p-8 xl:p-10">
      <Reveal className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-black text-slate-900 mb-6 lg:mb-8 leading-[1.05] tracking-tight">
            I build <span className="text-blue-600">solutions</span> <br/>
            for the web.
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl text-slate-500 mb-8 lg:mb-10 font-medium h-10 md:h-12">
            <TypingText text="Hello, Welcome to my Portfolio!" />
          </div>
          
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed">
            Passionate about building functional, responsive web applications. Welcome to my portfolio. Thank you for dropping by!        </p>
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link
              href="/projects"
              className="flex items-center justify-center gap-3 bg-blue-600 text-white py-4 px-10 rounded-xl font-bold text-lg transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="text-base" size={20} />
            </Link>
            <a
              href="/cv/CV.pdf"
              download="CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white border-2 border-slate-200 text-slate-700 py-4 px-10 rounded-xl font-bold text-lg transition-all hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5"
            >
              Download CV
              <Download className="text-base" size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
            {/* Background decorative shapes */}
            <div className="absolute inset-0 bg-blue-50 rounded-[3rem] rotate-6 scale-105 transition-transform duration-500 hover:rotate-12"></div>
            <div className="absolute inset-0 bg-slate-100 rounded-[3rem] -rotate-3 scale-105 transition-transform duration-500 hover:-rotate-6 border border-slate-200"></div>
            
            {/* Image container */}
            <div className="absolute inset-0 bg-white rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center group">
              <img 
                src="/assets/img/profile2.png" 
                alt="Christian Natividad" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            {/* Floating element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 md:p-5 rounded-2xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <Handshake className="text-xl relative z-10" size={24} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-800">Open for collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Reveal>
    </main>
  );
}
