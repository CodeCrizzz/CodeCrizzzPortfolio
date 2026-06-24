"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, User, Code, Mail, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

// Main function component that is used to navigate between the pages 
export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Array of links to navigate between the pages
  const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: Code },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  // Return the component with the navigation
  return (
    <nav className="flex justify-between items-center px-6 md:px-[10%] py-5 bg-white dark:bg-slate-950 shadow-[0_2px_10px_rgba(0,0,0,0.05)] dark:shadow-none dark:border-b dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="font-extrabold text-2xl text-blue-600 dark:text-white">{"CodeCrizzz</>"}</div>

      <div className={`flex items-center gap-4 md:hidden z-[2001] transition-all duration-500 ${isOpen ? "fixed right-[10%]" : ""}`}>
        <ThemeToggle />
        <input
          type="checkbox"
          id="menu-toggle"
          className="hidden"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        <label
          htmlFor="menu-toggle"
          className={`cursor-pointer text-2xl text-blue-600 transition-transform duration-500 ${isOpen ? "rotate-90" : ""}`}
        >
          <Menu size={28} />
        </label>
      </div>

      {/* List of links to navigate between the pages */}
      <ul
        className={`flex gap-[30px] list-none md:flex-row flex-col md:static fixed top-0 md:h-auto h-screen md:w-auto w-[65%] md:bg-transparent bg-white/98 dark:bg-slate-950/98 backdrop-blur-md md:p-0 pt-20 px-8 transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] z-[2000] md:shadow-none shadow-[-5px_0_20px_rgba(0,0,0,0.1)] ${
          isOpen ? "right-0" : "-right-full md:right-auto"
        }`}
      >
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <li key={link.name} className="w-full md:w-auto">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 md:text-slate-600 dark:md:text-slate-300 text-slate-800 dark:text-slate-200 font-semibold md:text-base text-lg md:p-1 p-3 md:bg-transparent dark:md:bg-transparent bg-slate-100 dark:bg-slate-800 rounded-lg md:rounded-none relative transition-all duration-500 md:hover:bg-transparent dark:md:hover:bg-transparent hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 md:hover:text-blue-600 dark:md:hover:text-blue-400 md:hover:translate-x-0 hover:translate-x-[5px] group ${
                  isActive ? "md:text-blue-600 dark:md:text-blue-400 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 md:bg-transparent dark:md:bg-transparent" : ""
                }`}
              >
                <Icon className="w-5 text-center md:hidden block" size={20} />
                {link.name}
                <span
                  className={`hidden md:block absolute w-full h-[2px] bottom-0 left-0 bg-blue-600 dark:bg-blue-400 origin-bottom-right transition-transform duration-500 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"
                  }`}
                ></span>
              </Link>
            </li>
          );
        })}
        <li className="hidden md:flex items-center md:ml-4 mt-4 md:mt-0">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
