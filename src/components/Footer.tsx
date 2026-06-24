import Link from "next/link";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

// Main function component that is used to display the footer of the website 
export default function Footer() {
  return (
    <footer className="shrink-0 w-full bg-white dark:bg-black border-t border-slate-200 dark:border-zinc-800 py-5 mt-auto transition-colors duration-300">
      <div className="flex flex-col items-center gap-3">
        <p className="text-slate-800 dark:text-slate-200 text-sm font-bold">&copy; CodeCrizzz | My Portfolio</p>
        <div className="flex gap-5">
          <Link
            href="https://github.com/Crizzz-Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800 dark:text-slate-200 text-2xl transition-all duration-500 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.facebook.com/christian.natividad.3720"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800 dark:text-slate-200 text-2xl transition-all duration-500 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href="https://www.instagram.com/natividadchristian05/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800 dark:text-slate-200 text-2xl transition-all duration-500 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1"
          >
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
