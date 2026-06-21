import Link from "next/link";
import TypingText from "@/components/TypingText";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center p-5 md:h-[80vh]">
      <div className="animate-fade-in-up opacity-0 translate-y-5">
        <h1 className="text-[2.2rem] md:text-5xl lg:text-6xl mb-4 font-bold text-slate-800">
          <TypingText text="Hello, Welcome to my Portfolio!" />
        </h1>
        <p className="text-[0.95rem] md:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          I&apos;m a student that has passion about learning and building projects in web development. Thank you for visiting.
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-5 justify-center items-center mt-4">
          <Link
            href="/projects"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_4px_6px_-1px_rgba(37,99,235,0.2)] hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(37,99,235,0.4)] hover:brightness-110 hover:scale-105"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="inline-block border border-gray-300 text-slate-800 py-3 px-8 rounded-lg transition-all duration-300 ease-out hover:bg-slate-100 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-1 hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
  );
}
