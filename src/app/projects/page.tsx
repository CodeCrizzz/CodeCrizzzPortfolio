import Reveal from "@/components/Reveal";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";

// Main function component to display the projects page
export default function Projects() {
  const projects = [
    {
      title: "Boarding House Management System",
      description: "A system that tracks tenants, rooms, and payments efficiently.",
      image: "/assets/img/bhms_img.png",
      link: "https://rentflow-eight-rouge.vercel.app",
      linkText: "View System",
      external: true,
    },
    {
      title: "Personal Portfolio",
      description: "A showcase of my skills in web development",
      image: "/assets/img/portfolio_img.png",
      link: "/",
      linkText: "View Portfolio",
      external: false,
    },
    {
      title: "OG Coffee",
      description: "Experience the finest specialty coffee in Dipolog City. Every cup tells a story of carefully sourced beans, expert roasting, and the art of brewing.",
      image: "/assets/img/og_coffee_img.png",
      link: "",
      linkText: "In Development",
      external: false,
    }
  ];

  // Return the component with the projects data  
  return (
    <main className="flex-1 w-full max-w-[1100px] mx-auto my-12 px-5 flex flex-col items-center">
      <Reveal className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl text-slate-800 dark:text-white font-bold mb-3">My Projects</h1>
        <p className="text-slate-500 dark:text-slate-300 text-lg">Projects I developed when learning Web Development</p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1000px] justify-center">
        {projects.map((project, index) => (
          <Reveal key={index} className="w-full relative h-[250px] md:h-[300px] rounded-[20px] overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-[0_10px_25px_rgba(0,0,0,0.05)] group transition-colors duration-300">
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized
              className="object-cover transition-all duration-500 ease-in-out group-hover:blur-sm group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            <div className="absolute bottom-0 w-full bg-white/95 dark:bg-slate-900/95 p-5 text-center z-10 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-5">
              <h3 className="m-0 text-[0.9rem] text-slate-800 dark:text-slate-200 font-black">{project.title}</h3>
            </div>

            <div className="absolute inset-0 bg-white/85 dark:bg-slate-900/90 flex items-center justify-center p-8 opacity-0 z-20 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
              <div className="text-center text-black dark:text-white">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm leading-relaxed mb-5 font-bold">&quot;{project.description}&quot;</p>
                {project.external ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#4201f5] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-500 hover:bg-[#2de7ff] hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
                  >
                    {project.linkText}
                  </a>
                ) : (
                  <Link
                    href={project.link}
                    className="inline-block bg-[#4201f5] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-500 hover:bg-[#2de7ff] hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
                  >
                    {project.linkText}
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
