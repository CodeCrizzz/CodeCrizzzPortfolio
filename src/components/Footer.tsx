import Link from "next/link";

// Main function component that is used to display the footer of the website 
export default function Footer() {
  return (
    <footer className="shrink-0 w-full bg-white border-t border-slate-200 py-5 mt-auto">
      <div className="flex flex-col items-center gap-3">
        <p className="text-slate-800 text-sm font-bold">&copy; CodeCrizzz | My Portfolio</p>
        <div className="flex gap-5">
          <Link
            href="https://github.com/Crizzz-Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800 text-2xl transition-all duration-500 hover:text-blue-600 hover:-translate-y-1"
          >
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link
            href="https://www.facebook.com/christian.natividad.3720"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800 text-2xl transition-all duration-500 hover:text-blue-600 hover:-translate-y-1"
          >
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link
            href="https://www.instagram.com/natividadchristian05/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800 text-2xl transition-all duration-500 hover:text-blue-600 hover:-translate-y-1"
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}
